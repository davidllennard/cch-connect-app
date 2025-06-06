"use client";

import type React from "react";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import type { PageType } from "../_app";

interface PillSchedulerProps {
  navigateTo: (page: PageType) => void;
}

const PillScheduler: React.FC<PillSchedulerProps> = ({ navigateTo }) => {
  const [showAddMedication, setShowAddMedication] = useState(false);

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
  );
};

export default PillScheduler;
