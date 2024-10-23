// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./component/signin";
import SignUp from "./component/signup";
import Profile from "./component/profile";
import Dashboard from "./component/dashboard";
import Layout from "./component/layout";
import Sidebar from "./component/sidebar";
import MapComponent from "./component/map";
import Myrides from "./component/Myrides";
import Payment from "./component/payment";
import Select from "./component/select";
import Setting from "./component/setting";
function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/"  index element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="profile" element={<Profile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="mapcomponent" element={<MapComponent />} /> 
          <Route path="/my-rides" element={<Myrides />} />
          <Route path="payment" element={<Payment/>}/>
          <Route path="select" element={<Select/>}/>
          <Route path="setting" element={<Setting/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
