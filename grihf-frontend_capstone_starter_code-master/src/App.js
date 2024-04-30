import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import Instant_Consultation from "./Components/Instant_Consultation/InstantConsultation";
import Notification from "./Components/Notification/Notification";
import Feedback from "./Components/ReviewForm/ReviewForm";
import ProfileCard from "./Components/ProfileCard/ProfileCard";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Landing_Page/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Sign_Up/>}/>
                <Route path="/instant-consultation" element={<Instant_Consultation/>}/>
                <Route path="/notification" element={<Notification/>}/>
                <Route path="/feedback" element={<Feedback/>}/>
                <Route path="/profile" element={<ProfileCard/>}/>
              </Routes>
            
        </BrowserRouter>
       
    </div>
  );
}

export default App;