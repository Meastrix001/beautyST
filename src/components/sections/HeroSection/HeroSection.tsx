import { HeroImage } from "@/components";
import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Box, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";

import React from "react";

const HeroSection: React.FC<PageLang> = ({ lang }) => {

  return (
    <Section size={{ initial: "2", lg: "3" }} className="hero">
      <Box>
        <Grid
          columns={{ initial: "1", lg: "6" }}
          gap={{ initial: "4", lg: "9" }}
          align="center"
          justify="center"
        >
          <Box gridColumn={{ initial: "1 / -1", lg: "1 / 5" }}>
            <Flex direction="column" gap="6" justify="center">
              <Heading size={{ initial: "8", lg: "9" }} as="h1" m="0">
                {LanguageKeys[lang].landing.heading}
              </Heading>

              <Text
                as="p"
                color="gray"
                size={{ initial: "3", lg: "5" }}
                weight="bold"
                m="0"
              >
                {LanguageKeys[lang].landing.subHeading}
              </Text>

              <Box width="fit-content">
                <BookingButton lang={lang} onlyBtn />
              </Box>
            </Flex>
          </Box>
          <Box gridColumn={{ initial: "1 / -1", lg: "5 / 7" }}>
            <HeroImage />
          </Box>
        </Grid>
      </Box>
    </Section>
  );
};

export default HeroSection;
