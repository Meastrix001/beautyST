import {
  Box,
  Flex,
  Separator,
  Container,
} from "@radix-ui/themes";

import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";
import { brand } from "@/theme/brand.config";
import { PageLang } from "@/models/pageLang.model";
import { PricesHero } from "./prices.hero";
import { PricesLists } from "./prices.lists";

export default function Prices({ lang }: PageLang) {


  return (
    <Box className="prices">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="prices__container"
        >
          <PricesHero lang={lang} />

          <Separator style={{ background: brand.company.colorSecondary, height: "2px" }} size="4" />

          <Flex
            className="prices__list"
            direction={{ initial: "column", md: "row" }}
            justify="center"
            gap="6"
            mt="6"
          >

            <PricesLists lang={lang} />

          </Flex>
          <Box mt="9" mb="9">
            <BookingButton lang={lang} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
