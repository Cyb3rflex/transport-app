import  {useState} from 'react'
import images from "../images/image.jpg"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import './profile.css'
import gallery from "../images/gallery.jpg";
import image2 from "../images/image2 - Copy.png";
import visual from "../images/Vector.jpg";
import design from "../images/support.jpg";
import icon from "../images/star.jpg";
import frame from "../images/setting.png"
import graphic from "../images/dashboard.png";
import mark from "../images/mark.jpeg";
import calendar from "../images/calendar.png";
import person from "../images/person.png";
import group from "../images/Group.jpg";
import call from "../images/call.jpg";
import cancel from "../images/cancel.jpg"
import car from "../images/Frame.jpg";
import active from "../images/Active.jpg"
import Dashboard from './dashboard';
import MapComponent from './map';


const Profile = () => {

  return (
    <div id='space'>
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

      <div>
         <div id='ride'>
            <h1>kwara ride</h1>
            <img id='image' src={images} alt="" />
         </div>
        <div>
        <div id='page'>
          <h4 id='test'>profile picture</h4>
          <div id='two'>
          <img id='gallery' src={gallery} alt="" />
          <p id='paragraph'>johnson taiwo <img id='alt' src={mark} alt=""/> <span id='active'>active</span>
            <br /> kwara, ilorin.</p>
          </div>
          <div id='symbol'>
            <div id='phase'>
               <img id='alt' src={calendar} alt="" />
               <p>joined oct 2024</p>
            </div>
            <div id='phase'>
             <img id='alt' src={person} alt="" />
             <p>Attended 7 days ago</p>
            </div>
          </div>
          <div id='bunch'>
            <div id='group'>
              <img src={group} alt="" />
              <p>johnsontaiwo@gmail.com</p>
            </div>
            <div id='call'>
              <img src={call} alt="" />
              <p>+234 7056879042</p>
            </div>
          </div>
          <h4 id='program'>programs</h4>
          <div id='after'>
            <div>
              <img id='active' src={active} alt="" />
            </div>
            <div >
             <img id='cancel' src={cancel} alt="" />
            </div>
          </div>
        <div id='menu'>
          <p id='activity'>activity</p>
          <p>payment</p>
          <p>attendance history</p>
          <p>documents</p>
          <p>family(4)</p>
        </div>
         <div>
          <img id='car' src={car} alt="" />
         </div>
        </div>
        </div>
      </div>
     

        
    </div>
  )
}

export default Profile;