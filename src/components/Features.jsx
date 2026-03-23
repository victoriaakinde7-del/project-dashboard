function Features() {
  return (
    <section className="features">
      {/* TOP */}
      <div className="features-top">
        <h2>Why Knowvex?</h2>

        <p className="features-text">
          Knowvex understands where you are, where you're going,
          and builds the exact path to get you there.
        </p>
      </div>

      {/* BOTTOM */}
      <div className="feature-row">
        {/* LEFT SIDE */}
        <div className="feature-left">
          <div className="input-box">
            <p className="label">Describe what you want to learn</p>
            <div className="fake-input"></div>

            <p className="label">Choose a tone</p>
            <button className="small-btn">Professional</button>

            <button className="generate-btn">
              Generate Learning Path
            </button>
          </div>

          <h3>Adaptive Learning Paths</h3>
          <p className="desc">
            AI maps your current skills, career goals, and learning pace to
            create a path that’s yours.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="feature-right">
          <div className="card">
            <h3>Multilingual</h3>
            <p className="desc">
              Learn in the language you think best in. Supports 20+ languages.
            </p>

            <div className="languages">
              <img src="/public/frame 427321329.svg" alt="USA Flag" className="flags" />
            </div>

    <div class="stats">
      <div class="stat-card">
        <h2>94%</h2>
        <p>Course completion rate</p>
      </div>

      <div class="stat-card primary">
        <h2>4.9</h2>
        <p>Average learner rating</p>
      </div>
    </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;