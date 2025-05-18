"use client"

import type React from "react"
import BackButton from "./BackButton"

interface OncologyPageProps {
  onBack: () => void
}

const OncologyPage: React.FC<OncologyPageProps> = ({ onBack }) => {
  return (
    <div className="page-container">
      <BackButton onClick={onBack} />
      <div className="page-content">
        <h2>Oncology Services</h2>
        <div className="section">
          <h3>Your Oncology Team</h3>
          <div className="team-member">
            <div className="avatar">DR</div>
            <div className="details">
              <h4>Dr. Rebecca Johnson</h4>
              <p>Medical Oncologist</p>
              <button className="contact-button">Contact</button>
            </div>
          </div>
          <div className="team-member">
            <div className="avatar">DS</div>
            <div className="details">
              <h4>Dr. Samuel Chen</h4>
              <p>Radiation Oncologist</p>
              <button className="contact-button">Contact</button>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Upcoming Appointments</h3>
          <div className="appointment">
            <div className="date">May 22, 2023</div>
            <div className="details">
              <h4>Follow-up Consultation</h4>
              <p>Dr. Rebecca Johnson</p>
              <p>Memorial Cancer Center, Room 305</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Treatment Plan</h3>
          <p>
            Your current treatment plan includes chemotherapy sessions every 3 weeks for the next 3 months, followed by
            a reassessment.
          </p>
          <button className="view-button">View Full Plan</button>
        </div>
      </div>
    </div>
  )
}

export default OncologyPage
