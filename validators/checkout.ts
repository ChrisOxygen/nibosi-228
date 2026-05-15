import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  mainPhone: z
    .string()
    .min(10, "Enter a valid phone number")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  altPhone: z.string().optional(),
  quantity: z.enum(["1", "2"]).optional(),
  email: z.string().email("Enter a valid email address").optional().or(z.literal("")),
  deliveryAddress: z.string().min(5, "Enter your full delivery address"),
  state: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
