import { Container } from "@/components/container/container";
import { Box, Flex, Text, Card, Heading, Separator } from "@radix-ui/themes";

import pictureMe from "../../assets/about/IMG_0229.jpeg";

export const About = () => {
  return (
    <Box className="about" width="100%">
      <Container>
        <Flex
          direction="column"
          align="center"
          gap="6"
          className="about__container"
        >
          <Box className="about__hero">
            <Heading size="8" weight="bold" mb="3">
              About Me
            </Heading>
            <Text size="4" className="about__subtitle">
              Passion for waxing, and helping people feel confident.
            </Text>
          </Box>

          <Separator size="4" />

          <Flex
            direction={{ initial: "column", md: "row" }}
            gap="6"
            align="start"
          >
            <Card className="about__card" size="3">
              <div className="about__image">
                <div className="image">
                  <div className="image__content">
                    <img src={pictureMe} />
                  </div>
                </div>
              </div>

              <Flex direction="column" gap="3" mt="3">
                <Heading size="5">Hi, My name is Stiina Roofthooft</Heading>
                <Text size="3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores officia in, aut ex non
                </Text>
              </Flex>
            </Card>

            {/* Right */}
            <Flex direction="column" gap="4" className="about__details">
              <Card size="3">
                <Heading size="4">About me</Heading>
                <Text size="3">I am 24 Years old,</Text>
              </Card>

              <Card size="3">
                <Heading size="4" mb="2">
                  My Philosophy
                </Heading>
                <Text size="3">
                  Beauty is more than appearance it’s confidence, relaxation,
                  and self-care. I believe in using techniques that enhance
                  natural features while prioritizing skin health and
                  well-being.
                </Text>
              </Card>

              <Card size="3" mb="9">
                <Heading size="4" mb="2">
                  Specializations
                </Heading>
                <ul className="about__list">
                  <li>
                    <Text size="3">Facials & skin treatments</Text>
                  </li>
                  <li>
                    <Text size="3">Makeup & styling</Text>
                  </li>
                  <li>
                    <Text size="3">Relaxation therapies</Text>
                  </li>
                  <li>
                    <Text size="3">Custom beauty care plans</Text>
                  </li>
                </ul>
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
