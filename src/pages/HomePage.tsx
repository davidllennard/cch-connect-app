"use client";

import type React from "react";
import PortalCard from "../components/PortalCard";
import LanguageSelector from "../components/LanguageSelector";
import type { PageType } from "../App";
import { portalCards } from "../data/home";

interface HomePageProps {
  navigateTo: (page: PageType) => void;
  handleInactiveButton?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo, handleInactiveButton }) => {
  const handleCardClick = (page: PageType) => {
    navigateTo(page);
  };

  return (
    <div className="container home-container">
      <div className="portal-header">
        <h1 className="portal-title">Medical Access Portal</h1>
      </div>

      <div className="portal-grid">
        {portalCards.map((card) => (
          <PortalCard
            key={card.title}
            title={card.title}
            description={card.description}
            onClick={() => handleCardClick(card.page)}
            icon={card.icon}
          />
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default HomePage;
