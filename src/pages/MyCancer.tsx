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
              <p className="portal-card-description">My oncology team</p>
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
              <p className="portal-card-description">Get answers fast</p>
            </div>

            {/* MyChart - Moved from homepage */}
            <div className="portal-card" onClick={() => navigateTo("mychart")} style={{ cursor: "pointer" }}>
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
              <h3 className="portal-card-title">MyChart</h3>
              <p className="portal-card-description">Access your medical records</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Information Cards */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Key Information</h2>
        </div>
        <div className="card-content">
          <div
            className="info-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}
          >
            {/* Diagnosis Summary Button */}
            <div className="portal-card" onClick={() => navigateTo("diagnosis-summary")} style={{ cursor: "pointer" }}>
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="portal-card-title">Diagnosis Summary</h3>
              <p className="portal-card-description">View your multiple myeloma diagnosis details</p>
            </div>

            {/* Treatment Plan Button */}
            <div className="portal-card" onClick={() => navigateTo("treatment-plan")} style={{ cursor: "pointer" }}>
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
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="portal-card-title">Treatment Plan</h3>
              <p className="portal-card-description">View your current treatment protocol</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyCancer
