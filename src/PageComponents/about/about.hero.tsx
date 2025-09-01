import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Box, Heading, Text } from "@radix-ui/themes"

export const AboutHero = ({ lang }: PageLang) => {

    return <Box className="about__hero" mb={"4"}>
        <Heading size="8" weight="bold" mb="3" as="h1" align={"center"}>
            {LanguageKeys[lang].about.headerAbout}
        </Heading>
        <Text size="4" className="about__subtitle" align={"center"}>
            {LanguageKeys[lang].about.subHeader}
        </Text>
    </Box>
}