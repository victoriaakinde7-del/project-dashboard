import React from "react";

const Learners = () => {
  return (
    <section className="learners">
      
      <h2>Learners who mean business</h2>
      <p className="subtitle">Real professionals. Real results.</p>

      <div className="testimonial-card">
        <img
            src="/public/image.png"
            alt="image of a lady"
          />

        <p className="testimonial-text">
          Knowvex gave me a structured path when I had no idea where to start.
          I got promoted within 4 months of completing my first track.
        </p>

        <p className="author">
          Sinmileoluwa A., Frontend Developer, Lagos
        </p>
      </div>

    </section>
  );
};

export default Learners;