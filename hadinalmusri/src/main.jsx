import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Beranda from "./pages/Beranda.jsx";
import InfoIklan from "./pages/InfoIklan";
import Karir from "./pages/Karir";
import Kontak from "./pages/Kontak";
import Profil from "./pages/Profil";
import TimRedaksi from "./pages/TimRedaksi";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Beranda />} />
      <Route path="/infoIklan" element={<InfoIklan />} />
      <Route path="/karir" element={<Karir />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/timRedaksi" element={<TimRedaksi />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
