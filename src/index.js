/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
// others
import Peliculas from "views/pages/peliculas.js"
import Valoraciones from "views/pages/valoraciones.js"
import Pelicula from "views/pages/pelicula.js"
import Nueva from "views/pages/nueva.js"
import EditarPelicula from "views/pages/editarPelicula.js"
import EditarValoracion from "views/pages/valoracion.js"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/index" element={<Index />} />
      <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/index" replace />} />
      <Route path='/peliculas/:id' element={<Pelicula />} />
      <Route path='/peliculas/:id/editar' element={<EditarPelicula />} />
      <Route path='/valoracion/:id/editar' element={<EditarValoracion />} />
      <Route path="/peliculas" element={<Peliculas />} /> 
      <Route path="/valoraciones" element={<Valoraciones />} /> 
      <Route path="/nueva"  element={<Nueva />} /> 
      <Route path='/peliculas/:id' element={<Pelicula />} />

    </Routes>
  </BrowserRouter>
);

//