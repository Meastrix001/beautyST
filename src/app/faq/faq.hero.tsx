"use client"
import { Box, Flex, Heading, Text } from "@radix-ui/themes"
import { useTranslation } from "react-i18next";

export const FaqHero = () => {
    const { t } = useTranslation();

    return <Box className="contact__hero" mb="6">
        <Flex direction="column" align="center" gap="2">
            <Heading size="8" weight="bold" mb="0">
                {t("faq.header")}
            </Heading>
            <Text size="4" className="about__subtitle">
                {t("faq.subHeader")}{" "}
            </Text>
        </Flex>
    </Box>
}