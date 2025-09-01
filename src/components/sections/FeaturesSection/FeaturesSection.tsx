import FeatureCard from "@/components/ui/FeatureCard/FeatureCard";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Box, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import React from "react";

const FeaturesSection: React.FC<PageLang> = ({ lang }) => {
  return (
    <Section size={{ initial: "2", lg: "3" }}>
      <Box>
        {/* Heading */}
        <Flex direction="column" gap="2" align="center" pb="4">
          <Heading as="h2" size="8" align="center" m="0">
            {LanguageKeys[lang].landing.features.key}
          </Heading>
          <Text as="p" size="3" align="center" color="gray">
            {LanguageKeys[lang].landing.features.desc}
          </Text>
        </Flex>

        {/* Feature Cards */}
        <Flex gap="4" direction="column">


          <Grid columns={{ initial: "1", lg: "2" }} gap="4">
            <Box gridColumn={{ initial: "1 / -1", lg: "1 / 2" }}>
              <FeatureCard
                heading={LanguageKeys[lang].landing.features.data[2].heading}
                description={LanguageKeys[lang].landing.features.data[2].desc}
                image="/static/landing/feature_2.jpg" />
            </Box>
            <Box gridColumn={{ initial: "1 / -1", lg: "2 / 3" }}>
              <FeatureCard
                heading={LanguageKeys[lang].landing.features.data[3].heading}
                description={LanguageKeys[lang].landing.features.data[3].desc}
                image="/static/landing/feature_1.jpg"
              />
            </Box>
          </Grid>

          <Grid columns={{ initial: "1", lg: "2" }} gap="4">
            <Box gridColumn={{ initial: "1 / -1", lg: "1 / 2" }}>
              <FeatureCard
                heading={LanguageKeys[lang].landing.features.data[0].heading}
                description={LanguageKeys[lang].landing.features.data[0].desc}
                image="/static/wax/wax_img.jpg"
              />
            </Box>
            <Box gridColumn={{ initial: "1 / -1", lg: "2 / 3" }}>
              <FeatureCard
                heading={LanguageKeys[lang].landing.features.data[1].heading}
                description={LanguageKeys[lang].landing.features.data[1].desc}
                image="/static/landing/img_me.jpg"
              />
            </Box>
          </Grid>
        </Flex>
      </Box>
    </Section>
  );
};

export default FeaturesSection;
