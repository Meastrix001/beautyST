import { Box } from "@radix-ui/themes";
import { FaqItem } from "./faq.item";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { PageLang } from "@/models/pageLang.model";

export const FaqList = ({ lang }: PageLang) => {
    // Access the FAQ data from LanguageKeys correctly
    const faqs = (LanguageKeys[lang]?.faq?.data ?? []) as {
        question: string;
        answer: string;
    }[];

    return (
        <Box m="0 auto">
            {faqs.map((faq, index) => (
                <Box key={index}>
                    <FaqItem faq={faq} index={index} />
                </Box>
            ))}
        </Box>
    );
};