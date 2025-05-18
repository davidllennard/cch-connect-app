"use client"

import type React from "react"
import BackButton from "./BackButton"

interface MyChartProps {
  onBack: () => void
}

const MyChart: React.FC<MyChartProps> = ({ onBack }) => {
  return (
    <div className="page-container">
      <BackButton onClick={onBack} />
      <div className="page-content">
        <h2>MyChart</h2>

        <div className="section">
          <h3>Recent Messages</h3>
          <div className="message">
            <div className="message-header">
              <span className="sender">Dr. Rebecca Johnson</span>
              <span className="date">May 15, 2023</span>
            </div>
            <p className="message-preview">
              Your recent blood work results look good. Your white blood cell count has improved since...
            </p>
            <button className="view-button">Read Full Message</button>
          </div>
          <div className="message">
            <div className="message-header">
              <span className="sender">Pharmacy</span>
              <span className="date">May 12, 2023</span>
            </div>
            <p className="message-preview">
              Your prescription for Ondansetron has been refilled and is ready for pickup...
            </p>
            <button className="view-button">Read Full Message</button>
          </div>
          <button className="compose-button">Compose New Message</button>
        </div>

        <div className="section">
          <h3>Medications</h3>
          <div className="medication-list">
            <div className="medication">
              <h4>Doxorubicin</h4>
              <p>Chemotherapy medication</p>
              <p>Administered every 3 weeks during treatment</p>
            </div>
            <div className="medication">
              <h4>Cyclophosphamide</h4>
              <p>Chemotherapy medication</p>
              <p>Administered every 3 weeks during treatment</p>
            </div>
            <div className="medication">
              <h4>Ondansetron</h4>
              <p>Anti-nausea medication</p>
              <p>Take as needed for nausea</p>
            </div>
          </div>
          <button className="view-button">View All Medications</button>
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
          <div className="appointment">
            <div className="date">May 25, 2023</div>
            <div className="details">
              <h4>Chemotherapy Session</h4>
              <p>Infusion Center</p>
              <p>Memorial Cancer Center, 2nd Floor</p>
            </div>
          </div>
          <button className="schedule-button">Schedule New Appointment</button>
        </div>
      </div>
    </div>
  )
}

export default MyChart
