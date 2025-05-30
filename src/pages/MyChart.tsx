"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import FeatureTile from "../components/FeatureTile";
import type { PageType } from "./_app";

interface MyChartProps {
  navigateTo: (page: PageType) => void;
  handleInactiveButton?: () => void;
}

const MyChart: React.FC<MyChartProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("my-cancer")} />
        <h1>MyChart</h1>
      </div>
      <p className="page-description">Access your medical records and health information</p>

      <div className="feature-grid">
        <FeatureTile
          title="Test Results"
          description="View your lab and imaging results"
          onClick={() => document.getElementById("test-results")?.scrollIntoView({ behavior: "smooth" })}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          }
        />

        <FeatureTile
          title="Appointments"
          description="View and schedule appointments"
          onClick={() => document.getElementById("appointments")?.scrollIntoView({ behavior: "smooth" })}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          }
        />

        <FeatureTile
          title="Health Summary"
          description="View your health information"
          onClick={() => alert("Health Summary section coming soon")}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>
          }
        />
      </div>

      <div className="card" id="test-results">
        <div className="card-header">
          <h2 className="card-title">Recent Test Results</h2>
        </div>
        <div className="card-content">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Test Name</th>
                  <th>Date</th>
                  <th>Result</th>
                  <th>Reference Range</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Complete Blood Count (CBC)</td>
                  <td>May 5, 2023</td>
                  <td>Multiple values</td>
                  <td>Various</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>
                    <button className="button button-outline">View</button>
                  </td>
                </tr>
                <tr>
                  <td>Comprehensive Metabolic Panel</td>
                  <td>May 5, 2023</td>
                  <td>Multiple values</td>
                  <td>Various</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>
                    <button className="button button-outline">View</button>
                  </td>
                </tr>
                <tr>
                  <td>Carcinoembryonic Antigen (CEA)</td>
                  <td>May 5, 2023</td>
                  <td>2.1 ng/mL</td>
                  <td>&lt; 3.0 ng/mL</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>
                    <button className="button button-outline">View</button>
                  </td>
                </tr>
                <tr>
                  <td>CT Scan - Abdomen/Pelvis</td>
                  <td>April 15, 2023</td>
                  <td>Report available</td>
                  <td>N/A</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>
                    <button className="button button-outline">View</button>
                  </td>
                </tr>
                <tr>
                  <td>Colonoscopy</td>
                  <td>March 10, 2023</td>
                  <td>Report available</td>
                  <td>N/A</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td>
                    <button className="button button-outline">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="view-all-container">
            <button className="button button-outline">View All Results</button>
          </div>
        </div>
      </div>

      <div className="card" id="appointments">
        <div className="card-header">
          <div className="card-header-with-action">
            <h2 className="card-title">Upcoming Appointments</h2>
            <button className="button button-primary">
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
              Schedule New
            </button>
          </div>
        </div>
        <div className="card-content">
          <div className="appointments-list">
            <div className="appointment-item">
              <div className="appointment-details">
                <h3>Oncology Follow-up</h3>
                <p>Dr. Emily Johnson</p>
                <p>May 20, 2023 • 10:00 AM</p>
                <p>Memorial Cancer Center, Suite 300</p>
              </div>
              <div className="appointment-actions">
                <button className="button button-outline">Reschedule</button>
                <button className="button button-outline">Cancel</button>
              </div>
            </div>

            <div className="appointment-item">
              <div className="appointment-details">
                <h3>Chemotherapy Session</h3>
                <p>Infusion Center</p>
                <p>May 22, 2023 • 9:00 AM</p>
                <p>Memorial Cancer Center, Infusion Suite</p>
              </div>
              <div className="appointment-actions">
                <button className="button button-outline">Reschedule</button>
                <button className="button button-outline">Cancel</button>
              </div>
            </div>

            <div className="appointment-item">
              <div className="appointment-details">
                <h3>Lab Work</h3>
                <p>Pre-chemotherapy labs</p>
                <p>June 1, 2023 • 8:30 AM</p>
                <p>Memorial Cancer Center, Lab Services</p>
              </div>
              <div className="appointment-actions">
                <button className="button button-outline">Reschedule</button>
                <button className="button button-outline">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyChart;
