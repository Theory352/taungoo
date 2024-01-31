import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = ({ CURRENT_USER }) => {
  const [click, setClick] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  const location = useLocation();

  if (
    location.pathname !== "/admin" &&
    location.pathname !== "/admin/settings" &&
    location.pathname !== "/admin/about" &&
    location.pathname !== "/admin/userlist" &&
    location.pathname !== "/auth"
  ) {
    return (
      <>
        <Head />
        <header>
          <nav className="flexSB">
            <ul
              className={click ? "mobile-nav" : "flexSB "}
              onClick={() => setClick(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li
                className={
                  CURRENT_USER === "Student" ||
                  CURRENT_USER === "Teacher" ||
                  CURRENT_USER == "Admin"
                    ? "block"
                    : "hidden"
                }
              >
                <Link to="/courses">All Courses</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  CURRENT_USER === "Student" ||
                  CURRENT_USER === "Teacher" ||
                  CURRENT_USER == "Admin"
                    ? "block"
                    : "hidden"
                }
              >
                <Link to="/team">Team</Link>
              </li>
              <li
                className={
                  CURRENT_USER === "Student" ||
                  CURRENT_USER === "Teacher" ||
                  CURRENT_USER == "Admin"
                    ? "block"
                    : "hidden"
                }
              >
                <Link to="/faq">Faq</Link>
              </li>
              <li
                className={
                  CURRENT_USER === "Student" ||
                  CURRENT_USER === "Teacher" ||
                  CURRENT_USER == "Admin"
                    ? "block"
                    : "hidden"
                }
              >
                <Link to="/journal">Post</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li className={CURRENT_USER == "Admin" ? "block" : "hidden"}>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
            <a href="/auth" className="start">
              <Link to={"/auth"} onClick={handleLogin}>
                Login..
              </Link>
            </a>
            <button className="toggle" onClick={() => setClick(!click)}>
              {click ? (
                <i className="fa fa-times"> </i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </header>
      </>
    );
  }
};

export default Header;
