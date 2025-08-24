import { Route } from "@/models/Routes";

export const siteRoutes = {
  home: {
    path: "/",
    label: "nav.keys.home",
  } as Route,
  "services-prices": {
    path: "/services-prices",
    label: "nav.keys.ss",
  } as Route,
  about: {
    path: "/about",
    label: "nav.keys.about",
  } as Route,
  contact: {
    path: "/contact",
    label: "nav.keys.contact",
  } as Route,
  faq: {
    path: "/faq",
    label: "nav.keys.faq",
  } as Route,
  review: {
    path: "/review",
    label: "",
  } as Route,
  // Nav
  nav: {
    home: {
      path: "/",
      label: "nav.keys.home",
    } as Route,
    "services-prices": {
      path: "/services-prices",
      label: "nav.keys.ss",
    } as Route,
    about: {
      path: "/about",
      label: "nav.keys.about",
    } as Route,
    contact: {
      path: "/contact",
      label: "nav.keys.contact",
    } as Route,
    faq: {
      path: "/faq",
      label: "nav.keys.faq",
    } as Route,
  },
};
