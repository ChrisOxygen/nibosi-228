"use client";

import { useEffect, useTransition, useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePostHog } from "posthog-js/react";
import { useOrderStore } from "@/store/order";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Spinner } from "@/components/ui/spinner";
import { PRICING, formatNaira, LINE_ITEMS } from "@/constants/pricing";
import { PRODUCT, PRODUCT_IMAGES } from "@/constants/product";
import { COPY, QUANTITY_OPTIONS } from "@/constants/copy";
import { checkoutSchema, type CheckoutFormValues } from "@/validators/checkout";
import { EVENTS } from "@/lib/posthog";

function FieldWrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-1.5">{children}</div>;
}

function GoldLabel({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <Label
      htmlFor={htmlFor}
      className="text-brand-primary font-heading font-semibold text-sm"
    >
      {children}
    </Label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <span className="text-red-400 text-xs">{message}</span>;
}

const INPUT_CLASS =
  "border-brand-primary/60 focus-visible:border-brand-primary bg-transparent text-white h-10";

function isSameData(a: CheckoutFormValues, b: CheckoutFormValues) {
  const keys: (keyof CheckoutFormValues)[] = [
    "firstName",
    "lastName",
    "mainPhone",
    "altPhone",
    "quantity",
    "email",
    "deliveryAddress",
    "state",
  ];
  return keys.every((k) => (a[k] ?? "") === (b[k] ?? ""));
}

export default function CheckoutForm() {
  const router = useRouter();
  const setOrder = useOrderStore((s) => s.setOrder);
  const orderData = useOrderStore((s) => s.orderData);
  const [isPending, startTransition] = useTransition();
  const [webhookError, setWebhookError] = useState<string | null>(null);
  const ph = usePostHog();
  const hasStarted = useRef(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { quantity: "1" },
  });

  useEffect(() => {
    if (orderData) {
      reset(orderData);
    }
  }, [orderData, reset]);

  function trackStart() {
    if (hasStarted.current) return;
    hasStarted.current = true;
    ph?.capture(EVENTS.CHECKOUT_STARTED);
  }

  function onSubmit(data: CheckoutFormValues) {
    setWebhookError(null);
    startTransition(async () => {
      if (orderData && isSameData(data, orderData)) {
        ph?.capture(EVENTS.CHECKOUT_DUPLICATE_SKIPPED);
        router.push("/thank-you");
        return;
      }

      ph?.capture(EVENTS.CHECKOUT_SUBMITTED, {
        quantity: data.quantity,
        has_email: !!data.email,
        has_alt_phone: !!data.altPhone,
        has_state: !!data.state,
      });

      try {
        const res = await fetch(process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL!, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sku: "nibosi-2628",
            firstName: data.firstName,
            lastName: data.lastName || undefined,
            mainPhone: data.mainPhone,
            altPhone: data.altPhone || undefined,
            quantity: data.quantity,
            email: data.email || undefined,
            deliveryAddress: data.deliveryAddress || undefined,
            state: data.state || undefined,
          }),
        });
        if (!res.ok) {
          const payload = await res.json().catch(() => null);
          const code = payload?.error?.code as string | undefined;
          const message =
            code === "bad_request"
              ? "It looks like you've already placed this order. We'll be in touch with you soon!"
              : code === "not_found"
                ? "This product is currently unavailable. Please contact us directly."
                : code === "validation_error"
                  ? "Some of your details look incorrect. Please review and try again."
                  : "Something went wrong on our end. Please try again in a moment.";
          ph?.capture(EVENTS.CHECKOUT_ERROR, {
            error_code: code,
            status: res.status,
            is_network_error: false,
          });
          setWebhookError(message);
          return;
        }
      } catch (err) {
        const message = "Network error — please check your connection and try again.";
        ph?.capture(EVENTS.CHECKOUT_ERROR, {
          error_message: String(err),
          is_network_error: true,
        });
        setWebhookError(message);
        return;
      }

      ph?.capture(EVENTS.CHECKOUT_SUCCESS, { quantity: data.quantity });
      setOrder(data);
      router.push("/thank-you");
    });
  }

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8  items-start">
        {/* Left — product summary, sticky on lg+ */}
        <div className="flex flex-col justify-self-center w-full max-w-2xl lg:max-w-full gap-6 lg:sticky lg:top-8">
          <div className="p-1 flex w-full gap-1 items-stretch bg-brand-primary">
            <Image
              alt={PRODUCT.WATCH_NAME}
              src={PRODUCT_IMAGES.WATCH_PRICING}
              width={1000}
              height={1000}
              className="h-[180px] sm:h-[300px] w-1/2 object-cover"
            />
            <Image
              alt={PRODUCT.BRACELET_NAME}
              src={PRODUCT_IMAGES.BRACELET}
              width={1000}
              height={1000}
              className="h-[180px] sm:h-[300px] w-1/2 object-cover"
            />
          </div>

          <h2 className="font-heading font-semibold text-2xl sm:text-3xl text-brand-primary text-center">
            {COPY.PACKAGE_HEADING}
          </h2>

          <div className="flex flex-col gap-3 px-2 font-heading">
            {LINE_ITEMS.map(({ label, price }) => (
              <div key={label} className="flex gap-2 items-center min-w-0">
                <span className="text-sm sm:text-base font-semibold shrink-0">
                  {label}
                </span>
                <span className="shrink w-full border-dashed border-b-4 border-white" />
                <span className="text-sm sm:text-base font-semibold shrink-0">
                  {formatNaira(price)}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="font-heading font-semibold text-xl sm:text-2xl text-brand-muted line-through">
              Total Value: {formatNaira(PRICING.ORIGINAL)}
            </p>
            <p className="font-heading font-semibold text-3xl sm:text-4xl text-brand-primary text-center">
              Order Today : {formatNaira(PRICING.OFFER)}
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="bg-brand-surface max-w-3xl w-full lg:max-w-full justify-self-center rounded p-4 sm:p-6 flex flex-col gap-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            onFocus={trackStart}
            className="flex flex-col gap-5"
          >
            <FieldWrapper>
              <GoldLabel htmlFor="firstName">First Name *</GoldLabel>
              <Input
                id="firstName"
                {...register("firstName")}
                className={INPUT_CLASS}
              />
              <FieldError message={errors.firstName?.message} />
            </FieldWrapper>

            <FieldWrapper>
              <GoldLabel htmlFor="lastName">Last Name</GoldLabel>
              <Input
                id="lastName"
                {...register("lastName")}
                className={INPUT_CLASS}
              />
              <FieldError message={errors.lastName?.message} />
            </FieldWrapper>

            <FieldWrapper>
              <GoldLabel htmlFor="mainPhone">Main Phone Number *</GoldLabel>
              <Input
                id="mainPhone"
                type="tel"
                {...register("mainPhone")}
                className={INPUT_CLASS}
              />
              <FieldError message={errors.mainPhone?.message} />
            </FieldWrapper>

            <FieldWrapper>
              <GoldLabel htmlFor="altPhone">Alternative Phone Number</GoldLabel>
              <Input
                id="altPhone"
                type="tel"
                {...register("altPhone")}
                className={INPUT_CLASS}
              />
              <FieldError message={errors.altPhone?.message} />
            </FieldWrapper>

            <FieldWrapper>
              <GoldLabel>Choose quantity</GoldLabel>
              <Controller
                name="quantity"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={(v) => {
                      field.onChange(v);
                      ph?.capture(EVENTS.CHECKOUT_QUANTITY_SELECTED, { quantity: v });
                    }}
                    className="gap-2"
                  >
                    {QUANTITY_OPTIONS.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm text-white"
                      >
                        <RadioGroupItem
                          value={opt.value}
                          className="border-brand-primary/60 data-checked:border-brand-primary data-checked:bg-brand-primary shrink-0"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </RadioGroup>
                )}
              />
              <FieldError message={errors.quantity?.message} />
            </FieldWrapper>

            <FieldWrapper>
              <GoldLabel htmlFor="email">Email</GoldLabel>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={INPUT_CLASS}
              />
              <FieldError message={errors.email?.message} />
            </FieldWrapper>

            <FieldWrapper>
              <GoldLabel htmlFor="deliveryAddress">
                Delivery Address *
              </GoldLabel>
              <Textarea
                id="deliveryAddress"
                rows={4}
                {...register("deliveryAddress")}
                className="border-brand-primary/60 focus-visible:border-brand-primary bg-transparent text-white min-h-[100px]"
              />
              <FieldError message={errors.deliveryAddress?.message} />
            </FieldWrapper>

            <FieldWrapper>
              <GoldLabel htmlFor="state">State</GoldLabel>
              <Input
                id="state"
                {...register("state")}
                className={INPUT_CLASS}
              />
              <FieldError message={errors.state?.message} />
            </FieldWrapper>

            {webhookError && (
              <div className="rounded border border-red-500/50 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {webhookError}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="gold-cta w-full py-4 text-black font-heading font-semibold text-lg sm:text-xl rounded mt-2 flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <Spinner className="size-5 border-[2.5px] text-black" />
                  Placing Order...
                </>
              ) : (
                COPY.SUBMIT_BUTTON
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
