import { Route } from "@/models/Routes";

export const siteRoutesEst = {
  home: {
    path: "/",
    label: "nav.keys.home",
  } as Route,
  "services-prices": {
    path: "/est/services-prices",
    label: "nav.keys.ss",
  } as Route,
  about: {
    path: "/est/about",
    label: "nav.keys.about",
  } as Route,
  contact: {
    path: "/est/contact",
    label: "nav.keys.contact",
  } as Route,
  faq: {
    path: "/est/faq",
    label: "nav.keys.faq",
  } as Route,
  review: {
    path: "/est/review",
    label: "",
  } as Route,
  // Nav
  nav: {
    home: {
      path: "/",
      label: "nav.keys.home",
    } as Route,
    "services-prices": {
      path: "/est/services-prices",
      label: "nav.keys.ss",
    } as Route,
    about: {
      path: "/est/about",
      label: "nav.keys.about",
    } as Route,
    contact: {
      path: "/est/contact",
      label: "nav.keys.contact",
    } as Route,
    faq: {
      path: "/est/faq",
      label: "nav.keys.faq",
    } as Route,
  },
};
