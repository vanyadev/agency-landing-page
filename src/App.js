import React from "react";

import Header from "./components/header";
import Hero from "./components/hero";
import CreativeDesign from "./components/creativeDesign";
import Experience from "./components/experience";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { DemosPage } from "./pages/demosPage";
import { ServicesPage } from "./pages/servicesPage";
import { PagesPage } from "./pages/pagesPage";
import { ContactPage } from "./pages/contactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demos" element={<DemosPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/pages" element={<PagesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
