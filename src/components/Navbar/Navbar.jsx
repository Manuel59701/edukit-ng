import React, { useState, useEffect } from "react";
import Logo from "../../assets/EDUKIT LOGO (Main).png";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu toggle
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdownClick =
        event.target.closest(".dropdown") || event.target.closest(".NavLogo");
      if (!isDropdownClick) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="Navbar">
      {/* Logo Section */}
      <div className="NavLogo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Menu Icon for Small Screens */}
      <div className="MenuIcon" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Items */}
      <div className={`NavItems ${isOpen ? "active" : ""}`}>
        <div className="MenuIcon" onClick={toggleNavbar}>
          <FaTimes />
        </div>

        <ul>
          {/* About Us */}
          <li className="dropdown">
            <button onClick={() => handleDropdownToggle("about-us")}>
              About Us
              <i
                className={`material-icons ${
                  activeDropdown === "about-us" ? "expand_less" : "expand_more"
                }`}
              >
                {activeDropdown === "about-us" ? "expand_less" : "expand_more"}
              </i>
            </button>
            {activeDropdown === "about-us" && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/OurProfile">
                    <a href="#">Our Profile</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Our Team</a>
                </li>
                <li>
                  <a href="#">Impact</a>
                </li>

                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            )}
          </li>

          {/* Donate */}
          <li>
            <a href="#donate">Donate</a>
          </li>

          {/* Request */}
          <li>
            <a href="#request">Request</a>
          </li>

          {/* Get Involved */}
          <li className="dropdown">
            <a href="#getInvolved">Get Involved</a>
          </li>

          {/* Learning-Hub*/}
          <li className="dropdown">
            <button onClick={() => handleDropdownToggle("learning-hub")}>
              Learning Hub
              <i
                className={`material-icons ${
                  activeDropdown === "learning-hub"
                    ? "expand_less"
                    : "expand_more"
                }`}
              >
                {activeDropdown === "get-involved"
                  ? "expand_less"
                  : "expand_more"}
              </i>
            </button>
            {activeDropdown === "learning-hub" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">E-Library</a>
                </li>
                <li>
                  <a href="#">Book a Counselor</a>
                </li>
                <li>
                  <a href="#">Join Commmunity</a>
                </li>
                <li>
                  <a href="#">Book an Online Tutor</a>
                </li>
              </ul>
            )}
          </li>

          {/* Contact Us */}
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>

      {/* Buttons for Sign Up and Log In */}
      <div className="NavButtons">
        <button className="log-in">Log In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
