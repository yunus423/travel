import React, { useState } from "react";
import "../../Components/navbar/navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showBar = () => {
    setActive("navBar activeNavbar");
  };
  const removeBar = () => {
    setActive("navBar ");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            {" "}
            <h1>
              <MdOutlineTravelExplore />
              Travel.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeBar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showBar} className="toggleNavbar">
          <AiOutlineMenu className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
