"use client";

import type React from "react";
// import "../styles/TeamMemberCard.css"

interface TeamMemberCardProps {
  name: string;
  role: string;
  description?: string;
  onContact?: () => void;
  onSchedule?: () => void;
  isLarge?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  description,
  onContact,
  onSchedule,
  isLarge = false,
}) => {
  return (
    <div className="team-member">
      <div className={`team-member-avatar ${isLarge ? "large" : ""}`}>
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
      <div className="team-member-info">
        <h3>{name}</h3>
        <p>{role}</p>
        {description && <p>{description}</p>}
        <div className="team-member-actions">
          {onContact && (
            <button className="button button-primary" onClick={onContact}>
              Contact
            </button>
          )}
          {onSchedule && (
            <button className="button button-primary" onClick={onSchedule}>
              Schedule Appointment
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
