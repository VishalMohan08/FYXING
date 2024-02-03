import React from "react";
import './confirm.css';
import './design.css';
import './mailbox.css';

function Confirm(){
  let len1 = 3;
    let len2 = 2;
    let len3 = 1;
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    let result = ' ';
    const charactersLength = char.length;
    const numberLength = number.length;
    for(let i=0; i<len2; i++){
        result+=
        char.charAt(Math.floor(Math.random()*charactersLength));
    }
    for(let i=0; i<len2; i++){
        result+=
        number.charAt(Math.floor(Math.random()*numberLength));
    }
        for(let i=0; i<len3; i++){
            result+=
            char.charAt(Math.floor(Math.random()*charactersLength));
        }
        for(let i=0; i<len3; i++){
            result+=
            number.charAt(Math.floor(Math.random()*numberLength));
        }
        for(let i=0; i<len2; i++){
            result+=
            char.charAt(Math.floor(Math.random()*charactersLength));
        }
        for(let i=0; i<len1; i++){
            result+=
            number.charAt(Math.floor(Math.random()*numberLength));
        }
        for(let i=0; i<len2; i++){
            result+=
            char.charAt(Math.floor(Math.random()*charactersLength));
        }
        for(let i=0; i<len3; i++){
            result+=
            char.charAt(Math.floor(Math.random()*charactersLength));   
        }
        for(let i=0; i<len3; i++){
            result+=
            number.charAt(Math.floor(Math.random()*numberLength));
        }
    return(
        <>
        <div className="body2"></div>
        <div class="animation-container">
          <div className="Confirm">

            <p className="h3">REPAIR ID:</p>
            <p className="h4">{result}</p>
            
            <br></br>
          </div>
         <div class = "border10">
            <p id = "target"></p>
         </div>
         <div class="letter-image">
            <div class="animated-mail">
              <div class="back-fold"></div>
              <div class="letter">
                <div class="letter-border"></div>
                <div class="letter-title"></div>
                <div class="letter-context"></div>
                <div class="letter-stamp">
                  <div class="letter-stamp-inner"></div>
                </div>
              </div>
              <div class="top-fold"></div>
              <div class="body"></div>
              <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
          </div>
          <p className="h1">Your Request is Booked</p>
    
          
    </div>
        </>
    )
}

export default Confirm;