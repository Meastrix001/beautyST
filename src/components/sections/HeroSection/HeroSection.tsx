"use client";
import { HeroImage } from "@/components";
import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";
import { Box, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";

import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section size={{ initial: "2", lg: "3" }} className="hero">
      <Box>
        <Grid
          columns={{ initial: "1", lg: "6" }}
          gap={{ initial: "5", lg: "9" }}
          align="center"
          justify="center"
        >
          <Box gridColumn={{ initial: "1 / -1", lg: "1 / 5" }}>
            <Flex direction="column" gap="6" justify="center">
              <Heading size={{ initial: "8", lg: "9" }} as="h1" m="0">
                {t("landing.heading")}
              </Heading>

              <Text
                as="p"
                color="gray"
                size={{ initial: "4", lg: "5" }}
                weight="bold"
                m="0"
              >
                {t("landing.subHeading")}
              </Text>

              <Box width="fit-content">
                <BookingButton onlyBtn />
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
