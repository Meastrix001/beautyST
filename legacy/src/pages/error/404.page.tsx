import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PageNotFound: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <h1>404: {t("error.404.heading")}</h1>
      <p>{t("error.404.description")}.</p>
      <Link to="/">{t("actions.home")}</Link>
    </>
  );
};

export default PageNotFound;
