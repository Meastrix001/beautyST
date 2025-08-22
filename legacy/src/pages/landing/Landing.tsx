import { Container } from "@/components/container/container";
import WaxPots from "../../assets/landing/wax-pot.webp";
// import LandingLegs from "../../assets/landing/smooth-in-grown-free-legs-e144529772770-Photoroom (2) (1).png";
import { BookingButton } from "@/components/booking/bookingBtn";
import { Box, Flex, Text } from "@radix-ui/themes";
import LyconBrand from "../../assets/landing/Lycon_svg.svg";
import { Constants } from "@/utils/constants/constantValues";

export const Landing = () => {
  return (
    <Box className="landing">
      <Box className="div-one" />
      <Box className="div-two" />

      <Container>
        <Flex className="landing__content">
          <Box className="content">
            <Box className="content__logos" mb="6">
              <img className="logos__brand" src={Constants.logo} alt="" />
            </Box>
            <Box mb="5">
              <Text as="p" align="center" size="8">
                Boost your confidence
              </Text>
            </Box>
            <Box mt="2">
              <BookingButton onlyBtn />
            </Box>
          </Box>
        </Flex>
        {/* <Box className="landing__image">
          <img src={WaxSticks} alt="" />
        </Box> */}
      </Container>
      <Box className="wax-pot">
        <img src={WaxPots} alt="" />
      </Box>
      <Box className="landing__below-fold" width="100%">
        <div className="div-three" />
        <div className="div-four" />

        <Container>
          <Flex
            style={{ width: "100%", zIndex: 100000, position: "relative" }}
            align="center"
            justify={{ initial: "end", md: "center" }}
            className="below-fold"
            direction="column"
            pb="6"
            gap="6"
          >
            <Box mt={{ initial: "0", md: "9" }}>
              <Box mt={{ initial: "0", md: "9" }}>
                <Flex direction="column" mt={{ initial: "0", md: "9" }}>
                  <Text
                    align="center"
                    size="8"
                    mt={{ initial: "0", md: "9" }}
                    mb={{ initial: "0", md: "9" }}
                  >
                    Proudly use Lycon, For the most consistent wax
                  </Text>
                  <img
                    className="logos__lycon"
                    src={LyconBrand}
                    alt=""
                    height="128px"
                  />
                  <Text size="4" align="center">
                    Our waxing services feature Lycon, the premium choice for
                    smooth, flawless results.
                  </Text>
                </Flex>
              </Box>
            </Box>
            <BookingButton />
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
