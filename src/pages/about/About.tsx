import { Container } from "@/components/container/container";
import { Box, Flex, Text, Card, Heading, Separator } from "@radix-ui/themes";

import pictureMe from "../../assets/about/IMG_0229.jpeg";
import pictureSarah from "../../assets/about/sarah.jpg";
import pictureGin from "../../assets/about/gin.jpg";
import pictureBambi from "../../assets/about/bambi_2.png";

import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  const picturesArr = [
    {
      picture: pictureSarah,
      desc: "Saara ~ 15 Years old",
    },
    {
      picture: pictureGin,
      desc: "Gin ~ 2.5 Years old",
    },
    {
      picture: pictureBambi,
      desc: "Bambi ~ 7.5 Years old",
    },
  ];

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
              {t("about.headerAbout")}
            </Heading>
            <Text size="4" className="about__subtitle">
              {t("about.subHeader")}{" "}
            </Text>
          </Box>

          <Separator size="4" />

          <Flex
            direction={{ initial: "column", md: "row" }}
            gap="6"
            align="start"
          >
            <Card className="about__card" size="3">
              <Box className="about__image">
                <Box className="image">
                  <Box className="image__content">
                    <img src={pictureMe} />
                  </Box>
                </Box>
              </Box>

              <Flex direction="column" gap="3" mt="3">
                <Heading size="5">{t("about.bio")}</Heading>
              </Flex>
            </Card>

            <Flex direction="column" gap="4" className="about__details">
              <Card size="3">
                <Heading size="4">{t("about.headerAbout")}</Heading>
                <Flex direction="column" gap="3">
                  {Array.from(new Array(8), (_, index) => (
                    <Text size="3" weight="medium" as="p">
                      {t(`about.aboutme${index + 1}`)}
                    </Text>
                  ))}
                </Flex>
              </Card>

              <Card size="3">
                <Heading size="4" mb="2">
                  {t("about.headerPhilo")}
                </Heading>
                <Text size="3" weight="medium">
                  {t("about.philo")}
                </Text>
              </Card>

              <Card mb="9">
                <Box px="3">
                  <Heading size="4">{t("about.petsHeader")}</Heading>
                </Box>
                <Flex direction="row" justify="between" px="3" mb="2">
                  {picturesArr.map((obj) => {
                    return (
                      <Card className="pets">
                        <Box className="pets__image">
                          <Box className="image">
                            <Box className="image__content">
                              <img src={obj.picture} />
                            </Box>
                          </Box>
                        </Box>
                        <Text
                          mt="2"
                          as="p"
                          size="4"
                          weight="medium"
                          align="center"
                        >
                          {obj.desc}
                        </Text>
                      </Card>
                    );
                  })}
                </Flex>
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
