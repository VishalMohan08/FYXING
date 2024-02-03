import React from "react";
import './feedback.css';
import logo from './img-logo.png';
import {Link} from "react-router-dom";
function FEEDBACK(){
    return(
    <>
        <div class="navbar">
            <Link to = "/login"><a href="loginpage.html">Log Out</a></Link>
           <img src={logo} alt="Logo"></img>
        </div>
        <div className="form-popup">
            <form className="form-container">
                <h2>Enter Your Details</h2>
                <label>Email Address :</label>
                <br />
                <input type="email" required />
                <br />
                <label>YOUR FEEDBACK :</label>
                <textarea name="" id="" cols="60" rows="20"></textarea>
            </form>
        </div>
    </>
    );
}

export default FEEDBACK;