import {
  CTASection,
  FeaturesSection,
  HeroSection,
  PartnerSection,
  TestimonialsSection,
  USPSection,
} from "@/components";
import { Box, Container, Flex, Separator } from "@radix-ui/themes";

export default function Home() {
  return (
    <Box className="landing">
      {/* <Box className="div-two" /> */}
      <Box className="div-one" />
      <Box className="bg_test" />

      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Flex direction="column" gap="9">
          <Box className="index-top" p="0">
            <Flex
              align="center"
              justify="center"
              direction="column"
              mb="9"
              style={{
                minHeight: "calc((100vh - 102px) - (16px* var(--scaling)))",
              }}
            >
              <HeroSection />
            </Flex>
            <PartnerSection />

            <Separator size="4" />

            <FeaturesSection />

            <Separator size="4" />

            <USPSection />

            <Separator size="4" />
          </Box>
        </Flex>
      </Container>

      <Flex direction="column" py="9">
        <TestimonialsSection />
      </Flex>

      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Flex direction="column" gap="9">
          <CTASection />
        </Flex>
      </Container>
    </Box>
  );
}
