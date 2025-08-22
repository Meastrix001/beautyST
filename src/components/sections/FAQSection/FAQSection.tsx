import FAQAccordion from "@/components/ui/FAQAccordion/FAQAccordion";
import { faqs } from "@/constants/faqs";
import { Grid, Flex, Heading, Section, Text, Box } from "@radix-ui/themes";
import React from "react";

const FAQSection: React.FC = () => {
  return (
    <Section size={{ initial: "2", lg: "3" }}>
      <Grid columns={{ initial: "1", lg: "6" }} gap={{ initial: "4", lg: "9" }}>
        {/* Heading */}
        <Flex
          direction="column"
          gap="2"
          gridColumn={{ initial: "1 / -1", lg: "1 / 3" }}
        >
          <Heading as="h2" size="8" m="0">
            FAQ Section
          </Heading>
          <Text as="p" size="3" color="gray">
            This is a placeholder for the frequently asked questions. You can
            add your content here.
          </Text>
        </Flex>
        {/* FAQ Items */}
        <Box gridColumn={{ initial: "1 / -1", lg: "3 / 7" }}>
          <FAQAccordion faqs={faqs} />
        </Box>
      </Grid>
    </Section>
  );
};

export default FAQSection;
