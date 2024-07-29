import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero/Hero'
import Network from '../Network/Network'
import Treat from '../../components/About/Treat/Treat'
import Meet from './Meet/Meet'
import Available from './Available/Available'
import Handle from './Handle/Handle'
import Journey from './Journey/Journey'
import Location from './Location/Location'
import Frequent from './Frequent/Frequent'
import Providers from '../OurTeam/Providers'
import Phead from './Phead/Phead'
// import Hear from './Hear/Hear'
import HearClients from './HearClients/HearClients'
import AppointmentScheduling from './AppointmentScheduling/AppointmentScheduling'

const Appointment = {
  heading: "Appointment Scheduling Disclaimer",
  title1: "Please note that all appointments are confirmed on a first-come, first-served basis. While we do our utmost best to accommodate your preferred schedule and provider, availability may vary due to high demand.",
  title2: "Our dedicated support team is always here to assist you in finding the right provider and scheduling a convenient appointment time. We are committed to ensuring that your intake process is smooth and that you receive the care you need in a timely manner.",
  title3: "If you encounter any scheduling conflicts or have specific needs, please don't hesitate to reach out to our support team."
};

const Home = () => {
    return (
        <div className="home_container mx-auto">
            <div className="home_wrapper mx-auto">
                <Hero/>
                <Network/>
                <AppointmentScheduling
                  app_heading={Appointment.heading}
                  app_tittle1={Appointment.title1}
                  app_tittle2={Appointment.title2}
                  app_tittle3={Appointment.title3}
                />
                <Phead/>
                <Providers itemsPerPage={10} numberOfColumns={5} forHome={true}/>
                <Meet/>
                <Treat/>
                <Handle/>
                <Available/> {/* <Hear/> */}
                <HearClients/>
                <Journey/>
                <Location/>
                <Frequent/>
            </div>
        </div>
    )
}

export default Home
