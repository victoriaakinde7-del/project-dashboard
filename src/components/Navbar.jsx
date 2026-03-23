function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/public/logo.svg" alt="Knowvex" />
      </div>

      <div className="nav-links">
        <a href="#">Features</a>
        <a href="#">How it Works</a>
        <a href="#">Pricing</a>
      </div>

      <button className="nav-btn">Get Started for Free</button>
    </nav>
  );
}

export default Navbar;