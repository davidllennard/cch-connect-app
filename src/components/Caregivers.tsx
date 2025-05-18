"use client"

import type React from "react"
import BackButton from "./BackButton"

interface CaregiversProps {
  onBack: () => void
}

const Caregivers: React.FC<CaregiversProps> = ({ onBack }) => {
  return (
    <div className="page-container">
      <BackButton onClick={onBack} />
      <div className="page-content">
        <h2>My Caregivers</h2>

        <div className="section">
          <h3>Primary Caregiver</h3>
          <div className="team-member">
            <div className="avatar">JD</div>
            <div className="details">
              <h4>John Davis</h4>
              <p>Spouse</p>
              <div className="contact-options">
                <button className="contact-button">Call</button>
                <button className="contact-button">Message</button>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Additional Caregivers</h3>
          <div className="team-member">
            <div className="avatar">EM</div>
            <div className="details">
              <h4>Emily Miller</h4>
              <p>Daughter</p>
              <div className="contact-options">
                <button className="contact-button">Call</button>
                <button className="contact-button">Message</button>
              </div>
            </div>
          </div>
          <div className="team-member">
            <div className="avatar">RW</div>
            <div className="details">
              <h4>Robert Wilson</h4>
              <p>Brother</p>
              <div className="contact-options">
                <button className="contact-button">Call</button>
                <button className="contact-button">Message</button>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Caregiver Resources</h3>
          <div className="resource-list">
            <div className="resource-item">
              <h4>Caregiver Support Group</h4>
              <p>Meets every Tuesday at 7:00 PM</p>
              <button className="view-button">Details</button>
            </div>
            <div className="resource-item">
              <h4>Respite Care Services</h4>
              <p>Information on local respite care options</p>
              <button className="view-button">View</button>
            </div>
          </div>
          <button className="add-button">Add Caregiver</button>
        </div>
      </div>
    </div>
  )
}

export default Caregivers
