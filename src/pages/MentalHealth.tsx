"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import PortalCard from "../components/PortalCard";
import type { PageType } from "./_app";

interface MentalHealthProps {
  navigateTo: (page: PageType) => void;
}

const MentalHealth: React.FC<MentalHealthProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>My Mental Health</h1>
      </div>

      <div className="portal-grid">
        {/* Therapy */}
        <PortalCard
          title="Therapy"
          description="Connect with mental health professionals"
          onClick={() => alert("Opening therapy options...")}
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
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          }
        />

        {/* Mood Tracker */}
        <PortalCard
          title="Mood Tracker"
          description="Monitor your emotional wellbeing"
          onClick={() => alert("Opening mood tracker...")}
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
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          }
        />

        {/* Meditation */}
        <PortalCard
          title="Meditation"
          description="Guided sessions for stress reduction"
          onClick={() => alert("Opening meditation sessions...")}
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
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          }
        />

        {/* Support Groups */}
        <PortalCard
          title="Support Groups"
          description="Connect with others facing similar challenges"
          onClick={() => alert("Opening support groups...")}
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
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          }
        />

        {/* Journaling */}
        <PortalCard
          title="Journaling"
          description="Express your thoughts and feelings"
          onClick={() => alert("Opening journaling tool...")}
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
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          }
        />

        {/* Sleep Hygiene */}
        <PortalCard
          title="Sleep Hygiene"
          description="Improve your sleep quality"
          onClick={() => alert("Opening sleep resources...")}
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
              <path d="M17 17h5v-2a2 2 0 0 0-2-2h-3v4Z"></path>
              <path d="M2 17h5v-2a2 2 0 0 0-2-2H2v4Z"></path>
              <path d="M7 11h10V7a4 4 0 0 0-4-4H11a4 4 0 0 0-4 4v4Z"></path>
              <path d="M7 17h10"></path>
            </svg>
          }
        />

        {/* Crisis Resources */}
        <PortalCard
          title="Crisis Resources"
          description="Immediate help when you need it most"
          onClick={() => alert("Opening crisis resources...")}
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
              <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1Z"></path>
              <path d="M1 7v10h15V7H1Z"></path>
            </svg>
          }
        />

        {/* Relaxation Techniques */}
        <PortalCard
          title="Relaxation Techniques"
          description="Methods to reduce stress and anxiety"
          onClick={() => alert("Opening relaxation techniques...")}
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
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default MentalHealth;
