"use client"

export const LandingMetaData = () => {
    export async function generateMetadata({ params }: SEOProps): Promise<Metadata> {
        return generateSEO({ locale: params.locale, page: "home" });
    }
}
