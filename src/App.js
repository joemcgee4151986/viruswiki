import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Mainsection from './pages/mainsection/Mainsection';
import Mainsectiontwo from './pages/mainsectiontwo/Mainsectiontwo';
import Sidebar from "./pages/sidebar/Sidebar";
import About from './pages/about/About';



export default function App() {
  return (
   
    <Router>
      
      <div>
        {/*
          A <Routes> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Routes> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
        <Route  path="/Sidebar" element={<Sidebar />} /> 
        <Route  path="/Mainsection" element={<Mainsection />} /> 
        <Route  path="/Mainsectiontwo" element={<Mainsectiontwo />} /> 
        <Route  path="/About" element={<About/>} /> 
        </Routes>
        
      </div>
      
    </Router>
    
  );
}