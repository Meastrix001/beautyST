import TestimonialSlider from "@/components/ui/TestimonialSlider/TestimonialSlider";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import React from "react";

/**
 * Renders the testimonials section of the landing page, including a heading,
 * descriptive text, and a testimonial slider component.
 *
 * @returns The testimonials section as a React functional component.
 */

const TestimonialsSection: React.FC<PageLang> = ({ lang }) => {
  return (
    <Section size={{ initial: "2", lg: "3" }}>
      <Flex direction="column" gap="5">
        {/* Heading */}
        <Container px={{ initial: "4", lg: "0" }}>
          <Flex direction="column" gap="2" align="center" pb="4">
            <Heading as="h2" size="8" align="center" m="0">
              {LanguageKeys[lang].reviews.header}
            </Heading>
            <Text as="p" size="3" align="center" color="gray">
              {LanguageKeys[lang].reviews.subHeader}
            </Text>
          </Flex>
        </Container>

        {/* Slider */}
        <TestimonialSlider />
      </Flex>
    </Section>
  );
};

export default TestimonialsSection;
