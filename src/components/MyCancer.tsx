"use client"

import type React from "react"
import BackButton from "./BackButton"

interface MyCancerProps {
  onBack: () => void
}

const MyCancer: React.FC<MyCancerProps> = ({ onBack }) => {
  return (
    <div className="page-container">
      <BackButton onClick={onBack} />
      <div className="page-content">
        <h2>My Cancer</h2>

        <div className="section">
          <h3>Diagnosis</h3>
          <div className="diagnosis-info">
            <p>
              <strong>Type:</strong> Stage 2 Breast Cancer (Invasive Ductal Carcinoma)
            </p>
            <p>
              <strong>Diagnosed:</strong> January 15, 2023
            </p>
            <p>
              <strong>Hormone Status:</strong> ER+/PR+, HER2-
            </p>
          </div>
        </div>

        <div className="section">
          <h3>Treatment Timeline</h3>
          <div className="timeline">
            <div className="timeline-item completed">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Surgery</h4>
                <p>Lumpectomy with sentinel lymph node biopsy</p>
                <p className="date">February 10, 2023</p>
              </div>
            </div>
            <div className="timeline-item current">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Chemotherapy</h4>
                <p>4 cycles of AC-T</p>
                <p className="date">March 5 - June 28, 2023</p>
                <p className="status">In Progress (2 of 4 cycles completed)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Radiation Therapy</h4>
                <p>5 days per week for 4 weeks</p>
                <p className="date">July 15 - August 12, 2023 (Planned)</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Hormone Therapy</h4>
                <p>Tamoxifen for 5-10 years</p>
                <p className="date">Starting August 2023 (Planned)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Educational Resources</h3>
          <div className="resource-list">
            <div className="resource-item">
              <h4>Understanding Breast Cancer</h4>
              <p>Comprehensive guide to breast cancer types and treatments</p>
              <button className="view-button">View</button>
            </div>
            <div className="resource-item">
              <h4>Chemotherapy Side Effects</h4>
              <p>What to expect and how to manage side effects</p>
              <button className="view-button">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCancer
