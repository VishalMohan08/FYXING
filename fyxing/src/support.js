import React from "react";
import './support.css';
import { Link } from "react-router-dom";
function Support(){
    return(
        <div class = "border20">
        <h3 class = "Fonts20">TELL US WHAT'S HAPPENING...</h3>
        <br />
        <form action="confirmationpage.html">
            <input class = "input-field-down20" type = "email" placeholder="APPLE ID" required />
            <br></br>
            <br></br>
            <label class = "fonts20" for = "models">MODEL NAME</label>
            <div class = "newpostion20">
                <br />
                <select class = "labelpadding20" name = "model" id = "models">
                    <option  value = "">SELECT AN MODEL</option>
                    <optgroup label="IPHONES">
                        <option  value = "IPHONE 14 PRO MAX">IPHONE 14 PRO MAX</option>
                        <option value = "IPHONE 14 PRO">IPHONE 14 PRO</option>
                        <option value = "IPHONE 14 PLUS">IPHONE 14 PLUS</option>
                        <option value = "IPHONE 14">IPHONE 14</option>
                        <option value = "IPHONE 13 PRO MAX">IPHONE 13 PRO MAX</option>
                        <option  value = "IPHONE 13 PRO">IPHONE 13 PRO</option>
                        <option value = "IPHONE 13">IPHONE 13</option>
                        <option value = "IPHONE 13 MINI">IPHONE 13 MINI</option>
                        <option value = "IPHONE 12 PRO MAX">IPHONE 12 PRO MAX</option>
                        <option value = "IPHONE 12 PRO">IPHONE 12 PRO</option>
                        <option value = "IPHONE 12">IPHONE 12</option>
                        <option value = "IPHONE 12 MINI">IPHONE 12 MINI</option>
                        <option value = "IPHONE 11 PRO MAX">IPHONE 11 PRO MAX</option>
                        <option value = "IPHONE 11 PRO">IPHONE 11 PRO</option>
                        <option value = "IPHONE 11">IPHONE 11</option>
                    </optgroup>
                    <optgroup label="MACBOOKS">
                        <option  value = "MACBOOK PRO M1 MAX">MACBOOK PRO M1 MAX</option>
                        <option value = "MACBOOK PRO M1 PRO">MACBOOK PRO M1 PRO</option>
                        <option value = "MACBOOK PRO M2">MACBOOK PRO M2</option>
                        <option value = "MACBOOK AIR M2">MACBOOK AIR M2</option>
                        <option value = "MACBOOK PRO M1">MACBOOK PRO M1</option>
                        <option  value = "MACBOOK AIR M1">MACBOOK AIR M1</option>
                    </optgroup>
                </select>
                <br></br>
                <br></br>
                <label class = "fonts120" for = "issues">ISSUES</label>
                <br></br>
                <br></br>
                <select class = "labelpadding20" name = "issue" id = "issues">
                    <option  value = "">SELECT AN ISSUE</option>
                    <option  value = "DISPLAY FLICKERING ISSUES">DISPLAY FLICKERING ISSUES</option>
                    <option value = "HEATING ISSUES">HEATING ISSUES</option>
                    <option value = "KEYBOARD ISSUES">KEYBOARD ISSUES</option>
                </select>
                <br></br>
                <br></br>
                <label className="txtcol">DESCRIPTION</label>
                <br/>
                <textarea name="" id="" cols="60" rows="20" className="col"></textarea>
                <br></br>
                <br></br>
                <input class = "input-field20" type= "text" placeholder="YEAR OF MANUFACTURE(YYYY)"  id = "year" required />
                <br></br>
                <br></br>
                <Link to ="/ContactDetails">
                    <input class = "requestbutton20" type ="submit" value = "RAISE A REQUEST" />
                </Link>
            </div>
        </form>
    </div>

    );
}

export default Support;