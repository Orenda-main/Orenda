import React from 'react'
import "./Password.css"
import reset from "../../../assets/reset-pass.png"

const Password = () => {
  return (
    <div className="password-container">
        <div className="password-wrapper">
            <img style={{width: 120}} className="mb-6" src={reset} alt="" />
            <h2 className="font-dm-sans mb-6">Password reset successful</h2>
            <p className="font-dm-sans mb-12">You can log into your account with your new password.</p>
            <a href=""><button className="font-open-sans btn-pass btn-pass-effect">Login to account</button></a>
        </div>
    </div>
  )
}

export default Password