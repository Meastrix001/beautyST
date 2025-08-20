import { Container } from "@/components/container/container";
// import WaxSticks from "../../assets/landing/wax-sticks.webp";
import WaxPots from "../../assets/landing/wax-pot.webp";
import LandingLegs from "../../assets/landing/smooth-in-grown-free-legs-e144529772770-Photoroom (2) (1).png";
import { BookingButton } from "@/components/booking/bookingBtn";
import { Box, Flex, Text } from "@radix-ui/themes";
import LyconBrand from "../../assets/landing/Lycon_svg.svg";
import { Constants } from "@/utils/constants/constantValues";

export const Landing = () => {
  return (
    <div className="landing">
      <div className="div-one" />
      <div className="div-two" />
      <Container>
        <div className="landing__content">
          <div className="content">
            <div className="content__logos">
              <img className="logos__brand" src={Constants.logo} alt="" />
            </div>
            <Flex direction="column" gap="5">
              {/* <Text size="6">Be Back Soon</Text> */}
            </Flex>
          </div>
        </div>
      </Container>
      <div className="landing__image">
        <img src={LandingLegs} alt="" />
      </div>
      <div className="wax-pot">
        <img src={WaxPots} alt="" />
      </div>
      <Box className="landing__below-fold" width="100%">
        <div className="div-three" />
        <div className="div-four" />

        <Flex
          style={{ width: "100%", zIndex: 100000, position: "relative" }}
          align="center"
          justify="center"
          className="below-fold"
          direction="column"
          gap="6"
        >
          <Flex direction="column">
            <img
              className="logos__lycon"
              src={LyconBrand}
              alt=""
              height="128px"
            />
            <Text size="4">
              Our waxing services feature Lycon, the premium choice for smooth,
              flawless results.
            </Text>
          </Flex>
          <BookingButton />
        </Flex>
      </Box>
    </div>
  );
};
