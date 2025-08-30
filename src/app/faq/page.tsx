import {
  Box,
  Container,
  Flex,
  Separator,
} from "@radix-ui/themes";

import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";
import { Metadata } from "next";
import { brand } from "@/theme/brand.config";
import { FaqHero } from "./faq.hero";
import { FaqList } from "./faq.list";

export default function FaqPage() {


  return (
    <Box className="faq">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="contact__container"
        >
          <Box className="contact__hero" mb="6">
            <FaqHero />
          </Box>

          <Separator size="4" />

          <Flex
            className="contact__content"
            direction={{ initial: "column", md: "row" }}
            align="stretch"
            justify="center"
            gap="6"
            mt="6"
            mb="9"
          >
            <Box m="0 auto">
              <FaqList />
            </Box>
          </Flex>

          <Box mt="9" mb="9">
            <BookingButton />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}


export const metadata: Metadata = {
  alternates: {
    canonical: "layout"
  },
  title: brand.company.name,
  description: "Get full body waxed in Tallinn, Estonia",
  openGraph: {
    title: brand.company.name,
    description: "Get full body waxed in Tallinn, Estonia",
    url: `${brand.company.site}/faq`,
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

