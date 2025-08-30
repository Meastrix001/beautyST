import {
  Box,
  Container,
  Flex,
  Separator,
} from "@radix-ui/themes";
import { Form } from "./reviews.form";
import { ReviewsHero } from "./reviews.hero";

export default function ReviewPage() {

  return (
    <Box className="prices">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="prices__container"
        >
          <ReviewsHero />

          <Separator size="4" />

          <Flex
            className="prices__list"
            direction={{ initial: "column", md: "row" }}
            justify="center"
            gap="6"
            mt="6"
          >

            <Form />

          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

