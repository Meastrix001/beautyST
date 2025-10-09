import About from "@/PageComponents/about/page";
import { brand } from "@/theme/brand.config";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Metadata } from "next";

const pageLanguage = "et"


export default function AboutPageEn() {
    return <About lang={pageLanguage} />
}

export const metadata: Metadata = {
    alternates: {
        canonical: `${brand.company.site}${pageLanguage}/about`,
        languages: {
            en: `${brand.company.site}en/about`,
            et: `${brand.company.site}et/about`,
        },
    },
    title: LanguageKeys[pageLanguage].SEO.about.title,
    description: LanguageKeys[pageLanguage].SEO.about.desc,
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.about.title,
        description: LanguageKeys[pageLanguage].SEO.about.desc,
        url: `${brand.company.site}${pageLanguage}/about`,
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

