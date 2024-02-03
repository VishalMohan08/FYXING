import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from './LandingPage';
import Home from './home';
import Page from './login';
import Mobiles from './mobile1';
import Lapop from './laptop';
import Console from './console';
import Register from './SignUp';
import Repair from './repair';
import Lenovo from './lenovo';
import Forgot from './forgot';
import MobileRepair from './MobileRepair';
import Contact from './ContactDetails';
import Confirm from './confirm';
import Support from './support';
import ASUS from './ASUSdeviceform';
import DELL from './DELLdeviceform';
import HP from './HPdeviceform';
import ACER from './ACERdeviceform';
import XBOX from './XBOX';
import PS5 from './PS5';
import NINTENDO from './NINTENDO';



export default function RouteApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/login" element={<Page/>}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/mobile1" element={<Mobiles/>}/>
                <Route path="/laptop" element={<Lapop/>}/>
                <Route path="/console" element={<Console/>}/>
                <Route path="/signup" element={<Register/>}/>
                <Route path="/repair" element={<Repair/>}/>
                <Route path="/support" element={<Support/>}/>
                <Route path="/lenovo" element={<Lenovo/>}/>
                <Route path="/forgot" element={<Forgot/>}/>
                <Route path="/MobileRepair" element={<MobileRepair/>}/>
                <Route path="/ContactDetails" element={<Contact/>}/>
                <Route path='/confirm' element={<Confirm/>}/>
                <Route path='/ASUSdeviceform' element={<ASUS/>}/>
                <Route path='/DELLdeviceform' element={<DELL/>}/>
                <Route path='/HPdeviceform' element={<HP/>}/>
                <Route path='/ACERdeviceform' element={<ACER/>}/>
                <Route path='/XBOX' element={<XBOX/>}/>
                <Route path='/PS5' element={<PS5/>}/>
                <Route path='/NINTENDO' element={<NINTENDO/>}/>
                

            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteApp/>);