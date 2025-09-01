import FaqPage from "@/PageComponents/faq/faq.page";
import { brand } from "@/theme/brand.config";
import { Metadata } from "next";
const pageLanguage = "en"

export default function FaqPageEn() {
    return <FaqPage lang={pageLanguage} />
}

export const metadata: Metadata = {
    alternates: {
        canonical: "layout"
    },
    title: brand.company.name,
    description: "Get full body waxed in Tallinn, Estonia",
    openGraph: {
        title: brand.company.name,
        description: "Get full body waxed in Tallinn, Estonia",
        url: `${brand.company.site}/faq`,
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


