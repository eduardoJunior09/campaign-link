import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Campanha from "./Pages/Campanha.jsx";
import Edit from "./Pages/Edit.jsx";
import ViewCampaign from "./Pages/ViewCampaign.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="campaign" element={<Campanha />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="viewCampaign/:id" element={<ViewCampaign />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    <Toaster position="top-right" reverseOrder={false} />
  </BrowserRouter>
);
