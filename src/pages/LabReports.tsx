"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import type { PageType } from "./_app";
// Remove any import for "../styles/PageTemplate.css" if it exists

interface LabReportsProps {
  navigateTo: (page: PageType) => void;
}

const LabReports: React.FC<LabReportsProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Lab Reports</h1>
      </div>
      <p className="page-description">View your laboratory test results</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Recent Lab Results</h2>
        </div>
        <div className="card-content">
          <div className="lab-result">
            <div className="lab-result-header">
              <h3>Complete Blood Count (CBC)</h3>
              <span className="lab-date">May 10, 2023</span>
            </div>
            <div className="lab-result-items">
              <div className="lab-result-item">
                <div className="lab-test-name">White Blood Cells (WBC)</div>
                <div className="lab-test-value">4.2 × 10^9/L</div>
                <div className="lab-test-reference">Reference: 4.0-11.0 × 10^9/L</div>
                <div className="lab-test-status normal">Normal</div>
              </div>
              <div className="lab-result-item">
                <div className="lab-test-name">Red Blood Cells (RBC)</div>
                <div className="lab-test-value">3.8 × 10^12/L</div>
                <div className="lab-test-reference">Reference: 4.2-5.4 × 10^12/L</div>
                <div className="lab-test-status low">Low</div>
              </div>
              <div className="lab-result-item">
                <div className="lab-test-name">Hemoglobin (Hgb)</div>
                <div className="lab-test-value">11.2 g/dL</div>
                <div className="lab-test-reference">Reference: 12.0-16.0 g/dL</div>
                <div className="lab-test-status low">Low</div>
              </div>
              <div className="lab-result-item">
                <div className="lab-test-name">Platelets</div>
                <div className="lab-test-value">210 × 10^9/L</div>
                <div className="lab-test-reference">Reference: 150-450 × 10^9/L</div>
                <div className="lab-test-status normal">Normal</div>
              </div>
            </div>
            <button className="button button-primary">View Full Report</button>
          </div>

          <div className="lab-result">
            <div className="lab-result-header">
              <h3>Comprehensive Metabolic Panel</h3>
              <span className="lab-date">May 10, 2023</span>
            </div>
            <div className="lab-result-items">
              <div className="lab-result-item">
                <div className="lab-test-name">Glucose</div>
                <div className="lab-test-value">95 mg/dL</div>
                <div className="lab-test-reference">Reference: 70-99 mg/dL</div>
                <div className="lab-test-status normal">Normal</div>
              </div>
              <div className="lab-result-item">
                <div className="lab-test-name">Creatinine</div>
                <div className="lab-test-value">0.8 mg/dL</div>
                <div className="lab-test-reference">Reference: 0.6-1.2 mg/dL</div>
                <div className="lab-test-status normal">Normal</div>
              </div>
              <div className="lab-result-item">
                <div className="lab-test-name">ALT</div>
                <div className="lab-test-value">45 U/L</div>
                <div className="lab-test-reference">Reference: 7-35 U/L</div>
                <div className="lab-test-status high">High</div>
              </div>
            </div>
            <button className="button button-primary">View Full Report</button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Lab History</h2>
        </div>
        <div className="card-content">
          <div className="lab-history">
            <div className="lab-history-item">
              <div className="lab-history-name">Complete Blood Count (CBC)</div>
              <div className="lab-history-date">April 12, 2023</div>
              <button className="button button-outline">View</button>
            </div>
            <div className="lab-history-item">
              <div className="lab-history-name">Comprehensive Metabolic Panel</div>
              <div className="lab-history-date">April 12, 2023</div>
              <button className="button button-outline">View</button>
            </div>
            <div className="lab-history-item">
              <div className="lab-history-name">Complete Blood Count (CBC)</div>
              <div className="lab-history-date">March 15, 2023</div>
              <button className="button button-outline">View</button>
            </div>
            <div className="lab-history-item">
              <div className="lab-history-name">Tumor Marker Tests</div>
              <div className="lab-history-date">March 1, 2023</div>
              <button className="button button-outline">View</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Upcoming Tests</h2>
        </div>
        <div className="card-content">
          <div className="upcoming-test">
            <h3>Complete Blood Count (CBC)</h3>
            <p>Scheduled for May 24, 2023</p>
            <p>Memorial Cancer Center Lab</p>
            <p>Fasting required: No</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabReports;
