import React from 'react';
import gallery from "../images/gallery.jpg"
import "./dashboard.css"
import icon from "../images/star.jpg";
import graphic from "../images/dashboard.png"
import visual from "../images/Vector.jpg"
import frame from "../images/setting.png"
import design from "../images/support.jpg"
import note from "../images/notification.jpg"
import set from "../images/set.jpg"
import green from "../images/Green.jpg"
import MapComponent from './map';
import arrow from "../images/arrow.jpg"
import Table from './Table';
import { Link } from 'react-router-dom';
import Myrides from './Myrides';
import Payment from './payment';
// import Dashboard from "../component/dashboard"


const Dashboard = () => {
  return (
    <div id='body'>
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
           <Link id='bod'  className='gg' to="">Dashboard</Link>
       </div>
       <div id='myRide'>
          <img id='alt' src={visual} alt="" />
          <Link id='my' className='gg' to="/my-rides">My Rides</Link>
        </div>
        <div id='setting'>
          <img id='alt' src={frame} alt="" />
          <Link id='se' className='gg' to="/profile">Settings</Link>
        </div>
        <div id='support'>
          <img id='alt' src={design} alt="" />
          <Link id='sup' className='gg' to="/support">Support</Link>
        </div>
    </div>
        </div>

        <div id='main'>
           <div id='top'>
              <p>dashboard</p>
             <div id='side'>
                <p id='eng'>eng</p>
                <Link to="/setting"><img id='no'  src={note} alt="" /></Link>
                
                <img id='set' src={set} alt="" />
              </div>
           </div>
           <div id='id'>
              <div>
                 <p>where to</p>
                 <div id='pickup'>
                   <div>
                       <p>
                         pickup location
                       </p>
                       <input 
                        id='location'
                        type="text" 
                        placeholder='Auto fill current location'
                     />
                    </div>
                    <div>
                     <p>destination</p>
                     <input 
                     type="text" 
                     id='destination' 
                     placeholder='ilorin mall'
                     />
                    </div>
                    <button id='pay'>
                       <Link id='ment' to="/select">book ride</Link>
                   </button>
                 </div>
               
              </div>
              <div>
                 <p>map indicator</p>
                 <MapComponent />
              </div>
           </div>
           <div id='history'>
           <div id='history_content'>
           <p>ride history</p>
            <div id='arrow'>
            <p>view full history</p>
            <img id='atl' src={arrow} alt="" />
            </div>
           </div>
           </div>
        <div>
           <div>
            <Table />
           </div>
        </div>
        </div>


    </div>
  )
}

export default Dashboard;