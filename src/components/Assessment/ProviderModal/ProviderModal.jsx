import React from 'react'
import close2 from '../../../assets/close2.png'
import './ProviderModal.css'
import Providers from '../../OurTeam/Providers'

const ProviderModal = ({ onClose, isOpen }) => {
  return (
    <div className={`providermodal-container `} onClick={onClose}>
        <div className="providermodal-wrapper">
            <div className="providermodal-flex">
                <img src={close2} alt="" onClick={onClose} className='close'/>
                <div className="providermodal-text">
                    <h1>Choose your Provider</h1>
                    <p>Based on your response, we recommend these providers who are a great match for you. You can check their profiles and book a meeting with your chosen provider. </p>
                </div>
                {/* Providers filterd component will be here */}
                <Providers itemsPerPage={3} numberOfColumns={5} forHome={false}/>
                <button className='providermodal-btn'>See more providers</button>
            </div>
        </div>
    </div>
  )
}

export default ProviderModal