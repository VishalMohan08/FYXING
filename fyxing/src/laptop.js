import React from "react";
import apple from './img-apple.png';
import dell from './img-dell.png';
import asus from './img-asus.png';
import lenovo from './lenovo.png';
import hp from './img-hp.png';
import acer from './img-acer.png';
import logo from './img-logo.png';
import './mobile1.css';
import './navbar.css';
import {Link} from "react-router-dom";
import { Button } from "./components v1.2.1";

function Lapop(){
    return(
        <>
        <div class="navbar">
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
        <div className="screen1">
            <div className="border1">
                <img src={apple} alt="Apple" />
                 <div className="info">
                <Link to ="/repair">
                    <button>
                        <p className="fonts1">Get your MacBooks repaired</p>
                    </button>
                </Link>
                 </div>
            </div>
        </div>
        <div className="screen2">
            <div className="border1">
                <img src={dell} alt="Dell" />
                 <div className="info">
                    <Link to ="/DELLdeviceform">

                    <button>
                        <p className="fonts1">Expert Repairs for Your PC</p>
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
        <div className="screen3">
            <div className="border1">
                <img src={asus} alt="Asus" />
                 <div className="info">
                    <Link to ="/ASUSdeviceform">

                    <button>
                        <p className="fonts1">Search for a Solution</p>
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
        <div className="screen4">
            <div className="border1">
                <img src={lenovo} alt="Lenovo" />
                 <div className="info">
                    <Link to="/lenovo"><button>
                    <p className="fonts1">Welcome to Lenovo Customer</p>
                    <p className="fonts1">Support.</p>
                    </button></Link>
                 </div>
            </div>
        </div>
        <div className="screen5">
            <div className="border1">
                <img src={hp} alt="Hp" />
                 <div className="info">
                    <Link to ="/HPdeviceform">

                    <button>
                    <p className="fonts1">Welcome to HP Customer</p>
                    <p className="fonts1">Support.</p>
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
        <div className="screen6">
            <div className="border1">
                <img src={acer} alt="Acer" />
                 <div className="info">
                    <Link to ="/ACERdeviceform">

                    <button>
                    <p className="fonts1">Welcome to Acer Customer </p>
                    <p className="fonts1">Support.</p>
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
        </>
    );
    
}

export default Lapop;