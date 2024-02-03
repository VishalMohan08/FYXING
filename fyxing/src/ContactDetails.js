import React from "react";
import { InputBox, TextBox } from "./components";
import { Button } from './components v1.2.1';
import { Link } from "react-router-dom";
import "./ContactDetails.css";
import './navbar1.css';
import logo from './logo2.png';
function Contact() {
    return (
      <>
      <div className="back-img">
        <div className="navbar1">
        <p></p>
        <Link to ="/">
        <Button className='lg' width={135} height={50} backgroundColor='rgb(34, 166, 240)'
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
      <form>
        <div className="box1">
          <div className="finalpos">
            <br />
            <br />
            <label className="name">
              Name:
              <br />
              <InputBox borderRadius="50px" placeHolder="First Name" />
              &nbsp;&nbsp;
              <InputBox borderRadius="50px" placeHolder="Last Name" />
            </label>
            <br />
            <br />
            <label className="name">
              Contact:
              <br />
              <InputBox borderRadius="50px" placeHolder="Contact" />
              <br />
              <br />
            </label>
            <label className="name">
              Secondary Contact:
              <br />
              <InputBox borderRadius="50px" placeHolder="Secondary Contact" />
            </label>

            <br />
            <br />
            <label className="name">
              Address:
              <br />
              <TextBox rows="14" cols="60" placeHolder="Enter Address" />
            </label>
            <div className="statelist">
              <label className="name">
                State:
                <br />
                <select className="Sl" name="state" id="state">
                  <option value="" disabled selected>
                    Select your state
                  </option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </option>
                  <option value="Daman and Diu">Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </label>
            </div>
            <div className="district">
              <label className="name">
                District:
                <br />
                <InputBox borderRadius="50px" placeHolder="District" />
              </label>
            </div>
            <div className="pincode">
              <label className="name">
                Pincode:
                <br />
                <InputBox
                  type="email"
                  borderRadius="50px"
                  placeHolder="Pincode"
                  />
              </label>
            </div>
            <div className="district">
              <label className="name">
                Primary Email:
                <br />
                <InputBox
                  type="email"
                  borderRadius="50px"
                  placeHolder="Primary Email"
                  />
              </label>
            </div>
            <div className="district">
              <label className="name">
                Secondary Email:
                <br />
                <InputBox
                  type="email"
                  borderRadius="50px"
                  placeHolder="Secondary Email"
                  />
              </label>
            </div>
            <div className="district">
              <Link to ="/confirm">
                <input className="subin" type="submit" value="SUBMIT" />
              </Link>
            </div>
          </div>
        </div>
      </form>
      </div>
      </>

    );
  }
export default Contact;
