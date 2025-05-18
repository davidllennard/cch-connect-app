"use client"

import type React from "react"
import PortalCard from "./PortalCard"

interface HomePageProps {
  onNavigate: (page: string) => void
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="home-page">
      <div className="welcome-message">
        <h2>Welcome to Cancer Care Hub</h2>
        <p>Your comprehensive cancer care management portal</p>
      </div>

      <div className="portal-grid">
        <PortalCard title="Oncology" icon="medical_services" onClick={() => onNavigate("oncology")} color="#4285F4" />
        <PortalCard
          title="Palliative Care"
          icon="healing"
          onClick={() => onNavigate("palliative-care")}
          color="#EA4335"
        />
        <PortalCard
          title="Nurse Navigation"
          icon="person"
          onClick={() => onNavigate("nurse-navigation")}
          color="#FBBC05"
        />
        <PortalCard title="My Caregivers" icon="people" onClick={() => onNavigate("caregivers")} color="#34A853" />
        <PortalCard title="My Cancer" icon="coronavirus" onClick={() => onNavigate("my-cancer")} color="#8E24AA" />
        <PortalCard title="Telemedicine" icon="videocam" onClick={() => onNavigate("telemedicine")} color="#16A2B8" />
        <PortalCard title="MyChart" icon="insert_chart" onClick={() => onNavigate("my-chart")} color="#F57C00" />
        <PortalCard title="Lab Reports" icon="science" onClick={() => onNavigate("lab-reports")} color="#607D8B" />
      </div>
    </div>
  )
}

export default HomePage
