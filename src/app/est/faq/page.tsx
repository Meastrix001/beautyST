import FaqPage from "@/PageComponents/faq/faq.page";
import { brand } from "@/theme/brand.config";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Metadata } from "next";

const pageLanguage = "est"

export default function FaqPageEst() {
    return <FaqPage lang={pageLanguage} />
}

export const metadata: Metadata = {
    alternates: {
        canonical: "faq-est"
    },
    title: LanguageKeys[pageLanguage].SEO.faq.title,
    description: LanguageKeys[pageLanguage].SEO.faq.desc,
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.faq.title,
        description: LanguageKeys[pageLanguage].SEO.faq.desc,
        url: `${brand.company.site}/${pageLanguage}/faq`,
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


