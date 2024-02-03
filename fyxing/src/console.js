import React from 'react';
import logo from './logo2.png';
import playstation from './img-playstation.png';
import xbox from './img-xbox.png';
import nintendo from './img-nintendo.png';
import './console.css';
import './navbar.css';
import {Link} from "react-router-dom";
import { Button } from './components v1.2.1';
function Console(){
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
                <img src={nintendo} alt="Nintendo" />
                 <div className="info">
                    <Link to ="/NINTENDO">

                    <button>
                        <p className="fonts2">Get your Nintendo Console</p>
                        <p className='fonts2'>Repaired</p>
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
        <div className="screen2">
            <div className="border1">
                <img src={xbox} alt="Xbox" />
                 <div className="info">
                    <Link to="/XBOX">
                    <button>
                        <p className="fonts2">Get your Xbox Console</p>
                        <p className='fonts2'>Repaired</p>
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
        <div className="screen3">
            <div className="border1">
                <img src={playstation} alt="Playstation" />
                 <div className="info">
                    <Link to ="/PS5">

                    <button>
                        <p className="fonts2">Get your Playstation Console</p>
                        <p className="fonts2">repaired</p>
                    </button>
                    </Link>
                 </div>
            </div>
        </div>
        </>
    );
}

export default Console;