import { brand } from "@/theme/brand.config";
import {
  Box,
  Flex,
  Card,
  Separator,
  Container,
} from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";
import { AboutHero } from "./about.hero";
import { AboutBio } from "./about.bio";
import { AboutDetails } from "./about.details";

export default function About() {
  return (
    <Box className="about" width="100%">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="about__container"
        >
          <AboutHero />

          <Separator size="4" />

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

              <AboutBio />
            </Card>

            <Flex direction="column" gap="4" className="about__details">
              <AboutDetails />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}


export const metadata: Metadata = {
  metadataBase: new URL(brand.company.site),
  alternates: {
    canonical: "about"
  },
  title: brand.company.name,
  description: "Get full body waxed in Tallinn - about, Estonia",
  openGraph: {
    title: brand.company.name,
    description: "Get full body waxed in Tallinn - about, Estonia",
    url: `${brand.company.site}/about`,
    siteName: brand.company.name,
    images: [
      {
        url: brand.company.logo.src,
        width: 1200,
        height: 630,
        alt: `${brand.company.name} hero image`,
      },
    ],
    type: "website",
  },
};

