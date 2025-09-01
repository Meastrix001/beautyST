import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Box, Heading, Text } from "@radix-ui/themes";

export const PricesHero = ({ lang }: PageLang) => {
    return <Box className="prices__hero" mb="6">
        <Heading size="8" weight="bold" mb="3" align="center">
            {LanguageKeys[lang].ss.header}
        </Heading>
        <Text size="4" className="prices__subtitle" align="center">
            {LanguageKeys[lang].ss.bio}
        </Text>
    </Box>
}