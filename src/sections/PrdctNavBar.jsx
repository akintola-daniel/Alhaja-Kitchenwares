import React, { useState, useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { logo } from "@/assets/images";
import { navLinks2 } from "../constants";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { Link as RouterLink, useLocation } from "react-router-dom"; // For page navigation

const PrdctNavBar = () => {
  // Sliding Nav
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Nav Color [Transparent to Colored]
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      setColor(window.scrollY >= 10);
    };

    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const location = useLocation();

  return (
    <nav
      className={`${
        color ? "bg-white border-b border-b-gray-200" : "bg-transparent"
      } fixed w-full h-[80px] mx-auto px-4 sm:px-9 z-20 flex justify-between items-center top-0`}
    >
      <a href="/">
        <img src={logo} alt="Logo" className="w-[90px]" />
      </a>

      {/* Mobile Menu Icon */}
      <div onClick={toggleMenu} className="cursor-pointer md:hidden mr-4">
        {menuOpen ? <FaTimes size={30} /> : <IoIosMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed h-full w-[250px] p-4 top-0 left-0 border-r border-gray-300 bg-gray-50 md:hidden transition-transform duration-200 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="/">
          <img src={logo} alt="Logo" className="w-[110px] mx-auto" />
        </a>

        <div className="flex flex-col mt-7 gap-6 uppercase text-center">
          {navLinks2.map((link, index) => (
            <div
              key={index}
              className="border-b border-gray-400 pb-2 px-2 cursor-pointer "
            >
              {link.isRoute ? (
                <RouterLink
                  to={link.href}
                  className="hover:font-semibold hover:text-black"
                  onClick={toggleMenu}
                >
                  {link.label}
                </RouterLink>
              ) : (
                location.pathname === "/products" && (
                  <ScrollLink
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={400}
                    activeClass="active"
                    className="hover:font-semibold hover:text-black"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </ScrollLink>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        {navLinks2.map((link, index) => (
          <div key={index} className="cursor-pointer text-gray-600">
            {link.isRoute ? (
              <RouterLink
                to={link.href}
                className="hover:font-semibold hover:text-black"
              >
                {link.label}
              </RouterLink>
            ) : (
              location.pathname === "/products" && (
                <ScrollLink
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={400}
                  className="hover:font-semibold hover:text-black"
                >
                  {link.label}
                </ScrollLink>
              )
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default PrdctNavBar;
