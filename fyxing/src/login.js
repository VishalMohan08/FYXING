import React from "react";
import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { InputBox,Button } from "./components v1.2.1";
import logo from './logo2.png'
function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
    <div class="navbar">
        <p></p>
        <Link to ="/">
        <Button className='l' width={135} height={50} backgroundColor='rgb(34, 166, 240)'
        fontSize={22} color='rgb(255, 255, 255)' placeHolder='Logout' />
        </Link>
        <Link to ="/home">
          <p>Our Services</p>
        </Link>
        <Link to ="/">
          <p>Home</p>
        </Link>
           <img src={logo} alt="Logo"></img>
           <label>FYXING</label>
        </div>
    <div className="back">
      <div className="postion">
        <div>
          <br />
          <h1  className="logcolor">LOGIN</h1>
        </div>
        <br></br>
        <div className="input-container">
          <InputBox placeHolder="Enter Username" width="455px" height="60px" />
        </div>

        <br></br>
        <div className="input-container">
          <input
            className="Pass"
            type={passwordShown ? "text" : "password"}
            placeHolder="Enter Password"
            required
            />
          <br />
          <br/>
          <label className="fontfortext">
            Show Password
            <input type="checkbox" className="" onClick={togglePassword} />
          </label>
          <div className="forgor">
            <Link to ="/forgot">
                <a href="forgot.html">Forgot Password?</a>
            </Link>
          </div>
        </div>

        <br />
        <div className="buttonpos">
        <Link to = "/home">
                <Button placeHolder="SUBMIT" />
        </Link>
        <div className="sign">
            <Link to ="/SignUp">
                <a href="track.html">New? Sign up Instead</a>
            </Link>
        </div>
        </div>
      </div>
    </div>
  </>
  );
}
export default Login;