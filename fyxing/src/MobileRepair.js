import React from 'react';
import './MobileRepair.css';
import { DropDown, InputBox, TextBox, Button } from './components v1.2.1';
import { Link } from 'react-router-dom';
import logo from './logo2.png';
class MobileRepair extends React.Component
{
  render(){
    return (
      <>
      <div className='bg'>
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
        <div className="box">
          
          <div className='content'>

            <div className='mobile-service'>
              <br />
              <h1>Mobile Phone Service Request</h1>
              <h3>Choose your mobile phone</h3>
            </div>

            <div className='brand'>
              <h4>Brand</h4>
              <DropDown className = 'brand-dd' width = {325} 
                height = {50} fontSize = {15} color = 'rgb(243, 236, 236)' 
                backgroundColor = 'rgba(0, 0, 0,0.7)' placeHolder = 'Select a brand'
                options =  {[
                    'Select a brand',
  
                    { label: 'Google', value: 'Google' },
                    { label: 'Samsung', value: 'Samsung'},
                    { label: 'OnePlus', value: 'OnePlus'},
                    { label: 'Motorola', value: 'Motorola'},
                    { label: 'Nokia', value: 'Nokia'}
                ]} />
            </div>

            <div className='model'>
              <h4>Model</h4>
              <DropDown className = 'model-dd' width = {325} 
                height = {50} fontSize = {15} color = 'rgb(243, 236, 236) ' 
                backgroundColor = 'rgba(0, 0, 0,0.7)' placeHolder = 'Select a model'
                options =  {[
                    'Select a model',
                    { label: 'Pixel 7', value: 'Pixel 7' },
                    { label: 'Galaxy S22', value: 'Galaxy S22'},
                    { label: 'OnePlus 10R', value: 'OnePlus 10R'},
                    { label: 'Motorola One', value: 'Motorola One'},
                    { label: 'Nokia Lumia', value: 'Nokia Lumia'}
                ]} />
            </div>
            
            <div className='issue'>
              <h4>Issue</h4>
              <DropDown className = 'issue-dd' width = {325} 
                height = {50} fontSize = {15} color = 'rgb(243, 236, 236)' 
                backgroundColor = 'rgba(0, 0, 0,0.7)' placeHolder = 'Where do you have an issue'
                options =  {[
                    'Where do you have an issue',
                    { label: 'Display', value: 'Display'},
                    { label: 'Battery', value: 'Battery' },
                    { label: 'Speakers', value: 'Speakers'},
                    { label: 'Camera', value: 'Camera'},
                    { label: 'Charging Port', value: 'Charging Port'},
                    { label: 'Other', value: 'Other'}
                ]} />
            </div>

            <div className='IMEI'>
              <h4>IMEI Number</h4>
              <InputBox className='imei-ib' width = {325} height = {50} backgroundColor = 'rgba(0, 0, 0,0.7)'
                fontSize = {15} color = 'rgb(243, 236, 236) ' placeHolder = 'Enter the IMEI Number' autoComplete = 'off' />
            </div>

            <div className='issue-desc'>
              <h4>Enter a detailed description of the issue</h4>
              <TextBox className='issue-desc-tb' rows = {6} cols = {35} backgroundColor = 'rgba(0, 0, 0,0.7)'
                fontSize = {15} color = 'rgb(243, 236, 236)' placeHolder = 'Issue description' />
            </div>
              
            <div className='media'>
              <h4>Upload an image or video if any </h4>
              <input className='media-i' type='file' accept='audio/* | video/*' />
            </div>

            <div className='submit'>
              <Link to ="/ContactDetails">

              <Button className='submit-b' width={325} height={50} backgroundColor='rgb(34, 166, 240)'
                fontSize={25} color='rgb(255, 255, 255)' placeHolder='CONTINUE' />
              </Link>
            </div>

          </div>
          
        </div> 
        </form>
        </div>
      </>
    );
  }
}

export default MobileRepair;