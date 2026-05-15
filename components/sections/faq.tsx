"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FAQS, type FAQ } from "@/constants/faqs";

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
            isOpen ? "text-white" : "text-primary-gold"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`ml-4 shrink-0 transition-colors duration-300 ${
            isOpen ? "text-white" : "text-primary-gold"
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
          <p className="border-t border-primary-gold px-4 py-4 text-lg text-white bg-[#272724]">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQList({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
    <section className="section-y-p bg-[#1B1C1D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-gold text-center">
            Customer Questions & Answers
          </h2>
          <span className="text-lg text-center font-semibold">
            We&apos;ve answered the most common questions to help you make the
            best decision for your timepiece needs. Please send us a message on
            WhatsApp for any additional inquiries!
          </span>
        </div>
        <FAQList faqs={FAQS} />
      </div>
    </section>
  );
}
