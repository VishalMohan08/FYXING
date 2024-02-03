import React from 'react';
import './forgot.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import {InputBox,Button} from "./components v1.2.1";
function Forgot(){
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
   
    setPasswordShown(!passwordShown);
  };
        return(
        <div className = "back1">

            <div className = "postion0">
                <div>
                    <br />
                <h5  className="headpos">Create a strong password</h5>
                <p  className="headpos">Create a new, strong password that you don’t use for other websites</p>
                </div>
                <br></br>
                <div className = "input-container0">
                    <InputBox placeHolder="Enter Username" width="455px" height="50px"/>
                </div>
                <br></br>
                <div className = "input-container0">
                <input className="Pass" type={passwordShown ? "text" : "password" }  placeHolder="Enter Password" width="455px" height="50px" required /><br />
                </div>
                <br></br>
                <div className = "input-container0">
                <input className="Pass" type={passwordShown ? "text" : "password" }  placeHolder="Re-enter Password" width="455px" height="50px" required /><br />
                <label className="showPcol">
                <input type="checkbox"  onClick={togglePassword} />Show Password

                </label>
                </div>

                <br />
                <div className="buttonpos">
                <Link to ="/login">
                <Button placeHolder="SUBMIT"/>
                </Link>
                </div>
            </div>
        </div>
    );
            
    
}
export default Forgot;