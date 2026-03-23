import React from "react";

const HowItWorks = () => {
  return (
    <section className="how">
      <h2>How it works</h2>
      <p className="subtitle">
        Three steps to accelerated professional growth.
      </p>

      {/* STEP 1 */}
      <div className="how-row">
        <div className="how-left tags">
          <span>Social</span>
          <span>Blogs</span>
          <span>SEO</span>
          <span>E-Commerce</span>
          <span>Website</span>
          <span>Digital Ads</span>
          <span>Social Media</span>
          <span>Email</span>
          <span>Business</span>
          <span>Sales</span>
        </div>

        <div className="how-right">
          <h3>Choose a learning goal</h3>
          <p>
            Browse skill tracks by role, industry, or outcome — from product
            management to data analysis to executive leadership.
          </p>
        </div>
      </div>

      {/* STEP 2 */}
      <div className="how-row reverse">
        <div className="how-left">
          <h3>Build your learning profile</h3>
          <p>
            Knowvex assesses what you already know and tailors your path,
            pacing, and content format to fit your schedule.
          </p>
        </div>

        <div className="how-right form-box">
          <label>Brand/Product name</label>
          <input type="text" placeholder="Enter name" />

          <label>Describe your product</label>
          <input type="text" placeholder="Short description" />

          <label>Choose a tone</label>
          <div className="tone">Friendly</div>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="how-row">
        <div className="how-left form-box">
          <label>AI copy</label>
          <div className="copy-box">
            <p>Make it friendly</p>
            <p>Make it shorter</p>
            <p>Improve the copy</p>
          </div>

          <button className="primary-btn">Generate Copy</button>
        </div>

        <div className="how-right">
          <h3>Learn, practice, and advance</h3>
          <p>
            AI tutoring, real-world projects, and smart reviews keep you sharp
            and moving forward at every stage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;