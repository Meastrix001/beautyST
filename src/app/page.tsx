import Home from "@/PageComponents/landing/page";
import { brand } from "@/theme/brand.config";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Metadata } from "next";


const pageLanguage = "et"


export default function LandingPageEst() {
  return (
    <Home lang={pageLanguage} />
  )
}


export const metadata: Metadata = {
  alternates: {
    canonical: brand.company.site,
    languages: {
      en: `${brand.company.site}en/`,
      et: `${brand.company.site}`,
    },
  },
  title: LanguageKeys[pageLanguage].SEO.landing.title,
  description: LanguageKeys[pageLanguage].SEO.landing.desc,
  openGraph: {
    title: LanguageKeys[pageLanguage].SEO.landing.title,
    description: LanguageKeys[pageLanguage].SEO.landing.desc,
    url: `${brand.company.site}`,
    siteName: brand.company.name,
    images: [
      {
        url: brand.company.logo.src,
        width: 1200,
        height: 630,
        alt: `${brand.company.name} hero image`,
      },
    ],
    type: "website",
  },
};

