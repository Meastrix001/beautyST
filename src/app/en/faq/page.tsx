import FaqPage from "@/PageComponents/faq/faq.page";
import { brand } from "@/theme/brand.config";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Metadata } from "next";
const pageLanguage = "en"

export default function FaqPageEn() {
    return <FaqPage lang={pageLanguage} />
}

export const metadata: Metadata = {
    title: LanguageKeys[pageLanguage].SEO.faq.title,
    description: LanguageKeys[pageLanguage].SEO.faq.desc,
    alternates: {
        canonical: `${brand.company.site}${pageLanguage}/faq`,
        languages: {
            en: `${brand.company.site}en/faq`,
            et: `${brand.company.site}est/faq`,
        },
    },
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.faq.title,
        description: LanguageKeys[pageLanguage].SEO.faq.desc,
        url: `${brand.company.site}${pageLanguage}/faq`,
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


