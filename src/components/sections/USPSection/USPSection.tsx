import USPItem from "@/components/ui/USPItem/USPItem";
import { uniqueSellingPoints } from "@/constants/uniqueSellingPoints";
import { PageLang } from "@/models/pageLang.model";
import { getNestedValue } from "@/utils/getNestedValues";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Box, Flex, Heading, Section, Text } from "@radix-ui/themes";
import React from "react";

const USPSection: React.FC<PageLang> = ({ lang }) => {

  return (
    <Section size={{ initial: "2", lg: "3" }}>
      <Flex gap="6" direction="column">
        {/* Heading */}
        <Flex direction="column" gap="2" align="center" pb="4">
          <Heading as="h2" size="8" align="center" m="0">
            {LanguageKeys[lang].usp.heading}
          </Heading>
          <Text as="p" size="3" align="center" color="gray">
            {LanguageKeys[lang].usp.subHeading}
          </Text>
        </Flex>

        <Flex
          direction={{ initial: "column", lg: "row" }}
          gap="6"
          justify="between"
        >
          {uniqueSellingPoints.map((usp, index) => (
            <Box key={index} width={{ initial: "100%", lg: "25%" }}>
              <USPItem
                heading={getNestedValue(LanguageKeys[lang], usp.heading)}
                description={getNestedValue(LanguageKeys[lang], usp.description)}
                icon={usp.icon}
              />

            </Box>
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};

export default USPSection;
