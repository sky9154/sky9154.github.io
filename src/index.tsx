import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "@/i18n";
import "@assets/css/global.css";
import "@assets/css/theme.css";
import App from "@/App";


const container = document.getElementById("root");
const root = createRoot(container as Element);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);