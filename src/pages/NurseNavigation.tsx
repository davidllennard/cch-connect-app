"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import TeamMemberCard from "../components/TeamMemberCard"
import ServiceCard from "../components/ServiceCard"
import type { PageType } from "../App"

interface NurseNavigationProps {
  navigateTo: (page: PageType) => void
}

const NurseNavigation: React.FC<NurseNavigationProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Nurse Navigation</h1>
      </div>
      <p className="page-description">Get guidance from specialized nurses</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Your Nurse Navigator</h2>
        </div>
        <div className="card-content">
          <TeamMemberCard
            name="Jennifer Adams, RN"
            role="Oncology Nurse Navigator"
            description="Jennifer has been helping cancer patients navigate their care for over 10 years. She specializes in colorectal cancer care coordination."
            isLarge={true}
            onContact={() => alert("Contacting Jennifer Adams")}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">How Your Nurse Navigator Can Help</h2>
        </div>
        <div className="card-content">
          <ServiceCard
            title="Care Coordination"
            description="Help coordinate appointments, tests, and treatments across your healthcare team"
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

          <ServiceCard
            title="Education"
            description="Provide information about your diagnosis, treatment options, and side effect management"
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            }
          />

          <ServiceCard
            title="Resource Navigation"
            description="Connect you with support services, financial assistance, and community resources"
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
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            }
          />

          <ServiceCard
            title="Emotional Support"
            description="Provide emotional support and guidance throughout your cancer journey"
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default NurseNavigation
