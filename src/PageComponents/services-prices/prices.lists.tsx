import { brand } from "@/theme/brand.config"
import { LanguageKeys } from "@/utils/i18n/LanguageKeys"
import { Box, Flex, Separator, Text } from "@radix-ui/themes"
import Image from "next/image"
import { pricesDataMen, pricesDataWomen } from "./priceData"
import { PageLang } from "@/models/pageLang.model"
import { getNestedValue } from "@/utils/getNestedValues"

export const PricesLists = ({ lang }: PageLang) => {


    return <>
        {[pricesDataWomen, pricesDataMen].map((data, index) => {

            const langKey = index === 0 ? "rowWomen" : "rowMen"

            return <Box key={index} className="prices__list-section">
                <Flex direction={"column"} mb="8">
                    <Flex align="center" justify="center" mb="4" gap="2">
                        <Image
                            src="/static/wax/wax-sticks.png"
                            alt=""
                            className={index === 0 ? "prices__icon" : "prices__icon flipped"}
                            width="1000"
                            height="1000"
                        />
                        <Text size="8" weight="bold">
                            {LanguageKeys[lang].ss[langKey].heading}
                        </Text>
                    </Flex>
                    <Separator style={{ background: brand.company.colorSecondary, height: "1px" }} size="4" />
                </Flex>

                {data.map((doc, idx) => (
                    <Flex key={idx} className="prices__item" align="center">
                        <Text as="p" size="6">
                            {getNestedValue(LanguageKeys[lang], doc.nameKey) || ""}
                        </Text>
                        <Box className="prices__dots" />
                        <Text as="p" size="6">
                            {doc.price} / {doc.duration}
                        </Text>
                    </Flex>
                ))}
                {index === 1 && <Text>{LanguageKeys[lang].ss.mensNote}</Text>}
            </Box>
        })}
    </>
}