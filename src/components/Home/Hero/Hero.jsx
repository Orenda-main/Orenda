import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Hero.css";
import faces from "../../../assets/faces.png";
import Icon from "../../../assets/Icon.png"
import user from "../../../assets/user.png"
import pluswhiter from "../../../assets/plus_white.png"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div className="texts">
            <h1 className="">
              Online Psychiatry Practice Prescription Management and Talk
              Therapy
            </h1>
            <p className="font-dm-sans">Providing Mental Health Care with Convenience.</p>
            <button><a target="_blank" href="https://www.zocdoc.com/wl/orendapsych/search?address=10016&after_5pm=false&before_10am=false&day_filter=AnyDay&dr_specialty=405&filters=%7B%7D&gender=-1&insurance_carrier=-1&insurance_plan=-1&language=-1&offset=0&parentSearchRequestId=5ad6e11b-e197-4dc6-8576-3101647da281&ppsSelectionId=f697582c-2de0-4006-ab39-53b075bb2ef4&reason_visit=493&searchOriginator=SearchBar&searchQueryGuid=8d62bd4a-fe91-43fa-bbec-391fc97eecdb&searchType=specialty&search_query=Adult+Psychiatric+%26+Mental+Health+Nurse+Practitioner&sees_children=false&sort_type=Default&visitType=inPersonAndVirtualVisits">Book Now</a></button>
          </div>
          <div className="items">
            <div className="items-right">
              <div className="items-right-contents">
                <p className="font-open-sans">70 <img src={pluswhiter} alt="" style={{ width: 15 }} /></p>
                <img src={Icon} alt="" style={{width:13}}/>
              </div>
              <p>Providers</p>
              <img src={faces} alt="" style={{width: 200}}/>
            </div>
            <div className="items-left">
              <div className="items-left-contents">
                <div className="items-left-img">
                  <p>20k <img src={pluswhiter} alt="" style={{ width: 15 }}/></p>
                </div>
                <img src={user} alt="" style={{ width: 45 }} />
              </div>
              <p style={{fontSize: 20}}>Lives changed</p>
            </div>
          </div>

          
          <div className="items-mobile">
            <div className="it-mobile-left">
              <div><h1 > 70 <span>+</span></h1> <img src={Icon} alt="" /></div>
              <p>Providers</p>
              <img src={faces} alt="" />
            </div>
            <div className="line"></div>
            <div className="it-mobile-right">
              <h1>16k <span>+</span></h1>
              <p>Lives Changed</p>
              <img src={user} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="washpark"><LazyLoadImage effect = 'blur' height = "100%" src={homepagecrop} alt=""  className="w-full h-full"/></div> */}
      </div>
    </div>
  );
};

export default Hero;
