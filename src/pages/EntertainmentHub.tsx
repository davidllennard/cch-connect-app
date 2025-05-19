"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import PortalCard from "../components/PortalCard"
import type { PageType } from "../App"

interface EntertainmentHubProps {
  navigateTo: (page: PageType) => void
}

const EntertainmentHub: React.FC<EntertainmentHubProps> = ({ navigateTo }) => {
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

        {/* YouTube */}
        <PortalCard
          title="YouTube"
          description="Watch videos and tutorials"
          onClick={() => window.open("https://www.youtube.com", "_blank")}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF0000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#FF0000"></polygon>
            </svg>
          }
        />

        {/* Netflix */}
        <PortalCard
          title="Netflix"
          description="Watch movies and TV shows"
          onClick={() => window.open("https://www.netflix.com", "_blank")}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#E50914"
              stroke="#E50914"
              strokeWidth="0.2"
            >
              <path d="M5 2v20l7-15v15l7-20z" />
            </svg>
          }
        />

        {/* Spotify */}
        <PortalCard
          title="Spotify"
          description="Listen to music and podcasts"
          onClick={() => window.open("https://www.spotify.com", "_blank")}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#1DB954"
              stroke="#1DB954"
              strokeWidth="0.2"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.5 14.5c-.2.3-.6.4-1 .2-2.8-1.7-6.3-2-10.4-1.2-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 4.5-1 8.4-.6 11.5 1.4.4.3.5.7.2 1.1zm1.2-2.7c-.3.4-.8.5-1.2.3-3.2-2-8.1-2.6-11.9-1.4-.5.1-1-.1-1.2-.6-.1-.5.1-1 .6-1.2 4.4-1.3 9.8-.7 13.5 1.7.5.2.6.7.2 1.2zm.1-2.8c-3.8-2.3-10.1-2.5-13.8-1.4-.6.1-1.2-.2-1.3-.8-.1-.6.2-1.2.8-1.3 4.2-1.3 11.1-1 15.5 1.6.6.3.8 1.1.4 1.6-.2.4-1 .7-1.6.3z" />
            </svg>
          }
        />

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

        {/* Guided Meditation */}
        <PortalCard
          title="Guided Meditation"
          description="Relax and reduce stress"
          onClick={() => window.open("https://youtu.be/o8vsZQW0BbU?si=EBaBcTdalpfqum7u", "_blank")}
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

        {/* Nature Therapy */}
        <PortalCard
          title="Nature Therapy"
          description="Immerse yourself in calming natural environments"
          onClick={() => window.open("https://youtu.be/SHIXRwjjscY?si=Z6v9GDfjnavubEh6", "_blank")}
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
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          }
        />

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
  )
}

export default EntertainmentHub
