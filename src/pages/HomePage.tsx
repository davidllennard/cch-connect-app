"use client"

import type React from "react"
import PortalCard from "../components/PortalCard"
import LanguageSelector from "../components/LanguageSelector"
import type { PageType } from "../App"

interface HomePageProps {
  navigateTo: (page: PageType) => void
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <div className="container">
      <div className="portal-header">
        <h1 className="portal-title">Medical Access Portal</h1>
        <p className="portal-description">Connect with your healthcare providers and manage appointments</p>
      </div>

      <div className="portal-grid">
        {/* Research Portal */}
        <PortalCard
          title="Research Portal"
          description="Access clinical trials and research"
          onClick={() => navigateTo("research-portal")}
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

        {/* Entertainment Hub */}
        <PortalCard
          title="Entertainment Hub"
          description="Relax and enjoy entertainment"
          onClick={() => navigateTo("entertainment-hub")}
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
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <line x1="7" y1="2" x2="7" y2="22"></line>
              <line x1="17" y1="2" x2="17" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <line x1="2" y1="7" x2="7" y2="7"></line>
              <line x1="2" y1="17" x2="7" y2="17"></line>
              <line x1="17" y1="17" x2="22" y2="17"></line>
              <line x1="17" y1="7" x2="22" y2="7"></line>
            </svg>
          }
        />

        {/* AI Chat Assistant */}
        <PortalCard
          title="AI Chat Assistant"
          description="Get answers to your questions"
          onClick={() => navigateTo("ai-chat-assistant")}
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
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          }
        />

        {/* Group Chat */}
        <PortalCard
          title="Group Chat"
          description="Connect with other patients"
          onClick={() => navigateTo("group-chat")}
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
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          }
        />

        {/* My Cancer */}
        <PortalCard
          title="My Cancer"
          description="Information specific to your cancer type"
          onClick={() => navigateTo("my-cancer")}
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          }
        />

        {/* Pill Scheduler */}
        <PortalCard
          title="Pill Scheduler"
          description="Manage your medication schedule"
          onClick={() => navigateTo("pill-scheduler")}
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
              <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3"></path>
              <circle cx="18" cy="18" r="3"></circle>
              <path d="M18 14v1"></path>
              <path d="M18 21v1"></path>
              <path d="M22 18h-1"></path>
              <path d="M15 18h-1"></path>
              <path d="M21 15l-.7.7"></path>
              <path d="M15.7 20.3l-.7.7"></path>
              <path d="M21 21l-.7-.7"></path>
              <path d="M15.7 15.7l-.7-.7"></path>
            </svg>
          }
        />

        {/* Symptom Tracker */}
        <PortalCard
          title="Symptom Tracker"
          description="Track and manage your symptoms"
          onClick={() => navigateTo("symptom-tracker")}
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

        {/* Calendar Hub */}
        <PortalCard
          title="Calendar Hub"
          description="Manage all your appointments and personal events in one place"
          onClick={() => navigateTo("calendar-hub")}
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

        {/* MyChart */}
        <PortalCard
          title="MyChart"
          description="Access your medical records"
          onClick={() => navigateTo("mychart")}
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
      </div>

      {/* Language selector at bottom of page */}
      <div style={{ marginTop: "30px" }}>
        <LanguageSelector />
      </div>
    </div>
  )
}

export default HomePage
