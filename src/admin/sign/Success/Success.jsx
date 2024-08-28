import React from 'react'
import "./Success.css";
import check from "../../../assets/check.png"

const success = () => {
  return (
    <div className="success-container">
      <div className="success-wrapper font-dm-sans">
        <img style={{width: 120}} className="mb-6" src={check} alt="" />
        <h2 className="mb-6">Verification Successful</h2>
        <p className="mb-12">Your account has been successfully created.</p>
        <button className="font-open-sans btn-success btn-success-effect">Login to account</button>
      </div>
    </div>
  )
}

export default success;

