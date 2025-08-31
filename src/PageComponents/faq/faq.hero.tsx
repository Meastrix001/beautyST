"use client"
import { Box, Heading, Text } from "@radix-ui/themes"
import { useTranslation } from "react-i18next";

export const FaqHero = () => {
    const { t } = useTranslation();

    return <Box>
        <Heading size="8" weight="bold" mb="3" as="h1">
            {t("faq.header")}
        </Heading>
        <Text size="4">
            {t("faq.subHeader")}{" "}</Text>
    </Box>

}