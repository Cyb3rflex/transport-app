import React from 'react'
import icon from "../images/star.jpg";
import graphic from "../images/dashboard.png"
import visual from "../images/Vector.jpg"
import frame from "../images/setting.png"
import gallery from "../images/gallery.jpg"
import design from "../images/support.jpg"
import { Link } from 'react-router-dom';
import "./payment.css";
import check from "../images/check.jpg"
import caution from "../images/caution.jpg"

const Payment = () => {
  return (
    <div id='both'>
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
         <div id='heade'>
            <div id='one'>
              <p id='number'>1</p>
              <p>personal details</p>
            </div>  
            <div id='too'>
              <p id='number'>2</p>
              <p>payment</p>
            </div>
            <div id='three'>
              <p id='numer'>3</p>
              <p>complete</p>
            </div>  
          </div>
          <p>checkout</p>
           <div id='pas'>
            <div>
              <div id='checkout'>
                 <img id='at' src={check} alt="" />'
                 <p id='is'>your book is on hold <br />  we hold your booking until oct 20, 1:00am.if your reserve change, we will get back to you</p>
             </div>
             <div id='book'>
                <p>booking information</p>
                <div >
                  <label id='label' >
                  <p>share a ride</p>
                    <input 
                    id='alone'
                    type="checkbox" 
                    />
                  </label>
                </div>
                <div >
                  <label id='labels' >
                    <p>ride alone</p>
                    <input 
                     id='box'
                     type="checkbox" 
                    />
                  </label>
                </div>
                <div id='tab'>
                  <div>
                    <p id='full'>full name</p>
                    <p>ahmed joe ali</p>
                  </div>
                  <div>
                    <p id='full'>email</p>
                    <p>ahmedjoeali@gmail.com</p>
                  </div>
                  <div>
                    <p id='full'>phone number</p>
                    <p>+2347065974390</p>
                  </div>
                </div>
               </div>
              <div id='details'>
                <div id='payment'>
                   <h4>payment details</h4>
                   <p>please fill out the form below.enter your card accout details</p>
                </div>
                 <div>
                  <label id='card'>
                    card number
                    <input
                    id='of' 
                    type="number" 
                    placeholder='1234_2133_9832_3200'
                    />
                  </label>
                 </div>
                 <div id='hold'>
                    <div>
                      <label id='cad'>
                        expire date
                        <div id='put'>
                        <input 
                          id='bord'
                          type="number" 
                        />
                        <input 
                          id='bord'
                          type="number" 
                        />
                        </div>
                     
                      </label>
                    </div>
                    <div id='cvv'>
                      <label id='cvc'>
                        CVC/CVV
                        <div id='inp'>
                        <input
                        id='tye' 
                          type="text" 
                        />
                        </div>
                       
                      </label>
                    </div>
                 </div>
              </div> 
              <div id='policy'>
                 <img src={caution} alt="" />
                 <div>
                  <h2 id='cancelation'>cancelation policy</h2>
                  <p id='can'>
                    At Kwara Ride we understand that plancan change
                    unexpectedly.That why we've created our <br/>
                    cancelation policy to provide youn with flexibility
                    and peace of mind.When you book a car with <br/>
                    us,you have the freedom to modify or cancel your reservation
                    without incuring any cancellation <br/>
                    fees up to 12hours/day before your scheduled pick-up time
                  </p>
                 </div>
              </div>
            </div>
            <div>
              <div id='twice'>
                <p id='summary'>summary</p>
                <div id='pick'>
                  <div id='up'>
                    <p>pick-up location</p>
                    <p>pick-up date</p>
                 </div>
                 <div >
                    <p>polygate-ilorin mall</p>
                    <p>mon,14 oct 2024-10:00</p>
                 </div>
               
                </div>
                <p>price details</p>
                <div id='transport'>
                  <div id='up'>
                    <p>transport fare</p>
                    <p>duration</p>
                    <p>tax</p>
                  </div>
                  <div>
                    <p>#5,000</p>
                    <p>1 hour</p>
                    <p>#0</p>
                 </div>
                </div>
               <div id='total'>
                  <p>total</p>
                  <p>#5,000.00</p>
               </div>
              
             </div>
             <div id='condition'>
               <div>
                 <label id='this'>
                  <input 
                   type="checkbox" 
                   />
                   <p>
                    By clicking this,i agree to KWARA RIDE TERMS <br/>
                    & condition and privacy policy
                   </p>
                 </label>
               </div>
               <button id='for'>
                pay for my booking
               </button>
             </div>
            </div>
          
           
          </div>
          
        </div>
    </div>
  )
}

export default Payment