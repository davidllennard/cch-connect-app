"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import PortalCard from "../components/PortalCard"
import type { PageType } from "../App"

interface EntertainmentHubProps {
  navigateTo: (page: PageType) => void
  handleInactiveButton?: () => void
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
          onClick={() => navigateTo("music-library")}
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
          onClick={() => navigateTo("photos-and-videos")}
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

        {/* Comedy Hour */}
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
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <h3 className="portal-card-title">Comedy Hour</h3>
          <p className="portal-card-description">Laugh with comedy specials and shows</p>
        </div>

        {/* Puzzles and Games */}
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
  )
}

export default EntertainmentHub
