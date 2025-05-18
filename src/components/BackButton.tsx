"use client"

import type React from "react"

interface BackButtonProps {
  onClick: () => void
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <div className="back-button" onClick={onClick} aria-label="Back to Medical Access Portal">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </div>
  )
}

export default BackButton
