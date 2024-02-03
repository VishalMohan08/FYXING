import React from "react";
import apple from './img-apple.png';
import google from './img-google.png';
import samsung from './img-samsung.png';
import oneplus from './img-oneplus.png';
import motorola from './img-motorola.png';
import nokia from './img-nokia.png';
import logo from './logo2.png';
import {Link} from "react-router-dom";
import { Button } from "./components v1.2.1";
import './mobile1.css';
function Mobiles(){
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
                 <Link to ="/repair"><button>
                        <p className="fonts1">Get your Iphone repaired</p>
                    </button></Link>
                 </div>
            </div>
        </div>
        <div className="screen2">
            <div className="border1">
                <img src={google} alt="Google" />
                 <div className="info">
                    <Link to ="/Mobilerepair">
                        <button>
                            <p className="fonts1">Get your Pixel phone repaired</p>
                        </button>
                    </Link>
                 </div>
            </div>
        </div>
        <div className="screen3">
            <div className="border1">
                <img src={samsung} alt="Samsung" />
                 <div className="info">
                    <Link to ="/MobileRepair">
                        <button>
                            <p className="fonts1">Get your Samsung Mobile</p>
                            <p className="fonts1">repaired</p>
                        </button>
                    </Link>
                 </div>
            </div>
        </div>
        <div className="screen4">
            <div className="border1">
                <img src={oneplus} alt="Oneplus" />
                 <div className="info">
                    <Link to ="/MobileRepair">

                    <button>
                        <p className="fonts1">Get your Oneplus Mobile</p>
                        <p className="fonts1">repaired</p>
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
        <div className="screen5">
            <div className="border1">
                <img src={motorola} alt="Motorola" />
                 <div className="info">
                    <Link to ="/MobileRepair">

                    <button>
                    <p className="fonts1">Get your Motorola phone</p>
                    <p className="fonts1">repaired</p>
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
        <div className="screen6">
            <div className="border1">
                <img src={nokia} alt="Nokia" />
                 <div className="info">
                    <Link to ="/MobileRepair">

                    <button>
                    <p className="fonts1">Get your Nokia phone repaired</p>
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
        </>
    );
    
}

export default Mobiles;