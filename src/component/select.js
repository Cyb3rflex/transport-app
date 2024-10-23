import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Payment from './payment';
import { Link } from 'react-router-dom';
import graphix from "../images/graphix.png";
import "./select.css"
import commercial from "../images/commercial.jpg"
const select = () => {
  return (
    <div id='select'>
        <p id='vehicle'>select a vehicle</p>
        <div id='g'>
            <img id='luxury' src={graphix} alt="" />
           <div>
              <p>luxury car</p>
              <p>booking fare: #8,000</p>
           </div>
           <input type="checkbox" />
        </div>
        <div id='c'>
            <img id='commercial' src={commercial} alt="" />
           <div>
              <p>commercial car</p>
              <p>booking fare: #5,000</p>
           </div>
           <input type="checkbox" />
        </div>
         
      <button id='direction'>
        <Link id='dth' to="/payment">pay now</Link>
        
      </button>
    </div>
  )
}

export default select