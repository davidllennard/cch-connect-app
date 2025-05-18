"use client"

import type React from "react"
import BackButton from "./BackButton"

interface LabReportsProps {
  onBack: () => void
}

const LabReports: React.FC<LabReportsProps> = ({ onBack }) => {
  return (
    <div className="page-container">
      <BackButton onClick={onBack} />
      <div className="page-content">
        <h2>Lab Reports</h2>

        <div className="section">
          <h3>Recent Lab Results</h3>
          <div className="lab-result">
            <div className="result-header">
              <h4>Complete Blood Count (CBC)</h4>
              <span className="date">May 10, 2023</span>
            </div>
            <div className="result-items">
              <div className="result-item">
                <span className="test-name">White Blood Cells (WBC)</span>
                <span className="test-value">4.2 × 10^9/L</span>
                <span className="reference">Reference: 4.0-11.0 × 10^9/L</span>
                <span className="status normal">Normal</span>
              </div>
              <div className="result-item">
                <span className="test-name">Red Blood Cells (RBC)</span>
                <span className="test-value">3.8 × 10^12/L</span>
                <span className="reference">Reference: 4.2-5.4 × 10^12/L</span>
                <span className="status low">Low</span>
              </div>
              <div className="result-item">
                <span className="test-name">Hemoglobin (Hgb)</span>
                <span className="test-value">11.2 g/dL</span>
                <span className="reference">Reference: 12.0-16.0 g/dL</span>
                <span className="status low">Low</span>
              </div>
              <div className="result-item">
                <span className="test-name">Platelets</span>
                <span className="test-value">210 × 10^9/L</span>
                <span className="reference">Reference: 150-450 × 10^9/L</span>
                <span className="status normal">Normal</span>
              </div>
            </div>
            <button className="view-button">View Full Report</button>
          </div>

          <div className="lab-result">
            <div className="result-header">
              <h4>Comprehensive Metabolic Panel</h4>
              <span className="date">May 10, 2023</span>
            </div>
            <div className="result-items">
              <div className="result-item">
                <span className="test-name">Glucose</span>
                <span className="test-value">95 mg/dL</span>
                <span className="reference">Reference: 70-99 mg/dL</span>
                <span className="status normal">Normal</span>
              </div>
              <div className="result-item">
                <span className="test-name">Creatinine</span>
                <span className="test-value">0.8 mg/dL</span>
                <span className="reference">Reference: 0.6-1.2 mg/dL</span>
                <span className="status normal">Normal</span>
              </div>
              <div className="result-item">
                <span className="test-name">ALT</span>
                <span className="test-value">45 U/L</span>
                <span className="reference">Reference: 7-35 U/L</span>
                <span className="status high">High</span>
              </div>
            </div>
            <button className="view-button">View Full Report</button>
          </div>
        </div>

        <div className="section">
          <h3>Lab History</h3>
          <div className="lab-history">
            <div className="history-item">
              <span className="test-name">Complete Blood Count (CBC)</span>
              <span className="date">April 12, 2023</span>
              <button className="view-button">View</button>
            </div>
            <div className="history-item">
              <span className="test-name">Comprehensive Metabolic Panel</span>
              <span className="date">April 12, 2023</span>
              <button className="view-button">View</button>
            </div>
            <div className="history-item">
              <span className="test-name">Complete Blood Count (CBC)</span>
              <span className="date">March 15, 2023</span>
              <button className="view-button">View</button>
            </div>
            <div className="history-item">
              <span className="test-name">Tumor Marker Tests</span>
              <span className="date">March 1, 2023</span>
              <button className="view-button">View</button>
            </div>
          </div>
        </div>

        <div className="section">
          <h3>Upcoming Tests</h3>
          <div className="upcoming-test">
            <h4>Complete Blood Count (CBC)</h4>
            <p>Scheduled for May 24, 2023</p>
            <p>Memorial Cancer Center Lab</p>
            <p>Fasting required: No</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabReports
