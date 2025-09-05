import {
  Box,
  Container,
  Flex,
  Separator,
} from "@radix-ui/themes";
import { Form } from "./reviews.form";
import { ReviewsHero } from "./reviews.hero";
import { PageLang } from "@/models/pageLang.model";

export default function ReviewPage({ lang }: PageLang) {

  return (
    <Box className="prices">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="prices__container"
        >
          <ReviewsHero lang={lang} />

          <Separator size="4" />

          <Flex
            className="prices__list"
            direction={{ initial: "column", md: "row" }}
            justify="center"
            gap="6"
            mt="6"
          >

            <Form lang={lang} />

          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

