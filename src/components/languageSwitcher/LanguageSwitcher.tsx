"use client";

import i18n from "@/utils/i18n/i18n";
import { Badge, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [activeLanguage, setActiveLanguage] = useState<string>(i18n.language);
  const router = useRouter();

  const handleLanguageChange = async (lang: 'en' | 'est') => {
    await i18n.changeLanguage(lang);
    let currentPath = window.location.pathname;
    setActiveLanguage(lang)
    if (window.location.pathname === "/est" || window.location.pathname === "/en") {
      router.push(`/${lang}/`);

    } else {
      currentPath = currentPath.replace("/est/", ``);
      currentPath = currentPath.replace("/en/", ``);

      currentPath = `/${lang}/${currentPath}/`;

      router.push(currentPath);

    }
  };

  // useEffect(() => {
  //   const handleChange = (lng: string) => setActiveLanguage(lng);

  //   i18n.on("languageChanged", handleChange);

  //   return () => {
  //     i18n.off("languageChanged", handleChange);
  //   };
  // }, []);

  return (
    <Flex justify={{ initial: "center", lg: "end" }} gap="2">
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
  );
}
