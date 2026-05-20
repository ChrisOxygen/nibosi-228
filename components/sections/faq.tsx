"use client";

import { useState } from "react";
import { usePostHog } from "posthog-js/react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FAQS, type FAQ } from "@/constants/faqs";
import { COPY } from "@/constants/copy";
import { EVENTS } from "@/lib/posthog";

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <span
          className={`font-heading text-base sm:text-xl font-semibold transition-colors duration-300 ${
            isOpen ? "text-white" : "text-brand-primary"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`ml-4 shrink-0 transition-colors duration-300 ${
            isOpen ? "text-white" : "text-brand-primary"
          }`}
        >
          {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-brand-primary px-4 py-4 text-lg text-white bg-brand-surface">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQList({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ph = usePostHog();

  const handleToggle = (index: number) => {
    const isOpening = openIndex !== index;
    ph?.capture(isOpening ? EVENTS.FAQ_OPENED : EVENTS.FAQ_CLOSED, {
      question: faqs[index].question,
      index,
    });
    setOpenIndex(isOpening ? index : null);
  };

  return (
    <div className="flex w-full flex-col  overflow-hidden ">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section-y-p bg-brand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <div className="flex flex-col sm:items-center gap-2">
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-primary sm:text-center">
            {COPY.FAQ_HEADING}
          </h2>
          <span className="text-lg sm:text-center font-semibold">
            {COPY.FAQ_DESCRIPTION}
          </span>
        </div>
        <FAQList faqs={FAQS} />
      </div>
    </section>
  );
}
