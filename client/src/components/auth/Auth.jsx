import React from "react";
import "./auth.css";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    alert("You are successfully Login");
    navigate("/");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert("You are successfully SignUp");
    navigate("/");
  };

  return (
    <>
      <div className="parent">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="signup flex justify-end">
            <form onSubmit={handleSignup}>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input 
                type="text"
                name="txt"
                placeholder="User name"
                required=""
              /> <br />
              <input 
                type="email"
                name="email"
                placeholder="Email"
                required=""
              /> <br />
              <input 
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              /> 
              <button>Sign up</button>
            </form>
          </div>

          <div className="login flex justify-end">
            <form onSubmit={handleLogin}>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label><br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
              /> <br />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              /> <br />
              <button>Login</button>
              <a className="hover:underline text-sky-500" href="/">Not Now..</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
