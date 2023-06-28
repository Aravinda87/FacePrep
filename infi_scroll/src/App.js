import axios from "axios";
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect, useState } from 'react';
import Home from './Home';
import Login from "./Login";


const App = () => {

  return (
    
    <Router>
       <Routes>
       <Route path="/" element={<Login/>}/>
     <Route path="/home" element={<Home/>}/>
     </Routes>
     </Router>
  );
};

export default App;