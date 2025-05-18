"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import ResourceCard from "../components/ResourceCard"
import type { PageType } from "../App"
// Remove any import for "../styles/PageTemplate.css" if it exists

interface CaregiversProps {
  navigateTo: (page: PageType) => void
}

const Caregivers: React.FC<CaregiversProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Caregivers</h1>
      </div>
      <p className="page-description">Connect with caregiving services</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Your Caregivers</h2>
        </div>
        <div className="card-content">
          <div className="caregiver-list">
            <div className="caregiver-item">
              <div className="caregiver-avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="caregiver-info">
                <h3>John Doe</h3>
                <p>Relationship: Son</p>
                <p>Phone: 555-123-4567</p>
                <p>Email: john.doe@example.com</p>
              </div>
              <div className="caregiver-actions">
                <button className="button button-outline">Edit</button>
                <button className="button button-outline">Remove</button>
              </div>
            </div>

            <div className="caregiver-item">
              <div className="caregiver-avatar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="caregiver-info">
                <h3>Jane Smith</h3>
                <p>Relationship: Daughter</p>
                <p>Phone: 555-987-6543</p>
                <p>Email: jane.smith@example.com</p>
              </div>
              <div className="caregiver-actions">
                <button className="button button-outline">Edit</button>
                <button className="button button-outline">Remove</button>
              </div>
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
            Add New Caregiver
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Caregiver Resources</h2>
        </div>
        <div className="card-content">
          <ResourceCard
            title="Caregiver Support Group"
            description="Join our weekly support group for caregivers of cancer patients."
            onView={() => alert("Viewing Caregiver Support Group details")}
          />

          <ResourceCard
            title="Caregiver Training"
            description="Learn practical skills for caring for a loved one with cancer."
            onView={() => alert("Viewing Caregiver Training details")}
          />

          <ResourceCard
            title="Respite Care Services"
            description="Take a break while trained professionals care for your loved one."
            onView={() => alert("Viewing Respite Care Services details")}
          />
        </div>
      </div>
    </div>
  )
}

export default Caregivers
