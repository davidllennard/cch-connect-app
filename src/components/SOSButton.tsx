"use client"

import type React from "react"

const SOSButton: React.FC = () => {
  const handleSOSClick = () => {
    alert("Emergency SOS activated. Help is on the way.")
    // In a real application, this would trigger an emergency response
  }

  return (
    <button className="sos-button" onClick={handleSOSClick} aria-label="Emergency SOS">
      <span>SOS</span>
    </button>
  )
}

export default SOSButton
