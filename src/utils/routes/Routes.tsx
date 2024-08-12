import { RouteWrapper } from "@/pages";
import { ContactPage } from "@/pages/contact/Contact";
import PageNotFound from "@/pages/error/404.page";
import { Landing } from "@/pages/landing/Landing";
import { Prices } from "@/pages/prices/Prices";
import { createBrowserRouter } from "react-router-dom";

export const Routes = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <RouteWrapper />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "/",
          element: <Landing />,
          errorElement: <PageNotFound />,
        },
        {
          path: "/services-prices",
          element: <Prices />,
          errorElement: <PageNotFound />,
        },
        {
          path: "/about",
          element: <Prices />,
          errorElement: <PageNotFound />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
          errorElement: <PageNotFound />,
        },
      ],
    },
  ]);
};

export default Routes;
