"use client"

import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"
import { AboutPicturesList } from "./about.pictures.list"
import { useTranslation } from "react-i18next";

export const AboutDetails = () => {
    const { t } = useTranslation();

    return <>
        <Card size="3">
            <Heading size="4" as="h2">{t("about.headerAbout")}</Heading>
            <Flex direction="column" gap="3">
                {Array.from(new Array(8), (_, index) => (
                    <Text key={index} size="3" weight="medium" as="p">
                        {t(`about.aboutme${index + 1}`)}
                    </Text>
                ))}
            </Flex>
        </Card>

        <Card size="3">
            <Heading size="4" mb="2" as="h2">
                {t("about.headerPhilo")}
            </Heading>
            <Text size="3" weight="medium">
                {t("about.philo")}
            </Text>
        </Card>

        <Card mb="9">
            <Box px="3">
                <Heading size="4">{t("about.petsHeader")}</Heading>
            </Box>
            <AboutPicturesList />
        </Card>
    </>
}