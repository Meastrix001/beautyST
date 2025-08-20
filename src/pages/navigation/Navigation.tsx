import { Container } from "@/components/container/container";
import { useNavigate } from "react-router-dom";
import i18n from "@/utils/i18n/i18n";
import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Constants } from "@/utils/constants/constantValues";
import { useTranslation } from "react-i18next";

export const Navigation = () => {
  const navigate = useNavigate();
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
    <nav className={`navigation`}>
      <Container>
        <div className="navigation__brand">
          <Box onClick={() => navigate("/")}>
            <img src={Constants.logo} alt="" />
          </Box>
        </div>

        <Box className="navigation__menu">
          <Flex style={{ textTransform: "uppercase" }} direction="row" gap="5">
            <Text
              className="hover"
              as="p"
              size="6"
              onClick={() => navigate("/")}
            >
              {t("nav.keys.home")}
            </Text>

            <Text
              className="hover"
              as="p"
              size="6"
              onClick={() => navigate("/services-prices")}
            >
              {t("nav.keys.ss")}{" "}
            </Text>

            <Text
              className="hover"
              as="p"
              size="6"
              onClick={() => navigate("/about")}
            >
              {t("nav.keys.aboutme")}{" "}
            </Text>

            <Text
              className="hover"
              as="p"
              size="6"
              onClick={() => navigate("/contact")}
            >
              {t("nav.keys.contact")}{" "}
            </Text>
          </Flex>
        </Box>

        <div className="navigation__socials">
          <ul>
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
          </ul>
        </div>
      </Container>
    </nav>
  );
};
