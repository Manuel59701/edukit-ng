import React, { useState, useEffect } from "react";
import Logo from "../../assets/EDUKIT LOGO (Main).png";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  // toggleMobileMenu function
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveSubmenu(null); // Close any open submenu when switching dropdowns
  };

  const handleSubmenuToggle = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdownClick =
        event.target.closest(".dropdown") || event.target.closest(".NavLogo");
      if (!isDropdownClick) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="Navbar">
      {/* Logo Section */}
      <div className="NavLogo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Navigation Items */}
      <button className="hamburger" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <div className={`NavComp ${mobileMenuOpen ? 'active' : ''}`} >
        <div className="NavItems">
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
                    <a href="#">Our Profile</a>
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
            <li className="dropdown">
              <button onClick={() => handleDropdownToggle("donate")}>
                Donate
                <i
                  className={`material-icons ${
                    activeDropdown === "donate" ? "expand_less" : "expand_more"
                  }`}
                >
                  {activeDropdown === "donate" ? "expand_less" : "expand_more"}
                </i>
              </button>
              {activeDropdown === "donate" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Donate Resources</a>
                  </li>
                  <li>
                    <a href="#">Donate Funds</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Request */}
            <li className="dropdown">
              <button onClick={() => handleDropdownToggle("request")}>
                Request
                <i
                  className={`material-icons ${
                    activeDropdown === "request" ? "expand_less" : "expand_more"
                  }`}
                >
                  {activeDropdown === "request" ? "expand_less" : "expand_more"}
                </i>
              </button>
              {activeDropdown === "request" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Request as Student</a>
                  </li>
                  <li>
                    <a href="#">Request as School</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Get Involved */}
            <li className="dropdown">
              <button onClick={() => handleDropdownToggle("get-involved")}>
                Get Involved
                <i
                  className={`material-icons ${
                    activeDropdown === "get-involved"
                      ? "expand_less"
                      : "expand_more"
                  }`}
                >
                  {activeDropdown === "get-involved"
                    ? "expand_less"
                    : "expand_more"}
                </i>
              </button>
              {activeDropdown === "get-involved" && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Partner with Us</a>
                  </li>
                  <li>
                    <a href="#">Sponsor an Event</a>
                  </li>
                </ul>
              )}
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
                    <a href="#">Join Student Commmunity</a>
                  </li>
                  <li>
                    <a href="#">Book an Online Tutor</a>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact Us */}
            <div className="NavOthers">
              <li>
                <a href="#">Contact Us</a>
              </li>
            </div>
          </ul>
        </div>

        {/* Buttons for Sign Up and Log In */}
        <div className="NavButtons">
          <button className="log-in">Log In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
