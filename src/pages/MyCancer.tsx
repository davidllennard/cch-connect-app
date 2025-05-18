"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface MyCancerProps {
  navigateTo: (page: PageType) => void
}

const MyCancer: React.FC<MyCancerProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>My Cancer</h1>
      </div>

      {/* Care Team Navigation Cards */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Care Team</h2>
        </div>
        <div className="card-content">
          <div
            className="care-team-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}
          >
            {/* Oncology */}
            <div className="portal-card" onClick={() => navigateTo("oncology")} style={{ cursor: "pointer" }}>
              <div className="portal-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="portal-card-title">Oncology</h3>
              <p className="portal-card-description">Connect with oncology specialists</p>
            </div>

            {/* Palliative Care */}
            <div className="portal-card" onClick={() => navigateTo("palliative-care")} style={{ cursor: "pointer" }}>
              <div className="portal-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="portal-card-title">Palliative Care</h3>
              <p className="portal-card-description">Access palliative care services</p>
            </div>

            {/* Nurse Navigation */}
            <div className="portal-card" onClick={() => navigateTo("nurse-navigation")} style={{ cursor: "pointer" }}>
              <div className="portal-card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="portal-card-title">Nurse Navigation</h3>
              <p className="portal-card-description">Get guidance from specialized nurses</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Diagnosis Summary</h2>
        </div>
        <div className="card-content">
          <div className="diagnosis-grid">
            <div className="diagnosis-column">
              <div className="diagnosis-item">
                <h3>Cancer Type</h3>
                <p>Stage 2 Colorectal Cancer</p>
              </div>

              <div className="diagnosis-item">
                <h3>Diagnosis Date</h3>
                <p>January 15, 2023</p>
              </div>

              <div className="diagnosis-item">
                <h3>Tumor Location</h3>
                <p>Sigmoid colon</p>
              </div>

              <div className="diagnosis-item">
                <h3>Tumor Size</h3>
                <p>3.5 cm</p>
              </div>
            </div>

            <div className="diagnosis-column">
              <div className="diagnosis-item">
                <h3>Histology</h3>
                <p>Adenocarcinoma</p>
              </div>

              <div className="diagnosis-item">
                <h3>Biomarkers</h3>
                <p>
                  KRAS: Negative
                  <br />
                  BRAF: Negative
                  <br />
                  MSI: Low
                </p>
              </div>

              <div className="diagnosis-item">
                <h3>Lymph Node Involvement</h3>
                <p>2 of 15 lymph nodes positive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Treatment Plan</h2>
        </div>
        <div className="card-content">
          <div className="treatment-list">
            <div className="treatment-item">
              <div className="treatment-header">
                <h3>Surgery</h3>
                <span className="badge badge-success">Completed</span>
              </div>
              <p>Laparoscopic sigmoid colectomy</p>
              <p className="treatment-meta">Performed on February 10, 2023 by Dr. Sarah Williams</p>
            </div>

            <div className="treatment-item">
              <div className="treatment-header">
                <h3>Chemotherapy</h3>
                <span className="badge badge-success">In Progress</span>
              </div>
              <p>FOLFOX regimen (Fluorouracil, Leucovorin, Oxaliplatin)</p>
              <p className="treatment-meta">Started on March 15, 2023 • 8 of 12 cycles completed</p>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: "66%" }}></div>
              </div>
            </div>

            <div className="treatment-item">
              <div className="treatment-header">
                <h3>Follow-up Care</h3>
                <span className="badge badge-warning">Upcoming</span>
              </div>
              <p>Regular monitoring with CT scans and colonoscopies</p>
              <p className="treatment-meta">First follow-up scan scheduled for August 15, 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Treatment Timeline</h2>
        </div>
        <div className="card-content">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Initial Diagnosis</h3>
                <p className="timeline-date">January 15, 2023</p>
                <p>Colonoscopy revealed a mass in the sigmoid colon. Biopsy confirmed adenocarcinoma.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Staging Workup</h3>
                <p className="timeline-date">January 20-30, 2023</p>
                <p>CT scan, MRI, and additional tests to determine cancer stage and spread.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Surgery</h3>
                <p className="timeline-date">February 10, 2023</p>
                <p>Laparoscopic sigmoid colectomy to remove the tumor and affected lymph nodes.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Recovery</h3>
                <p className="timeline-date">February - March 2023</p>
                <p>Post-surgical recovery and preparation for adjuvant therapy.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Chemotherapy Begins</h3>
                <p className="timeline-date">March 15, 2023</p>
                <p>Started FOLFOX regimen, administered every two weeks.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Current Status</h3>
                <p className="timeline-date">May 12, 2023</p>
                <p>
                  Completed 8 of 12 planned chemotherapy cycles. Tolerating treatment well with manageable side effects.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker future"></div>
              <div className="timeline-content">
                <h3>Next Steps</h3>
                <p className="timeline-date">Projected completion: July 2023</p>
                <p>Complete remaining chemotherapy cycles followed by surveillance imaging.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCancer
