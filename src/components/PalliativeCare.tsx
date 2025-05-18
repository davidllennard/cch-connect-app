"use client"

import type React from "react"
import BackButton from "./BackButton"

interface PalliativeCareProps {
  onBack: () => void
}

const PalliativeCare: React.FC<PalliativeCareProps> = ({ onBack }) => {
  return (
    <div className="page-container">
      <BackButton onClick={onBack} />
      <div className="page-content">
        <h2>Palliative Care</h2>

        <div className="section">
          <h3>Your Palliative Care Team</h3>
          <div className="team-member">
            <div className="avatar">DM</div>
            <div className="details">
              <h4>Dr. Maria Lopez</h4>
              <p>Palliative Care Specialist</p>
              <button className="contact-button">Contact</button>
            </div>
          </div>
          <div className="team-member">
            <div className="avatar">JT</div>
            <div className="details">
              <h4>Jennifer Taylor</h4>
              <p>Pain Management Nurse</p>
              <button className="contact-button">Contact</button>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Pain Management</h3>
          <div className="pain-scale">
            <p>Current Pain Level: 3/10</p>
            <div className="scale-container">
              <div className="scale-fill" style={{ width: "30%" }}></div>
            </div>
            <button className="update-button">Update Pain Level</button>
          </div>
        </div>

        <div className="section">
          <h3>Symptom Management</h3>
          <ul className="symptom-list">
            <li>
              <span className="symptom-name">Nausea</span>
              <span className="symptom-status improved">Improved</span>
            </li>
            <li>
              <span className="symptom-name">Fatigue</span>
              <span className="symptom-status unchanged">Unchanged</span>
            </li>
            <li>
              <span className="symptom-name">Appetite</span>
              <span className="symptom-status improved">Improved</span>
            </li>
          </ul>
          <button className="view-button">Manage Symptoms</button>
        </div>
      </div>
    </div>
  )
}

export default PalliativeCare
