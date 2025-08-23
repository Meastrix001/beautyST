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
        <Grid columns={{ initial: "1", lg: "6" }} gap="9" align="center">
          <Box gridColumn={{ initial: "1 / -1", lg: "1 / 5" }}>
            <Flex direction="column" gap="6">
              {/* Badge */}
              <Flex>
                {/* <Badge
                  size="3"
                  variant="soft"
                  style={{ paddingLeft: ".375rem", paddingRight: "1rem" }}
                >
                  <Badge size="3" variant="solid">
                    Achievement
                  </Badge>
                  Rated amongst some <ArrowRightIcon />
                </Badge> */}
              </Flex>

              {/* Heading */}
              <Heading size="9" as="h1" m="0">
                {t("landing.heading")}
              </Heading>

              {/* Paragraph */}
              <Text as="p" color="gray" size="5" weight="bold" m="0">
                {t("landing.subHeading")}
              </Text>

              {/* Buttons */}
              {/* <HeroActions /> */}
              <Box width="fit-content">
                <BookingButton onlyBtn />
              </Box>

              {/* Avatars */}
              {/* <Flex gap="4" align="center">
                <Flex>
                  <Avatar
                    size="2"
                    variant="solid"
                    color="indigo"
                    fallback="Z"
                  />
                  <Avatar
                    size="2"
                    variant="solid"
                    color="cyan"
                    fallback="Y"
                    ml="-3"
                  />
                  <Avatar
                    size="2"
                    variant="solid"
                    color="orange"
                    fallback="X"
                    ml="-3"
                  />
                </Flex>
                <Text size="2" color="gray" highContrast weight="medium">
                  Join others who are using this template.
                </Text>
              </Flex> */}
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
