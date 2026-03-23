import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        
        {/* TEXT */}
        <div className="portfolio-text">
          <h2>A career-ready portfolio in weeks</h2>
          <p>
            Every course you complete on Knowvex generates verified skill
            credentials you can share with employers. Showcase real growth,
            not just certificates.
          </p>

          <button className="primary-btn">
            Start Building Your Portfolio
          </button>
        </div>

        {/* IMAGE */}
        <div className="portfolio-image">
          <img
            src="/public/Job Portfolio Mockup.png"
            alt="Resume Builder UI"
          />
        </div>

      </div>
    </section>
  );
};

export default Portfolio;