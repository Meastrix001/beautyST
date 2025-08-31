"use client"
import { Box, ChevronDownIcon, Flex, Text } from "@radix-ui/themes"
import { Separator } from "@radix-ui/themes"
import { useState } from "react";

export const FaqItem = ({ faq, index }: {
    faq: {
        question: string,
        answer: string
    },
    index: number
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return <Box p="4" key={index} className=" faq-item">
        <Flex
            justify="between"
            align="center"
            onClick={() => toggle(index)}
            className="faq-question hover"
        >
            <Text size="6" weight="medium">
                {faq.question}
            </Text>

            <ChevronDownIcon
                className={`faq-icon ${openIndex === index ? "open" : ""
                    }`}
            />
        </Flex>

        <Box
            className={`faq-answer ${openIndex === index ? "open" : ""
                }`}
            mt="2"
        >
            <Text size="5" color="gray">
                {faq.answer}
            </Text>
        </Box>
        <Box width="100%">
            <Separator size="4" />
        </Box>
    </Box>
}