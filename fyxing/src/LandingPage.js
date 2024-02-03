import React from 'react';
import { Button } from './components v1.2.1';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import './navbar1.css';
import logo from './logo2.png';

class LandingPage extends React.Component
{
  render()
  {
    return(
      <>
      <div className="bg-image">
      <div className='navbar1'>
      <p></p>
      <Link to ="/Signup">
        <Button className='lg' width={135} height={50} backgroundColor='rgb(34, 166, 240)'
        fontSize={22} color='rgb(255, 255, 255)' placeHolder='Register' />
      </Link>
        <p>FAQ</p>
        <p>Contact Us</p>
        <p>About Us</p>
        <Link to ="/">
          <p>Home</p>
        </Link>
        <img src={logo} alt="Logo"></img>
        <label>FYXING</label>
      </div>
      </div>
      
        <div className="content">
                
            <div className="we-can-fix">
                We Can Fix <br /> Anything For <br /> You!
            </div>
            
            <br /><br />
            
            <div className="trusted-verified-and">
                Trusted, Verified and Quality repairs <br />
                for your gadget... Find Amazing <br />
                Deals on Warranties and Repairs for <br />
                Devices of all Different Categories
            </div>
  
            <br /><br />
            
            <div className="service-button"> 
            <Link to ="/home">
              <Button className='our-services' width={160} height={50} backgroundColor='rgb(0, 0, 0)'
                fontSize={20} color='rgb(255, 255, 255)' placeHolder='Our Services' />
            </Link>
            </div> 
            <div className='login-button'>
              <Link to ="/login">
                <Button className='login' width={150} height={50} backgroundColor='rgb(34, 166, 240)'
                  fontSize={25} color='rgb(255, 255, 255)' placeHolder='Login' />
                </Link>
              </div>
          </div>
      </>
    );
  }
}

export default LandingPage;

