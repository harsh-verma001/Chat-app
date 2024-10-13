import React from "react";
import "./RightSidebar.css";
import assets from "../../assets/assets";
import { logout } from "../../config/firebase";
const RightSidebar = () => {
  return (
    <>
      <div className="rs">
        <div className="rs-profile">
          <img src={assets.profile_img} alt="" />
          <h3>
            harsh verma <img className="dot" src={assets.green_dot} alt="" />
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <hr />
        <div className="rs-media">
          <p>media</p>
          <div>
            <img src={assets.pic1} alt="" />
            <img src={assets.pic2} alt="" />
            <img src={assets.pic3} alt="" />
            <img src={assets.pic4} alt="" />
          </div>
        </div>
        <button onClick={() => logout()}>Log out</button>
      </div>
    </>
  );
};

export default RightSidebar;
