import Prices from "@/PageComponents/services-prices/page";
import { brand } from "@/theme/brand.config";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Metadata } from "next";

const pageLanguage = "en"

export default function ServicesPricesPageEst() {
    return <Prices lang={pageLanguage} />
}

export const metadata: Metadata = {
    alternates: {
        canonical: `${brand.company.site}${pageLanguage}/services-prices`,
        languages: {
            en: `${brand.company.site}en/services-prices`,
            et: `${brand.company.site}et/services-prices`,
        },
    },
    title: LanguageKeys[pageLanguage].SEO.ss.title,
    description: LanguageKeys[pageLanguage].SEO.ss.desc,
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.ss.title,
        description: LanguageKeys[pageLanguage].SEO.ss.desc,
        url: `${brand.company.site}${pageLanguage}/services-prices`,
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


