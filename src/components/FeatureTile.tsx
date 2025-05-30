"use client";

import type React from "react";
import type { ReactNode } from "react";
// import "../styles/FeatureTile.css"

interface FeatureTileProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
}

const FeatureTile: React.FC<FeatureTileProps> = ({ title, description, icon, onClick }) => {
  return (
    <div className="feature-tile" onClick={onClick}>
      <div className="feature-tile-icon">{icon}</div>
      <h3 className="feature-tile-title">{title}</h3>
      <p className="feature-tile-description">{description}</p>
    </div>
  );
};

export default FeatureTile;
