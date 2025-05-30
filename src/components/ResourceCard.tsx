"use client";

import type React from "react";
// import "../styles/ResourceCard.css"

interface ResourceCardProps {
  title: string;
  description: string;
  onView: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, onView }) => {
  return (
    <div className="resource-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="button button-outline" onClick={onView}>
        Learn More
      </button>
    </div>
  );
};

export default ResourceCard;
