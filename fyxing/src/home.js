import React from "react";
import logo from './logo2.png';
import './navbar.css';
import './home.css';
import { Button } from './components v1.2.1';
import {Link} from "react-router-dom";

function Home(){
    return(
        <>
        <div class="navbar">
        <Link to ="/">
        <Button className='l' width={135} height={50} backgroundColor='rgb(34, 166, 240)'
        fontSize={22} color='rgb(255, 255, 255)' placeHolder='Logout' />
        </Link>
        <Link to = "/login"><p>Track</p></Link>
        <Link to ="/">
          <p>Home</p>
        </Link>
        <img src={logo} alt="Logo"></img>
        <label>FYXING</label>
        </div>
        <div class = "border">
        <br />
        <div class = "img1"></div>
            <div class = "postiondown"></div>
            <ul >
                <li>
                    <p class = 'font'>WARRANTY CHECKS AND RENEWALS</p><br />
                </li>
                <li>
                    <p class = 'font'>HARDWARE ISSUES</p><br />
                </li>
                <li>
                    <p class = 'font'>ON-SITE AND WALK IN REPAIRS</p>
                </li>
            </ul>
            <center>
                <Link to="/mobile1"><input  class = "button" type = "button" onclick="document.location='mobilehome.html'" value = "MOBILES" /></Link>
            </center>
    </div>
    <div class="postion1">
        <div class = "border">
            <div class = "img2"></div>
            <div class = "postiondown"></div>
            <ul>
                <li>
            <p class = 'font'>DRIVER SUPPORT</p><br />
        </li>
        <li>
            <p class = "font">OS AND HARDWARE SUPPORT</p><br />
        </li>
        <li>
            <p class = 'font'>VERIFIED PARTS AND ONSITE REPAIRS</p>
        </li>
    </ul>
    <br />
    <center>
        <Link to="/laptop"><input  class = "button" type = "button" onclick="document.location='laptophome.html'" value = "LAPTOPS" /></Link>
    </center>
</div>
</div>
<div class="postion2">
        <div class="border">
            <div class = "img3"></div>
            <div class = "postiondown"></div>
            <ul>
                <li>
                    <p class = 'font'>COMPATIBILITY ISSUES</p><br />
                </li>
                <li>
                    <p class = "font">WARRANTY CHECKS AND RENEWALS</p><br />
                </li>
                <li>
                    <p class = 'font'>EXPERIENCED SERVICE CENTER SUPPORT</p>
                </li>
            </ul>
            <center>
                <Link to="/console"><input  class = "button" type = "button" onclick="" value = "CONSOLE" /></Link>
            </center>
        </div>
    </div>
</>





    );
}

export default Home;