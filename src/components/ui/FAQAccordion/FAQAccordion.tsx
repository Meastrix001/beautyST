"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";
import { Accordion } from "radix-ui";
import React from "react";
import { FAQAccordionProps } from "./FAQAccordion.types";

/**
 * FAQAccordion component renders a list of frequently asked questions (FAQs) in an accordion format.
 *
 * @param faqs - An array of FAQ objects, each containing a `question` and an `answer`.
 * @returns A React functional component displaying each FAQ as an expandable/collapsible item.
 *
 * @example
 * <FAQAccordion faqs={[{ question: "What is X?", answer: "X is ..." }]} />
 */

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  return (
    <Accordion.Root type="single" collapsible className="faq-accordion">
      {faqs.map((faq, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="faq-accordion__item"
        >
          <Accordion.Header>
            <Accordion.Trigger className="faq-accordion__trigger">
              <Text as="span">{faq.question}</Text>
              <ChevronDownIcon
                className="faq-accordion__chevron"
                width={24}
                height={24}
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="faq-accordion__content">
            <Text as="p" size="3">
              {faq.answer}
            </Text>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default FAQAccordion;
