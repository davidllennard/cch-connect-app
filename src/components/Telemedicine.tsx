"use client"

import type React from "react"
import { useState } from "react"
import BackButton from "./BackButton"

interface TelemedicineProps {
  onBack: () => void
}

const Telemedicine: React.FC<TelemedicineProps> = ({ onBack }) => {
  const [showJoinOptions, setShowJoinOptions] = useState(false)

  return (
    <div className="page-container">
      <BackButton onClick={onBack} />
      <div className="page-content">
        <h2>Telemedicine</h2>

        <div className="section">
          <h3>Upcoming Virtual Appointments</h3>
          <div className="appointment">
            <div className="date">May 25, 2023</div>
            <div className="details">
              <h4>Follow-up Consultation</h4>
              <p>Dr. Rebecca Johnson</p>
              <p>2:00 PM - 2:30 PM</p>
              <button className="join-button" onClick={() => setShowJoinOptions(true)}>
                Join Appointment
              </button>
              {showJoinOptions && (
                <div className="join-options">
                  <button className="option-button">Join with Video</button>
                  <button className="option-button">Join with Audio Only</button>
                  <button className="option-button cancel" onClick={() => setShowJoinOptions(false)}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Schedule a Virtual Visit</h3>
          <div className="provider-list">
            <div className="provider">
              <div className="avatar">RJ</div>
              <div className="details">
                <h4>Dr. Rebecca Johnson</h4>
                <p>Medical Oncologist</p>
                <button className="schedule-button">Schedule</button>
              </div>
            </div>
            <div className="provider">
              <div className="avatar">SC</div>
              <div className="details">
                <h4>Dr. Samuel Chen</h4>
                <p>Radiation Oncologist</p>
                <button className="schedule-button">Schedule</button>
              </div>
            </div>
            <div className="provider">
              <div className="avatar">ML</div>
              <div className="details">
                <h4>Dr. Maria Lopez</h4>
                <p>Palliative Care Specialist</p>
                <button className="schedule-button">Schedule</button>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Technical Requirements</h3>
          <ul className="requirements-list">
            <li>Stable internet connection</li>
            <li>Device with camera and microphone</li>
            <li>Quiet, private location</li>
            <li>Chrome, Firefox, or Safari browser</li>
          </ul>
          <button className="test-button">Test Your Connection</button>
        </div>
      </div>
    </div>
  )
}

export default Telemedicine
