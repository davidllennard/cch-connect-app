"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import TeamMemberCard from "../components/TeamMemberCard";
import ServiceCard from "../components/ServiceCard";
import ResourceCard from "../components/ResourceCard";
import type { PageType } from "./_app";

interface PalliativeCareProps {
  navigateTo: (page: PageType) => void;
  handleInactiveButton?: () => void;
}

const PalliativeCare: React.FC<PalliativeCareProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("my-cancer")} />
        <h1>Palliative Care</h1>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Palliative Care Team</h2>
        </div>
        <div className="card-content">
          <div className="team-grid">
            <TeamMemberCard
              name="Dr. Emily Parker"
              role="Palliative Care Physician"
              specialty="Pain Management"
              imageUrl="/placeholder.svg?height=150&width=150"
              contactInfo={{
                email: "emily.parker@hospital.org",
                phone: "(555) 123-7890",
                office: "Medical Center, Floor 2, Room 210",
              }}
              availability="Mon, Wed, Fri: 9am-5pm"
            />

            <TeamMemberCard
              name="Thomas Wright"
              role="Palliative Care Nurse"
              specialty="Symptom Management"
              imageUrl="/placeholder.svg?height=150&width=150"
              contactInfo={{
                email: "thomas.wright@hospital.org",
                phone: "(555) 123-7891",
                office: "Medical Center, Floor 2, Room 212",
              }}
              availability="Mon-Fri: 8am-4pm"
            />

            <TeamMemberCard
              name="Dr. Sophia Lee"
              role="Psychologist"
              specialty="Emotional Support"
              imageUrl="/placeholder.svg?height=150&width=150"
              contactInfo={{
                email: "sophia.lee@hospital.org",
                phone: "(555) 123-7892",
                office: "Medical Center, Floor 2, Room 215",
              }}
              availability="Tue, Thu: 10am-6pm"
            />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Services</h2>
        </div>
        <div className="card-content">
          <div className="services-grid">
            <ServiceCard
              title="Pain Management"
              description="Comprehensive pain assessment and management strategies tailored to your needs."
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
                  <path d="M8 19h8a4 4 0 0 0 4-4 5 5 0 0 0-5-5 3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 8 10a5 5 0 0 0-5 5 4 4 0 0 0 4 4z"></path>
                  <path d="M12 19v3"></path>
                </svg>
              }
            />

            <ServiceCard
              title="Symptom Management"
              description="Strategies to manage symptoms like nausea, fatigue, and breathing difficulties."
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
              description="Counseling and support for emotional well-being during your cancer journey."
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

            <ServiceCard
              title="Family Support"
              description="Resources and counseling for family members and caregivers."
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
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Resources</h2>
        </div>
        <div className="card-content">
          <div className="resources-grid">
            <ResourceCard
              title="Advance Care Planning"
              description="Information and forms for documenting your healthcare wishes."
              link="#"
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

            <ResourceCard
              title="Support Groups"
              description="Connect with others who understand what you're going through."
              link="#"
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

            <ResourceCard
              title="Home Care Services"
              description="Information about receiving care in the comfort of your home."
              link="#"
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
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              }
            />

            <ResourceCard
              title="Hospice Information"
              description="Understanding hospice care and when it might be appropriate."
              link="#"
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
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalliativeCare;
