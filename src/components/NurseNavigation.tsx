"use client"

import type React from "react"
import BackButton from "./BackButton"

interface NurseNavigationProps {
  onBack: () => void
}

const NurseNavigation: React.FC<NurseNavigationProps> = ({ onBack }) => {
  return (
    <div className="page-container">
      <BackButton onClick={onBack} />
      <div className="page-content">
        <h2>Nurse Navigation</h2>

        <div className="section">
          <h3>Your Nurse Navigator</h3>
          <div className="team-member">
            <div className="avatar">SJ</div>
            <div className="details">
              <h4>Sarah Johnson, RN</h4>
              <p>Oncology Nurse Navigator</p>
              <div className="contact-options">
                <button className="contact-button">Message</button>
                <button className="contact-button">Call</button>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Upcoming Check-ins</h3>
          <div className="appointment">
            <div className="date">May 20, 2023</div>
            <div className="details">
              <h4>Weekly Check-in Call</h4>
              <p>10:00 AM - 10:30 AM</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Resources</h3>
          <div className="resource-list">
            <div className="resource-item">
              <h4>Understanding Your Treatment</h4>
              <p>Guide to chemotherapy side effects and management</p>
              <button className="view-button">View</button>
            </div>
            <div className="resource-item">
              <h4>Nutrition During Treatment</h4>
              <p>Dietary recommendations for cancer patients</p>
              <button className="view-button">View</button>
            </div>
            <div className="resource-item">
              <h4>Support Groups</h4>
              <p>Local and online support communities</p>
              <button className="view-button">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NurseNavigation
