import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Availability from "../components/Availability/Availability";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Portfolio from "../components/Portfolio/Portfolio";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import "./Layout.css";
function Layout() {
  // renders all of the components for the main page
  return (
    <main className="Layout">
      <Header />
      <SkillsSection />
      <AboutMe />
      <Availability />
      <Portfolio />
      <Footer />
    </main>
  );
}

export default Layout;
