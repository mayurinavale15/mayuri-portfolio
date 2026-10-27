import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <a href="#home" className="logo">
          <span className="logo-symbol">&lt;MN /&gt;</span>
        </a>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

