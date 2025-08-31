"use client"
import { Flex, Heading } from "@radix-ui/themes"
import { useTranslation } from "react-i18next";

export const AboutBio = () => {
    const { t } = useTranslation();

    return <Flex direction="column" gap="3" mt="3">
        <Heading size="5" as="h2">{t("about.bio")}</Heading>
    </Flex>
}