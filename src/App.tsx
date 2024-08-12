import { RouterProvider } from "react-router-dom";
import Routes from "./utils/routes/Routes";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n/i18n";
import "@github/markdown-toolbar-element";
import "./utils/scss/main.scss";
function App(): JSX.Element {
  const router = Routes();

  return (
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  );
}

export default App;
