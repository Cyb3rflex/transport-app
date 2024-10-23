import React from 'react'
import Table from "../component/Table"
// import Sidebar from './sidebar'
import icon from "../images/star.jpg";
import graphic from "../images/dashboard.png"
import visual from "../images/Vector.jpg"
import frame from "../images/setting.png"

import gallery from "../images/gallery.jpg"
import design from "../images/support.jpg"
// import note from "../images/notification.jpg"

import { Link } from 'react-router-dom';
import set from "../images/set.jpg"
import "./Myrides.css"
import note from "../images/notification.jpg"

const Myrides = () => {
  return (            
    <div id='combine'>
      <div id='sidebar'>
           <div id='dash'>
              <img id='src' src={gallery} alt="" />
              <div id='names'>
                 <h4>jacob</h4>
                 <p id='phrase'>my account</p>
              </div>
           </div>
           <div id='rating'>
             <div id='pase'>
               <img id='alt' src={icon} alt="" />
               <p>5.00 rating</p>
            </div>
            <div id='dashboard'>
              <img id='alt' src={graphic} alt="" />
              <Link id='bod' to="/dashboard">Dashboard</Link>
            </div>
            <div id='myRide'>
             <img id='alt' src={visual} alt="" />
             <Link id='my' to="/my-rides">My Rides</Link>
           </div>
           <div id='setting'>
             <img id='alt' src={frame} alt="" />
             <Link id='se' to="/profile">Settings</Link>
           </div>
           <div id='support'>
             <img id='alt' src={design} alt="" />
             <Link id='sup' to="/support">Support</Link>
           </div>
          </div>
        </div>
        <div id='table'>
            <div id='rate'>
                <h4>ride history</h4>
                <img id='no' src={note} alt="" />
            </div>
            <div>
                <p>Active ride</p>
            <Table/>
            </div>
            <div>
                <p>Previous ride</p>
            <Table/>
            </div>
           
        </div>
    </div>
    )
  
}

export default Myrides;