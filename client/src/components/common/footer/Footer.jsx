import React from "react";
import "./footer.css";
import { useLocation } from "react-router-dom";
import Awrapper from "../../about/Awrapper"


const Footer = () => {
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
      <Awrapper />

        {/* <section className="newletter">
          <div className="container flexSB">
            <div className="left row">
              <h1>Newsletter - Stay tune and get the latest update</h1>
              <span>Far far away, behind the word mountains</span>
            </div>
            <div className="right row">
              <input type="text" placeholder="Enter email address" />
              <i className="fa fa-paper-plane"></i>
            </div>
          </div>
        </section> */}
        <footer>
          <div className=" padding flex justify-around ">
            <div className="box logo">
              <h1
                className="text-3xl bg-gradient-to-r from-sky-500 to-yellow-400 
          font-medium text-transparent bg-clip-text"
              >
                University of Computer
              </h1>
              <p
                className="text-2xl "
              >
               
                EDUCATION & LEARNING
              </p>
              <p className="text-1xl">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>

              <i className="fab fa-facebook-f icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-instagram icon"></i>
            </div>

            <div className="box last">
              <h3 className="bg-gradient-to-r from-sky-500 to-yellow-400 
          font-medium text-transparent bg-clip-text">Have a Questions?</h3>
              <ul>
                <li className="hover:text-sky-500 cursor-pointer ease-in duration-200">
                  <i className="fa fa-map"></i>
                  Myanmar, Bago , Taungoo
                </li>
                <li className="hover:text-sky-500 cursor-pointer ease-in duration-200">
                  <i className="fa fa-phone-alt"></i>
                  +95 9 404453209
                </li>
                <li className="hover:text-sky-500 cursor-pointer ease-in duration-200">
                  <i className="fa fa-paper-plane"></i>
                  www.google.com
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="legal">
          <p>Copyright ©2022 All rights reserved |</p>
        </div>
      </>
    );
  }
  return null;
};

export default Footer;
