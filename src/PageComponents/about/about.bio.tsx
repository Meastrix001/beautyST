import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Flex, Heading } from "@radix-ui/themes"

export const AboutBio = ({ lang }: PageLang) => {
    return <Flex direction="column" gap="3" mt="3">
        <Heading size="5" as="h2">{LanguageKeys[lang].about.bio}</Heading>
    </Flex>
}