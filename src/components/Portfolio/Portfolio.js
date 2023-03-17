import React from "react";
import CTA from "./CTA/CTA";
import "./Portfolio.css";
import PortfolioCarousel from "./PortfolioCarousel/PortfolioCarousel";
function Portfolio() {
  return (
    <section id="portfolio" className="Portfolio">
      <div className="main-container">
        <p className="section__title portfolio">Portfolio</p>
      </div>
      {/* render carousel and CTA */}
      <PortfolioCarousel />
      <CTA />
    </section>
  );
}

export default Portfolio;
