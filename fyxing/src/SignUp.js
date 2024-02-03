import React from 'react';
import ReactDOM from 'react-dom/client';
import "./SignUp.css";
import { InputBox, PasswordBox, Button } from "./components v1.2.1";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
    <div className='signupfont'>
      
      <div className="bg-img"></div>

      <div className='signupgreetings'>
        <h2 className='signupwelcome'>Welcome</h2>
        <h2>We're Excited to have you here!</h2>
      </div>

      <form>
        
        <div className="fullname">
          <h3>Full Name :</h3>
          <InputBox className='fullname-ib' width = {325} height = {50} backgroundColor = 'rgb(0, 0, 0)'
              fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'Your full name' autoComplete = 'on' />
        </div>

        <div className="email">
          <h3>Email ID :</h3>
          <InputBox className='email-ib' width = {325} height = {50} backgroundColor = 'rgb(0, 0, 0)'
              fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'Your email' autoComplete = 'on' />
        </div>
        <div className="phno">
          <h3>Phone Number  :</h3>
          <InputBox className='phno-ib' width = {325} height = {50} backgroundColor = 'rgb(0, 0, 0)'
              fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'Your phone number' autoComplete = 'on' />
        </div>
        
        <div className="uname">
          <h3>User Name :</h3>
          <InputBox className='phno-ib' width = {325} height = {50} backgroundColor = 'rgb(0, 0, 0)'
              fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'Your desired username' autoComplete = 'on' />
        </div>

        <div className="state">
          <h3>State :</h3>
          <InputBox className='state-ib' width = {325} height = {50} backgroundColor = 'rgb(0, 0, 0)'
              fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'Your state' autoComplete = 'on' />
        </div>

        <div className="password">
          <h3>Password :</h3>
          <PasswordBox className='password-pb' width = {325} height = {50} backgroundColor = 'rgb(0, 0, 0)'
              fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'Enter a password' autoComplete = 'off' />
        </div>
        
        <div className="signupincode">
          <h3>Pincode :</h3>
          <InputBox className='pincode-ib' width = {325} height = {50} backgroundColor = 'rgb(0, 0, 0)'
              fontSize = {15} color = 'rgb(255, 255, 255)' placeHolder = 'Your postal code' autoComplete = 'on' />
        </div>
        
        <div className="signup">
          <Link to ="/login">

          <Button className='signup-b' width={325} height={60} backgroundColor='rgb(34, 166, 240)'
            fontSize={30} color='rgb(255, 255, 255)' placeHolder='SIGN UP!' />
            </Link>
        </div>

        <div className="signin">
          <Link to ="/login">
            <a href="#">Have an account? Login Instead</a>
          </Link>
        </div>
    
      </form>
    
    </div>
    </>
  );
}

export default Register;