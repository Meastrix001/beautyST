
import {
  CTASection,
  FeaturesSection,
  HeroSection,
  PartnerSection,
  TestimonialsSection,
  USPSection,
} from "@/components";
import BackgroundSlider from "@/components/backgroundSlider/backgroundSlider";
import { PageLang } from "@/models/pageLang.model";
import { brand } from "@/theme/brand.config";
import { Box, Container, Flex, Section, Separator } from "@radix-ui/themes";

export default function Home({ lang = "est" }: PageLang) {


  return (
    <Box className="landing">
      <Box className="div-one" />
      <BackgroundSlider />
      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Flex direction="column" gap="9">
          <Box className="index-top" p="0">
            <Flex
              align="center"
              justify="center"
              direction="column"
              mb={{ initial: "9", lg: "10rem" }}
              style={{
                minHeight: "calc((100vh - 102px) - (16px* var(--scaling)))",
              }}
            >
              <Section>
                <HeroSection lang={lang} />
              </Section>
            </Flex>
            <PartnerSection lang={lang} />

            <Separator style={{ background: brand.company.colorSecondary, height: "2px" }} size="4" />

            <Section>
              <FeaturesSection lang={lang} />
            </Section>

            <Separator style={{ background: brand.company.colorSecondary, height: "2px" }} size="4" />

            <Section>
              <USPSection lang={lang} />
            </Section>

            <Separator style={{ background: brand.company.colorSecondary, height: "2px" }} size="4" />

            <Section>
              <TestimonialsSection lang={lang} />
            </Section>

            <Separator style={{ background: brand.company.colorSecondary, height: "2px" }} size="4" />

          </Box>
        </Flex>
      </Container>
      <Container py={{ initial: "3", lg: "4" }} px={{ initial: "4", lg: "0" }}>
        <Flex direction="column" gap="9" mb="9">
          <Section>
            <CTASection lang={lang} />
          </Section>
        </Flex>
      </Container>
    </Box>
  );
}