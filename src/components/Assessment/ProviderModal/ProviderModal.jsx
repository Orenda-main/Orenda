import React from 'react'
import close2 from '../../../assets/close2.png'
import './ProviderModal.css'

const ProviderModal = ({ onClose }) => {
  return (
    <div className="providermodal-container">
        <div className="providermodal-wrapper">
            <img src={close2} alt="" onClick={onClose}/>

            <h1>Choose your Provider</h1>
            <p>Based on your response, we recommend these providers who are a great match for you. You can check their profiles and book a meeting with your chosen provider. </p>
        </div>
    </div>
  )
}

export default ProviderModal