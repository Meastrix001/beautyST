
import {
  Box,
  Flex,
  Separator,
  Container,
} from "@radix-ui/themes";
import { ContactMap } from "./Contact.map";

import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";

import { Metadata } from "next";
import { brand } from "@/theme/brand.config";
import { ContactList } from "./contact.list";
import { ContactHero } from "./contact.hero";

export default function Contact() {

  return (
    <Box className="contact">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="contact__container"
        >
          {/* Hero */}
          <Box className="contact__hero" mb="6">
            <ContactHero />
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
            <Box className="contact__info">
              <Flex align="center" justify="center" height="100%">
                <ContactList />
              </Flex>
            </Box>

            {/* Map */}
            <Box className="contact__map">
              <ContactMap />
            </Box>
          </Flex>

          {/* Booking CTA */}
          <Box mb="9">
            <BookingButton />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export const metadata: Metadata = {
  alternates: {
    canonical: "contact"
  },
  title: brand.company.name,
  description: "Get full body waxed in Tallinn, Estonia",
  openGraph: {
    title: brand.company.name,
    description: "Get full body waxed in Tallinn, Estonia",
    url: `${brand.company.site}/contact`,
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