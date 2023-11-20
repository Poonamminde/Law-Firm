import React from "react";
import Business from "../../assets/images/business.svg";
import Partnership from "../../assets/images/partnership.svg";
import RealEstate from "../../assets/images/realestate.svg";
import Business2 from "../../assets/images/business2.svg";
import Landlord from "../../assets/images/landlord.svg";
import ElderAbuse from "../../assets/images/elderabuse.svg";
import "./index.css";

const index = () => {
  return (
    <div>
      <h1 id="heading">Area of Practices</h1>
      <div className="grid-container">
        <div>
          <div className="grid-image">
            <img src={Business} alt="business" className="image" />
            <span className="image-lable">Business Law</span>
          </div>
          <div className="grid-image">
            <img src={Partnership} alt="partnership" className="image" />
            <span className="image-lable">Partnership Law</span>
          </div>
        </div>
        <div>
          <div className="grid-image">
            <img src={RealEstate} alt="realestate" className="image" />
            <h1 className="image-lable">Real Estate Law</h1>
          </div>
          <div className="grid-image">
            <img src={Business2} alt="business" className="image" />
            <h1 className="image-lable">Business Law</h1>
          </div>
        </div>
        <div>
          <div className="grid-image">
            <img src={Landlord} alt="landlord" className="image" />
            <h1 className="image-lable">Landlord Law</h1>
          </div>
          <div className="grid-image">
            <img src={ElderAbuse} alt="elderAbuse" className="image" />
            <h1 className="image-lable">Elder Abuse Law</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
