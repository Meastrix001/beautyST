"use client"

import { Box, Heading, Text } from "@radix-ui/themes"
import { useTranslation } from "react-i18next";

export const AboutHero = () => {
    const { t } = useTranslation();

    return <Box className="about__hero">
        <Heading size="8" weight="bold" mb="3" as="h1">
            {t("about.headerAbout")}
        </Heading>
        <Text size="4" className="about__subtitle">
            {t("about.subHeader")}{" "}
        </Text>
    </Box>
}