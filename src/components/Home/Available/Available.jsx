import React from "react";
import "./Available.css";
import newyork from "../../../assets/newyork.png";
import newjersey from "../../../assets/newjersey.png";
import massachusetts from "../../../assets/massachusetts.png";
import connecticut from "../../../assets/connecticut.png";
import newyorkmob from "../../../assets/newyork-mob.png";
import massachusettsmob from "../../../assets/massachusetts-mob.png";
import connecticutmob from "../../../assets/connecticut-mob.png";
import newjerseymob from "../../../assets/newjersey-mob.png";

const Available = () => {
  return (
    <div className="available-container">
      <div className="available-wrapper">
        <h1>Available Locations</h1>
        <p>We currently serve in these 4 states</p>
        <div className="avail-img">
          <picture className="relative">
            <source media="(min-width: 451px)" srcset={newyorkmob} />
            <img src={newyorkmob} alt="newyork" />
            <span className="absolute left-0 bg-white bg-opacity-70 bottom-[6%] rounded-r-[0.47rem] font-bold ~ps-[0.62rem]/4 ~w-[8.37rem]/[9.6rem] py-2 text-black ~text-base/lg font-dm-sans">New York</span>
          </picture>
          <picture className="relative">
            <source media="(min-width: 451px)" srcset={connecticutmob} />
            <img src={connecticutmob} alt="connecticut" />
            <span className="absolute left-0 bg-white bg-opacity-70 bottom-[6%] rounded-r-[0.47rem] font-bold ~ps-[0.62rem]/4 ~w-[8.37rem]/[9.6rem] py-2 text-black ~text-base/lg font-dm-sans ">Connecticut</span>
          </picture>
          <picture className="relative">
            <source media="(min-width: 451px)" srcset={newjerseymob} />
            <img src={newjerseymob} alt=" New Jersey" />
            <span className="absolute left-0 bg-white bg-opacity-70 bottom-[6%] rounded-r-[0.47rem] font-bold ~ps-[0.62rem]/4 ~w-[8.37rem]/[9.6rem] py-2 text-black ~text-base/lg font-dm-sans">New Jersey</span>
          </picture>
          <picture className="relative">
            <source media="(min-width: 451px)" srcset={massachusettsmob} />
            <img src={massachusettsmob} alt="Massachusetts" />
            <span className="absolute left-0 bg-white bg-opacity-70 bottom-[6%] rounded-r-[0.47rem] font-bold ~ps-[0.62rem]/4 ~w-[8.6rem]/[9.6rem] py-2 pr-20 text-black ~text-base/lg font-dm-sans">Massachusetts</span>
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Available;
