"use client"

import type React from "react"
import type { PageType } from "../App"
import SOSButton from "./SOSButton"

interface FooterNavProps {
  currentPage: PageType
  navigateTo: (page: PageType) => void
}

const FooterNav: React.FC<FooterNavProps> = ({ currentPage, navigateTo }) => {
  return (
    <div className="footer-nav">
      <div className={`nav-item ${currentPage === "home" ? "active" : ""}`} onClick={() => navigateTo("home")}>
        <div className="nav-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </div>
        <span>Home</span>
      </div>

      <div className="nav-item sos-container">
        <SOSButton />
      </div>

      <div
        className={`nav-item ${currentPage === "symptom-tracker" ? "active" : ""}`}
        onClick={() => navigateTo("symptom-tracker")}
      >
        <div className="nav-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
        <span>Symptoms</span>
      </div>
    </div>
  )
}

export default FooterNav
