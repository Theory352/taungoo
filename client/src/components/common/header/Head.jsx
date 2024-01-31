import React from "react";
import logo from "../../../assets/user.png";

const Head = () => {
  return (
    <>
      <section className="head bg-[#1eb2a6]">
        <div className="container flexSB flex justify-between items-center">
          <div className="avatar">
            <div className="w-12 mx-0 cursor-pointer">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="logo">
            <h1
              className="font-semibold mb-4 bg-gradient-to-r text-3xl from-blue-600 to-yellow-700 
           text-transparent bg-clip-text cursor-pointer"
            >
              University Of Computer Studies Taungoo
            </h1>
          </div>

          <div className="social flex gap-2 z-50 ">
            <i className="fab fa-facebook-f icon bg-gradient-to-r text-xl from-blue-600 to-blue-500 
           text-transparent bg-clip-text hover:text-blue-400"></i>
            <i className="fab fa-instagram icon bg-gradient-to-r text-xl from-violet-600 to-yellow-500 
           text-transparent bg-clip-text hover:text-yellow-500" ></i>
            <i className="fab fa-twitter icon bg-gradient-to-r text-xl from-sky-600 to-sky-500 
           text-transparent bg-clip-text hover:text-sky-300"></i>
            <i className="fab fa-youtube icon bg-red-800 hover:text-red-500"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
