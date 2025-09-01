import {
  Box,
  Flex,
  Card,
  Separator,
  Container,
} from "@radix-ui/themes";
import Image from "next/image";
import { AboutHero } from "./about.hero";
import { AboutBio } from "./about.bio";
import { AboutDetails } from "./about.details";
import { brand } from "@/theme/brand.config";
import { PageLang } from "@/models/pageLang.model";

export default function About({ lang }: PageLang) {
  return (
    <Box className="about" width="100%" position={"relative"} minHeight={"90vh"}>
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="about__container"
        >
          <AboutHero lang={lang} />

          <Separator style={{ background: brand.company.colorPrimary, height: "2px" }} size="4" />

          <Flex
            direction={{ initial: "column", md: "row" }}
            gap="6"
            align="start"
          >
            <Card className="about__card" size="3">
              <Box className="about__image">
                <Box className="image">
                  <Box className="image__content">
                    <Image
                      width="1000"
                      height="1000"
                      alt="image me"
                      src="/static/about/img_me.jpg"
                    />
                  </Box>
                </Box>
              </Box>

              <AboutBio lang={lang} />
            </Card>

            <Flex direction="column" gap="4" className="about__details">
              <AboutDetails lang={lang} />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}


