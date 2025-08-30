"use client";
import { BookingButton } from "@/components/ui/BookingBtn/bookingBtn";
import CTACard from "@/components/ui/CTACard/CTACard";
import React from "react";
import { useTranslation } from "react-i18next";

const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <CTACard
      heading={t("cta.heading")}
      description={t("cta.subHeading")}
      image="/static/landing/corner_img.jpg"
    >
      <BookingButton onlyBtn />
    </CTACard>
  );
};

export default CTASection;
