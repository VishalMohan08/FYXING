import React from "react";
import support from './img-support.png';
import './repair.css';
import { Link } from "react-router-dom";
function Repair(){
    return (
        <div className="b">
            <img className="imgs" src={support} alt="Support" />
            <div className="txt2">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <form>
                <input class = "input-field2" type = "text" placeholder="SERIAL NUMBER" maxlength = "12" required />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Link to ="/support">
                    <input class="requestbutton" type = "submit" value="START A REPAIR REQUEST" />
                </Link>
                <br></br><br></br>
               </form>
            </div>
        </div>
    );
}

export default Repair;