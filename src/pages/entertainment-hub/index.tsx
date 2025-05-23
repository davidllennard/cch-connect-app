"use client";

import type React from "react";
import BackButton from "../../components/BackButton";
import PortalCard from "../../components/PortalCard";
import type { PageType } from "../_app";

interface EntertainmentHubProps {
  navigateTo: (page: PageType) => void;
  handleInactiveButton?: () => void;
}

const EntertainmentHub: React.FC<EntertainmentHubProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Entertainment Hub</h1>
      </div>

      <div className="portal-grid">
        {/* Create */}
        <PortalCard
          title="Create"
          description="Compose a song, write a book, or describe a scene and bring it to life!"
          onClick={() => alert("Opening creative tools...")}
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
              <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
              <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
              <path d="M2 2l7.586 7.586"></path>
              <circle cx="11" cy="11" r="2"></circle>
            </svg>
          }
        />

        {/* Streaming Services */}
        <div className="portal-card" onClick={handleInactiveButton} style={{ cursor: "pointer" }}>
          <div className="portal-card-icon">
            <img src="/youtube-logo.png" alt="YouTube" style={{ width: "24px", height: "24px" }} />
          </div>
          <h3 className="portal-card-title">YouTube</h3>
          <p className="portal-card-description">Watch videos and tutorials</p>
        </div>

        <div className="portal-card" onClick={handleInactiveButton} style={{ cursor: "pointer" }}>
          <div className="portal-card-icon">
            <img src="/netflix-logo.png" alt="Netflix" style={{ width: "24px", height: "24px" }} />
          </div>
          <h3 className="portal-card-title">Netflix</h3>
          <p className="portal-card-description">Stream movies and shows</p>
        </div>

        <div className="portal-card" onClick={handleInactiveButton} style={{ cursor: "pointer" }}>
          <div className="portal-card-icon">
            <img src="/spotify-logo.png" alt="Spotify" style={{ width: "24px", height: "24px" }} />
          </div>
          <h3 className="portal-card-title">Spotify</h3>
          <p className="portal-card-description">Listen to music and podcasts</p>
        </div>

        {/* Your Music Library */}
        <PortalCard
          title="Your Music Library"
          description="On your device"
          onClick={() => alert("Opening Music Library...")}
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
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
          }
        />

        {/* Photos and Videos */}
        <PortalCard
          title="Photos and Videos"
          description="On your device"
          onClick={() => alert("Opening Photos and Videos...")}
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
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          }
        />

        {/* Nature Therapy */}
        <div className="portal-card" onClick={handleInactiveButton} style={{ cursor: "pointer" }}>
          <div className="portal-card-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
            </svg>
          </div>
          <h3 className="portal-card-title">Nature Therapy</h3>
          <p className="portal-card-description">Relax with nature sounds and scenes</p>
        </div>

        {/* Guided Meditation */}
        <div className="portal-card" onClick={handleInactiveButton} style={{ cursor: "pointer" }}>
          <div className="portal-card-icon">
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
          </div>
          <h3 className="portal-card-title">Guided Meditation</h3>
          <p className="portal-card-description">Follow guided meditation sessions</p>
        </div>

        {/* Podcasts */}
        <PortalCard
          title="Today's Puzzles and Games"
          description="Challenge your mind with puzzles and games"
          onClick={() => navigateTo("puzzles-and-games")}
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
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default EntertainmentHub;
