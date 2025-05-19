"use client"

import type React from "react"
import { useState } from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"
import "../styles/PageTemplate.css"

interface PillSchedulerProps {
  navigateTo: (page: PageType) => void
}

const PillScheduler: React.FC<PillSchedulerProps> = ({ navigateTo }) => {
  const [showAddMedication, setShowAddMedication] = useState(false)
  const [alarms, setAlarms] = useState<{ [key: string]: boolean }>({
    morning: false,
    afternoon: false,
    evening: false,
  })

  // Add this function after handleSendMessage
  const toggleAlarm = (time: string) => {
    setAlarms({
      ...alarms,
      [time]: !alarms[time],
    })

    if (!alarms[time]) {
      alert(`Alarm set for ${time} medication`)
    } else {
      alert(`Alarm turned off for ${time} medication`)
    }
  }

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Pill Scheduler</h1>
      </div>
      <p className="page-description">Manage your medication schedule</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Today's Medications</h2>
        </div>
        <div className="card-content">
          <div className="medication-schedule">
            <div className="time-slot">
              <div className="time-label">Morning (8:00 AM)</div>
              <button
                className={`alarm-button ${alarms["morning"] ? "active" : ""}`}
                onClick={() => toggleAlarm("morning")}
                style={{
                  marginLeft: "10px",
                  background: alarms["morning"] ? "var(--primary-color)" : "transparent",
                  border: "1px solid var(--border-color)",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={alarms["morning"] ? "white" : "var(--text-color)"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "18px", height: "18px" }}
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
              <div className="medication-list">
                <div className="medication-item">
                  <div className="medication-info">
                    <h3>Metformin</h3>
                    <p>500 mg, 1 tablet</p>
                    <p>Take with food</p>
                  </div>
                  <div className="medication-status">
                    <button className="button button-outline">Mark as Taken</button>
                  </div>
                </div>
                <div className="medication-item">
                  <div className="medication-info">
                    <h3>Lisinopril</h3>
                    <p>10 mg, 1 tablet</p>
                  </div>
                  <div className="medication-status">
                    <button className="button button-outline">Mark as Taken</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="time-slot">
              <div className="time-label">Afternoon (1:00 PM)</div>
              <button
                className={`alarm-button ${alarms["afternoon"] ? "active" : ""}`}
                onClick={() => toggleAlarm("afternoon")}
                style={{
                  marginLeft: "10px",
                  background: alarms["afternoon"] ? "var(--primary-color)" : "transparent",
                  border: "1px solid var(--border-color)",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={alarms["afternoon"] ? "white" : "var(--text-color)"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "18px", height: "18px" }}
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
              <div className="medication-list">
                <div className="medication-item">
                  <div className="medication-info">
                    <h3>Ondansetron</h3>
                    <p>8 mg, 1 tablet</p>
                    <p>Take as needed for nausea</p>
                  </div>
                  <div className="medication-status">
                    <button className="button button-outline">Mark as Taken</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="time-slot">
              <div className="time-label">Evening (8:00 PM)</div>
              <button
                className={`alarm-button ${alarms["evening"] ? "active" : ""}`}
                onClick={() => toggleAlarm("evening")}
                style={{
                  marginLeft: "10px",
                  background: alarms["evening"] ? "var(--primary-color)" : "transparent",
                  border: "1px solid var(--border-color)",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={alarms["evening"] ? "white" : "var(--text-color)"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "18px", height: "18px" }}
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </button>
              <div className="medication-list">
                <div className="medication-item">
                  <div className="medication-info">
                    <h3>Metformin</h3>
                    <p>500 mg, 1 tablet</p>
                    <p>Take with food</p>
                  </div>
                  <div className="medication-status">
                    <span className="badge badge-success">Taken at 8:05 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-header-with-action">
            <h2 className="card-title">My Medications</h2>
            <button className="button button-primary" onClick={() => setShowAddMedication(!showAddMedication)}>
              {showAddMedication ? "Cancel" : "Add Medication"}
            </button>
          </div>
        </div>
        <div className="card-content">
          {showAddMedication && (
            <div className="add-medication-form">
              <h3>Add New Medication</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="medication-name">Medication Name</label>
                  <input type="text" id="medication-name" placeholder="Enter medication name" />
                </div>
                <div className="form-group">
                  <label htmlFor="medication-dosage">Dosage</label>
                  <input type="text" id="medication-dosage" placeholder="e.g., 500 mg" />
                </div>
                <div className="form-group">
                  <label htmlFor="medication-instructions">Instructions</label>
                  <textarea id="medication-instructions" placeholder="e.g., Take with food"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="medication-schedule">Schedule</label>
                  <select id="medication-schedule">
                    <option value="">Select schedule</option>
                    <option value="once-daily">Once daily</option>
                    <option value="twice-daily">Twice daily</option>
                    <option value="three-times-daily">Three times daily</option>
                    <option value="as-needed">As needed</option>
                    <option value="custom">Custom schedule</option>
                  </select>
                </div>
                <div className="form-actions">
                  <button type="submit" className="button button-primary">
                    Save Medication
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="medication-list">
            <div className="medication-item">
              <div className="medication-info">
                <h3>Metformin</h3>
                <p>500 mg, twice daily</p>
                <p>Take with food</p>
              </div>
              <div className="medication-actions">
                <button className="button button-outline">Edit</button>
                <button className="button button-outline">Remove</button>
              </div>
            </div>

            <div className="medication-item">
              <div className="medication-info">
                <h3>Lisinopril</h3>
                <p>10 mg, once daily</p>
              </div>
              <div className="medication-actions">
                <button className="button button-outline">Edit</button>
                <button className="button button-outline">Remove</button>
              </div>
            </div>

            <div className="medication-item">
              <div className="medication-info">
                <h3>Ondansetron</h3>
                <p>8 mg, as needed for nausea</p>
                <p>Do not take more than 3 tablets in 24 hours</p>
              </div>
              <div className="medication-actions">
                <button className="button button-outline">Edit</button>
                <button className="button button-outline">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PillScheduler
