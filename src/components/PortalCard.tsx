"use client";

import type React from "react";
import type { ReactNode } from "react";

interface PortalCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
}

const PortalCard: React.FC<PortalCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div className="portal-card" onClick={onClick} style={{ cursor: "pointer" }}>
      <div className="portal-card-icon">{icon}</div>
      <h3 className="portal-card-title">{title}</h3>
      <p className="portal-card-description">{description}</p>
    </div>
  );
};

export default PortalCard;
