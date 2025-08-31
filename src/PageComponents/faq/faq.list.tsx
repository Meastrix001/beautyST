"use client"
import { Box } from "@radix-ui/themes"
import { useTranslation } from "react-i18next";
import { FaqItem } from "./faq.item";

export const FaqList = () => {
    const { t } = useTranslation();

    const faqs = t("faq.data", { returnObjects: true }) as {
        question: string;
        answer: string;
    }[];


    return <Box m="0 auto">
        {faqs.map((faq, index) => (
            <Box key={index}>
                <FaqItem faq={faq} index={index} />
            </Box>
        ))}
    </Box>
}