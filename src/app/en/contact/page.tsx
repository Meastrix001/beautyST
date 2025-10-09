import Contact from "@/PageComponents/contact/page";
import { brand } from "@/theme/brand.config";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Metadata } from "next";

const pageLanguage = "en"
export default function ContactPageEn() {
    return <Contact lang={pageLanguage} />
}

export const metadata: Metadata = {
    alternates: {
        canonical: `${brand.company.site}${pageLanguage}/contact`
    },
    title: LanguageKeys[pageLanguage].SEO.contact.title,
    description: LanguageKeys[pageLanguage].SEO.contact.desc,
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.contact.title,
        description: LanguageKeys[pageLanguage].SEO.contact.desc,
        url: `${brand.company.site}${pageLanguage}/contact`,
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


