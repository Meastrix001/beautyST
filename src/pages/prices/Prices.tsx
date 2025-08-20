import { Container } from "@/components/container/container";
import WaxStick from "../../assets/landing/wax-sticks.webp";
import { BookingButton } from "@/components/booking/bookingBtn";
import { Box, Flex, Heading, Text, Separator } from "@radix-ui/themes";
import { pricesDataMen, pricesDataWomen } from "./priceData";

export const Prices = () => {
  return (
    <Box className="prices">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="prices__container"
        >
          {/* Hero Section */}
          <Box className="prices__hero" mb="6">
            <Heading size="8" weight="bold" mb="3" align="center">
              Services & Prices
            </Heading>
            <Text size="4" className="prices__subtitle" align="center">
              Price overview, for both Men and Women
            </Text>
          </Box>

          <Separator size="4" />

          {/* Price Lists */}
          <Flex
            className="prices__list"
            direction={{ initial: "column", md: "row" }}
            justify="center"
            gap="6"
            mt="6"
          >
            {/* Women */}
            <Box className="prices__list-section">
              <Flex align="center" justify="center" mb="4" gap="2">
                <img src={WaxStick} alt="" className="prices__icon" />
                <Text size="8" weight="bold">
                  Women
                </Text>
              </Flex>

              {pricesDataWomen.map((doc, idx) => (
                <Flex key={idx} className="prices__item" align="center">
                  <Text as="p" size="6">
                    {doc.name}
                  </Text>
                  <Box className="prices__dots" />
                  <Text as="p" size="6">
                    {doc.price}
                  </Text>
                </Flex>
              ))}
            </Box>

            {/* Men */}
            <Box className="prices__list-section">
              <Flex align="center" justify="center" mb="4" gap="2">
                <Text size="8" weight="bold">
                  Men
                </Text>
                <img src={WaxStick} alt="" className="prices__icon flipped" />
              </Flex>

              {pricesDataMen.map((doc, idx) => (
                <Flex key={idx} className="prices__item" align="center">
                  <Text as="p" size="6">
                    {doc.name}
                  </Text>
                  <Box className="prices__dots" />
                  <Text as="p" size="6">
                    {doc.price}
                  </Text>
                </Flex>
              ))}
            </Box>
          </Flex>

          {/* Booking Button */}
          <Box mt="9" mb="9">
            <BookingButton />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
