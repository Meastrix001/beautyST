"use client";

import i18n from "@/utils/i18n/i18n";
import { Badge, Flex } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher({ setLang }: { setLang?: React.Dispatch<React.SetStateAction<string>> }) {
  const router = useRouter();
  const [activeLanguage, setActiveLanguage] = useState<string>(i18n.language);

  const handleLanguageChange = async (lang: 'en' | 'est') => {
    await i18n.changeLanguage(lang);
    if (setLang) {
      setLang(lang)
    }

    let currentPath = window.location.pathname;
    setActiveLanguage(lang)
    if (window.location.pathname === "/est") {
      router.push(`/${lang}/`);
    }

    if (window.location.pathname === "/en" || window.location.pathname === "") {
      router.push(`/`);
    }

    else {
      currentPath = currentPath.replace("/est/", ``);
      currentPath = currentPath.replace("/en/", ``);

      currentPath = `/${lang}/${currentPath}/`;

      router.push(currentPath);

    }
  };

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
