import React from 'react';
import "./Mailbox.css";
import mailcheck from "../../../assets/mailbox-check.png";


const mailbox = () => {
  return (
    <div className="mailbox-container">
      <div className="mailbox-wrapper font-dm-sans align-middle items-center">
        <img style={{width: 120}} className="pb-4" src={mailcheck} alt="" />
        <h2 className="pb-6 font-dm-sans font-bold ">Check the mailbox</h2>
        <p className="pb-[3.37rem]">Click on the link sent to <span> mikeross@gmail.com</span> to verify your account.</p>

        <span className='pb-[1.5rem]'><p>Didn’t receive an email?</p></span>
        <a href=""><span className="text-orenda-purple">Resend confirmation email</span></a>
      </div>
    </div>
  )
};

export default mailbox;