import { Container } from "@/components/container/container";
import BrandLogo from "../../assets/landing/brand-logo.png";
import { useNavigate } from "react-router-dom";
import i18n from "@/utils/i18n/i18n";
import { Badge } from "@radix-ui/themes";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const navigate = useNavigate();
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
    <nav className="navigation">
      <Container>
        <div className="navigation__brand">
          {" "}
          <img src={BrandLogo} alt="" />
        </div>

        <div className="navigation__menu">
          <ul>
            <li onClick={() => navigate("/")}>
              <span>Home</span>
            </li>
            <li onClick={() => navigate("/services-prices")}>
              <span>Services & prices</span>
            </li>

            <li onClick={() => navigate("/about")}>
              <span>About me</span>
            </li>
            <li onClick={() => navigate("/contact")}>
              <span>Contact</span>
            </li>
          </ul>
        </div>

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
