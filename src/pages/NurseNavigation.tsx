"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import TeamMemberCard from "../components/TeamMemberCard"
import ServiceCard from "../components/ServiceCard"
import type { PageType } from "../App"

interface NurseNavigationProps {
  navigateTo: (page: PageType) => void
  handleInactiveButton?: () => void
}

const NurseNavigation: React.FC<NurseNavigationProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("my-cancer")} />
        <h1>Nurse Navigation</h1>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Your Navigation Team</h2>
        </div>
        <div className="card-content">
          <div className="team-grid">
            <TeamMemberCard
              name="Jennifer Martinez, RN"
              role="Oncology Nurse Navigator"
              specialty="Multiple Myeloma"
              imageUrl="/placeholder.svg?height=150&width=150"
              contactInfo={{
                email: "jennifer.martinez@hospital.org",
                phone: "(555) 123-4580",
                office: "Cancer Center, Floor 2, Room 220",
              }}
              availability="Mon-Fri: 8am-4pm"
            />

            <TeamMemberCard
              name="David Kim, RN"
              role="Oncology Nurse Navigator"
              specialty="Supportive Care"
              imageUrl="/placeholder.svg?height=150&width=150"
              contactInfo={{
                email: "david.kim@hospital.org",
                phone: "(555) 123-4581",
                office: "Cancer Center, Floor 2, Room 222",
              }}
              availability="Mon-Fri: 9am-5pm"
            />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Navigation Services</h2>
        </div>
        <div className="card-content">
          <div className="services-grid">
            <ServiceCard
              title="Care Coordination"
              description="Assistance with scheduling appointments and coordinating care between different providers."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
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

            <ServiceCard
              title="Education & Resources"
              description="Information about your diagnosis, treatment options, and available resources."
              icon={
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
              }
            />

            <ServiceCard
              title="Symptom Management"
              description="Guidance on managing treatment side effects and symptoms."
              icon={
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
              }
            />

            <ServiceCard
              title="Emotional Support"
              description="Assistance with coping strategies and referrals to support services."
              icon={
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
              }
            />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Contact Your Navigator</h2>
        </div>
        <div className="card-content">
          <div className="contact-options">
            <div className="contact-option">
              <h3>Phone</h3>
              <p>(555) 123-4580</p>
              <p className="note">Available Mon-Fri, 8am-5pm</p>
            </div>
            <div className="contact-option">
              <h3>Email</h3>
              <p>nursenavigator@hospital.org</p>
              <p className="note">Response within 24 hours on business days</p>
            </div>
            <div className="contact-option">
              <h3>Patient Portal</h3>
              <p>Send a secure message through your patient portal</p>
              <p className="note">Response within 24-48 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NurseNavigation
