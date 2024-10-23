import React from 'react'
import { Link } from 'react-router-dom';
import gallery from "../images/gallery.jpg"; 
import icon from "../images/star.jpg"; 
import graphic from "../images/dashboard.png"; 
import visual from "../images/Vector.jpg"; 
import frame from "../images/setting.png"; 
import design from "../images/support.jpg"; 

const Sidebar = () => {
  return (
    <div>
<div id='sidebar'>
           <div id='dash'>
              <img id='src' src={gallery} alt="" />
              <div id='names'>
                 <h4>jacob</h4>
                 <p id='phrase'>my account</p>
              </div>
           </div>
           <div id='pages'>
      <div id='icon'>
        <img id='alt' src={icon} alt="" />
        <p>5.00 rating</p>
      </div>
      <div id='board'>
        <img id='alt' src={graphic} alt="" />
        <Link to="/">Dashboard</Link>
      </div>
      <div id='visual'>
        <img id='alt' src={visual} alt="" />
        <Link to="/my-rides">My Rides</Link>
      </div>
      <div id='frame'>
        <img id='alt' src={frame} alt="" />
        <Link to="/settings">Settings</Link>
      </div>
      <div id='design'>
        <img id='alt' src={design} alt="" />
        <Link to="/support">Support</Link>
      </div>
    </div>
        </div>


    </div>
  )
}

export default Sidebar