import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"
import { AboutPicturesList } from "./about.pictures.list"
import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"

export const AboutDetails = ({ lang }: PageLang) => {

    return <>
        <Card size="3">
            <Heading size="4" as="h2">{LanguageKeys[lang].about.headerAbout}</Heading>
            <Flex direction="column" gap="3">
                {Array.from(new Array(8), (_, index) => (
                    <Text key={index} size="3" weight="medium" as="p">
                        {/* @ts-expect-error looping a object, cant type check with index */}
                        {LanguageKeys[lang].about[`aboutme${index + 1}`]}
                    </Text>
                ))}
            </Flex>
        </Card>

        <Card size="3">
            <Heading size="4" mb="2" as="h2">
                {LanguageKeys[lang].about.headerPhilo}
            </Heading>
            <Text size="3" weight="medium">
                {LanguageKeys[lang].about.philo}
            </Text>
        </Card>

        <Card mb="9">
            <Box px="3">
                <Heading size="4">{LanguageKeys[lang].about.petsHeader}</Heading>
            </Box>
            <AboutPicturesList />
        </Card>
    </>
}