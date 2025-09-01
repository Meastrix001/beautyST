import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";
import CTACard from "@/components/ui/CTACard/CTACard";
import { PageLang } from "@/models/pageLang.model";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import React from "react";

const CTASection: React.FC<PageLang> = ({ lang }) => {

  return (
    <CTACard
      heading={LanguageKeys[lang].cta.heading}
      description={LanguageKeys[lang].cta.subHeading}
      image="/static/landing/corner_img.jpg"
    >
      <BookingButton lang={lang} onlyBtn />
    </CTACard>
  );
};

export default CTASection;
