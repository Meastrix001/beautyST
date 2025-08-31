import {
  Box,
  Container,
  Flex,
  Separator,
} from "@radix-ui/themes";

import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";
import { FaqHero } from "./faq.hero";
import { FaqList } from "./faq.list";
import { brand } from "@/theme/brand.config";

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

          <Separator style={{ background: brand.company.colorPrimary, height: "2px" }} size="4" />

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
