"use client";
import FeatureCard from "@/components/ui/FeatureCard/FeatureCard";
import { Box, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import React from "react";
import { useTranslation } from "react-i18next";

const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section size={{ initial: "2", lg: "3" }}>
      <Box>
        {/* Heading */}
        <Flex direction="column" gap="2" align="center" pb="4">
          <Heading as="h2" size="8" align="center" m="0">
            {t("landing.features.key")}
          </Heading>
          <Text as="p" size="3" align="center" color="gray">
            {t("landing.features.desc")}
          </Text>
        </Flex>

        {/* Feature Cards */}
        <Flex gap="4" direction="column">
          {/* <FeatureCard
            size="large"
            heading=""
            description=""
            image="/static/wax/wax_1.avif"
          /> */}

          <Grid columns={{ initial: "1", lg: "2" }} gap="4">
            <Box gridColumn={{ initial: "1 / -1", lg: "1 / 2" }}>
              <FeatureCard
                heading={t(`landing.features.data.0.heading`)}
                description={t(`landing.features.data.0.desc`)}
                image="/static/wax/wax_1_alt.png"
              />
            </Box>
            <Box gridColumn={{ initial: "1 / -1", lg: "2 / 3" }}>
              <FeatureCard
                heading={t(`landing.features.data.1.heading`)}
                description={t(`landing.features.data.1.desc`)}
                image="/static/images/photo-1479030160180-b1860951d696.jpeg"
              />
            </Box>
          </Grid>
        </Flex>
      </Box>
    </Section>
  );
};

export default FeaturesSection;
