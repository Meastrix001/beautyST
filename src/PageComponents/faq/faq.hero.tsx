import { PageLang } from "@/models/pageLang.model"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Box, Heading, Text } from "@radix-ui/themes"

export const FaqHero = ({ lang }: PageLang) => {

    return <Box>
        <Heading size="8" weight="bold" mb="3" as="h1">
            {LanguageKeys[lang].faq.header}
        </Heading>
        <Text size="4">
            {LanguageKeys[lang].faq.subHeader}{" "}</Text>
    </Box>

}