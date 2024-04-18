import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "../assets/style/main.style/main.scss";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ServicePage from "../pages/services";
import WorkPage from "../pages/work";
// import BlogPage from "../pages/blog";
import ContactPage from "../pages/contact";
import NavMobile from "../components/navMobile";
export default function MainView() {
  return (
    <div className="main__view__page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/work" element={<WorkPage />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Outlet />
      <NavMobile></NavMobile>
    </div>
  );
}
