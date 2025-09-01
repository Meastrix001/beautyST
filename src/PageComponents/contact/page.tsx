
import {
  Box,
  Flex,
  Separator,
  Container,
} from "@radix-ui/themes";
import { ContactMap } from "./Contact.map";
import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";
import { ContactList } from "./contact.list";
import { ContactHero } from "./contact.hero";
import { brand } from "@/theme/brand.config";
import { PageLang } from "@/models/pageLang.model";

export default function Contact({ lang }: PageLang) {

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

          <Separator style={{ background: brand.company.colorSecondary, height: "2px" }} size="4" />

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
                <ContactList lang={lang} />
              </Flex>
            </Box>

            {/* Map */}
            <Box className="contact__map">
              <ContactMap />
            </Box>
          </Flex>

          {/* Booking CTA */}
          <Box mb="9">
            <BookingButton lang={lang} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}