import { ThemeProps } from "@radix-ui/themes";

export const brand = {
  defaultLanguage: "en",
  company: {
    site: "https://www.beautybystiina.ee/",
    name: "BeautyByStiina - in Tallinn",
    logo: {
      src: "/static/logos/logo_new_3_hq.png",
      alt: "Your Company Logo",
      width: 118.2,
      height: 24,
    },
    colorPrimary: "#eedec5",
    colorSecondary: "#f7b1b0"
  },
  theme: {
    appearance: "light",
    accentColor: "blue",
    grayColor: "slate",
    panelBackground: "solid",
    scaling: "100%",
    radius: "full",
  } as ThemeProps,
};
