import { Container } from "@/components/container/container";
import { useNavigate } from "react-router-dom";
import i18n from "@/utils/i18n/i18n";
import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Constants } from "@/utils/constants/constantValues";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useTranslation } from "react-i18next";

export const NavigationMobile = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { t } = useTranslation();

  const [activeLanguage, setActiveLanguage] = useState<string>(
    localStorage.getItem("beautyst_lang_last") || i18n.language
  );

  const handleLanguageChange = (lang: "en" | "est") => {
    localStorage.setItem("beautyst_lang_last", lang);
    return i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleChange = (lng: string) => setActiveLanguage(lng);

    i18n.on("languageChanged", handleChange);

    return () => {
      i18n.off("languageChanged", handleChange);
    };
  }, []);

  return (
    <Box className="mobile">
      <nav className="navigation">
        <Container>
          <Flex
            width="100%"
            justify="between"
            align="center"
            className="navigation__brand"
          >
            <Box>
              <img src={Constants.logo} alt="" />
            </Box>

            <Box>
              <HamburgerMenuIcon
                className="hover"
                height="36"
                width="36"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />{" "}
            </Box>
          </Flex>

          <Flex
            className={`navigation__menu ${isMenuOpen ? "open" : ""}`}
            justify="center"
          >
            <Flex
              width="100%"
              height="100%"
              direction="column"
              align="center"
              justify="between"
              py="4"
              px="4"
            >
              <Box width="100%">
                <Flex align="start" justify="start">
                  <Cross2Icon
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    height="36"
                    width="36"
                    className="hover"
                  />
                </Flex>
              </Box>
              <Flex
                style={{ textTransform: "uppercase" }}
                direction="column"
                gap="3"
                mt="auto"
                mb="auto"
              >
                <Box
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/");
                  }}
                >
                  <Text as="p" size="5">
                    {t("nav.keys.home")}
                  </Text>
                </Box>
                <Box
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/services-prices");
                  }}
                >
                  <Text as="p" size="5">
                    {t("nav.keys.ss")}
                  </Text>
                </Box>

                <Box
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/about");
                  }}
                >
                  <Text as="p" size="5">
                    {t("nav.keys.aboutme")}
                  </Text>
                </Box>
                <Box
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate("/contact");
                  }}
                >
                  <Text as="p" size="5">
                    {t("nav.keys.contact")}
                  </Text>
                </Box>
              </Flex>
              <Box
                className={`navigation__socials ${isMenuOpen ? "open" : ""}`}
              >
                <Flex direction="row" gap="3">
                  <Badge
                    className="hover"
                    size="3"
                    variant={activeLanguage === "en" ? "solid" : "soft"}
                    color={activeLanguage === "en" ? "pink" : "gold"}
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </Badge>
                  <Badge
                    className="hover"
                    size="3"
                    variant={activeLanguage === "est" ? "solid" : "soft"}
                    color={activeLanguage === "est" ? "pink" : "gold"}
                    onClick={() => handleLanguageChange("est")}
                  >
                    Eesti
                  </Badge>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </nav>
    </Box>
  );
};
