"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import type { PageType } from "./_app";

interface SymptomTrackerProps {
  navigateTo: (page: PageType) => void;
}

const SymptomTracker: React.FC<SymptomTrackerProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Symptom Tracker</h1>
      </div>
      <p className="page-description">Track and manage your symptoms</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Current Symptoms</h2>
        </div>
        <div className="card-content">
          <div className="symptom-list">
            <div className="symptom-item">
              <div className="symptom-header">
                <h3>Fatigue</h3>
                <span className="badge badge-warning">Moderate</span>
              </div>
              <p>Last updated: May 15, 2023</p>
              <div className="symptom-scale">
                <div className="symptom-scale-labels">
                  <span>None</span>
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
                <div className="symptom-scale-bar">
                  <div className="symptom-scale-fill" style={{ width: "60%" }}></div>
                </div>
              </div>
              <button className="button button-outline">Update</button>
            </div>

            <div className="symptom-item">
              <div className="symptom-header">
                <h3>Nausea</h3>
                <span className="badge badge-success">Mild</span>
              </div>
              <p>Last updated: May 15, 2023</p>
              <div className="symptom-scale">
                <div className="symptom-scale-labels">
                  <span>None</span>
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
                <div className="symptom-scale-bar">
                  <div className="symptom-scale-fill" style={{ width: "30%" }}></div>
                </div>
              </div>
              <button className="button button-outline">Update</button>
            </div>

            <div className="symptom-item">
              <div className="symptom-header">
                <h3>Pain</h3>
                <span className="badge badge-success">Mild</span>
              </div>
              <p>Last updated: May 15, 2023</p>
              <div className="symptom-scale">
                <div className="symptom-scale-labels">
                  <span>None</span>
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
                <div className="symptom-scale-bar">
                  <div className="symptom-scale-fill" style={{ width: "20%" }}></div>
                </div>
              </div>
              <button className="button button-outline">Update</button>
            </div>
          </div>
          <button className="button button-primary add-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Track New Symptom
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Symptom History</h2>
        </div>
        <div className="card-content">
          <div className="symptom-chart">
            <p>Symptom trends over time will be displayed here.</p>
            <div className="placeholder-chart">
              <div className="chart-line"></div>
              <div className="chart-line"></div>
              <div className="chart-line"></div>
            </div>
          </div>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: "#4285F4" }}></div>
              <div className="legend-label">Fatigue</div>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: "#EA4335" }}></div>
              <div className="legend-label">Nausea</div>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: "#FBBC05" }}></div>
              <div className="legend-label">Pain</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomTracker;
