import React from "react";
import "./Journey.css";
import video from "../../../assets/video.png";
import support from "../../../assets/support.png";
import booking from "../../../assets/booking.png";
import undraw from "../../../assets/undraw.png";
import call from "../../../assets/call.png";
import text from "../../../assets/text.png";
import mail from "../../../assets/mail.png";
import callpurple from "../../../assets/callpurple.png";
import { Link } from "react-router-dom";
import AppointmentScheduling from "../AppointmentScheduling/AppointmentScheduling";

const Appointment = {
  heading: "Appointment Scheduling Disclaimer",
  title1: "Please note that all appointments are confirmed on a first-come, first-served basis. While we do our utmost best to accommodate your preferred schedule and provider, availability may vary due to high demand.",
  title2: "Our dedicated support team is always here to assist you in finding the right provider and scheduling a convenient appointment time. We are committed to ensuring that your intake process is smooth and that you receive the care you need in a timely manner.",
  title3: "If you encounter any scheduling conflicts or have specific needs, please don't hesitate to reach out to our support team."
};

const Journey = () => {
  return (
    <div className="journey-container">
      <div className="journey-wrapper">
        <h1>Your Journey with Orenda</h1>
        <div className="icon-cards">
          <div className="icon-prop">
            <div className="icon">
              <img src={booking} alt="" />
            </div>
            <h3>Book your first appointment</h3>
            <p>
              Call or text us to setup with a provider that suits you, at the
              time that works for you.
            </p>
          </div>
          <div className="icon-prop">
            <div className="icon">
              <img src={video} alt="" />
            </div>
            <h3>Meet with your provider</h3>
            <p>Connect with your provider over a video call.</p>
          </div>
          <div className="icon-prop">
            <div className="icon">
              <img src={support} alt="" />
            </div>
            <h3>Support when you need it</h3>
            <p>
              Get help outside from our support team and schedule follow-ups at
              your convenience.
            </p>
          </div>
        </div>
        <hr />
        <AppointmentScheduling
          app_heading={Appointment.heading}
          app_tittle1={Appointment.title1}
          app_tittle2={Appointment.title2}
          app_tittle3={Appointment.title3}
        />
        <div className="patient">
          <div className="new-patient">
            <img src={undraw} alt="" className="~w-[2.5rem]/[9rem]" />
            <h2>New Patient?</h2>
            <p>To schedule your first appointment;</p>
            <a href="tel:+1(347) 707-7735">
              <button className="one">
                <img src={callpurple} alt="" className="color-img" />
                Call
              </button>
            </a>
            <Link to="/our team"><button className="two">Book Online</button></Link>
          </div>
          <div className="existing-patient">
            <h2>Existing patient?</h2>
            <p>To schedule a follow-up appointment;</p>
            <a href="tel:+1(347) 707-7735">
              <button className="call">
                <img src={call} alt="" />
                Call
              </button>
            </a>
            <a href="sms:+13477077735">
              <button className="text">
                Text <img src={text} alt="" />
              </button>
            </a>
            <a href="mailto:admin@orendapsych.com">
              <button className="mail">
                Email <img src={mail} alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
