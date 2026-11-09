"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div className="accordion__item" key={item.question}>
            <button
              type="button"
              className="accordion__trigger"
              data-open={isOpen}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              {item.question}
              <span className="accordion__icon" aria-hidden="true">
                <Plus size={14} />
              </span>
            </button>
            <div
              className="accordion__panel"
              data-open={isOpen}
              id={`faq-panel-${index}`}
              role="region"
            >
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
