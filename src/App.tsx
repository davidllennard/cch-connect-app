"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import FooterNav from "./components/FooterNav"
import HomePage from "./pages/HomePage"
import OncologyPage from "./pages/OncologyPage"
import PalliativeCare from "./pages/PalliativeCare"
import NurseNavigation from "./pages/NurseNavigation"
import Caregivers from "./pages/Caregivers"
import MyCancer from "./pages/MyCancer"
import Telemedicine from "./pages/Telemedicine"
import MyChart from "./pages/MyChart"
import LabReports from "./pages/LabReports"
import SymptomTracker from "./pages/SymptomTracker"
import GroupChat from "./pages/GroupChat"
import ResearchPortal from "./pages/ResearchPortal"
import EntertainmentHub from "./pages/EntertainmentHub"
import MedicalProfile from "./pages/MedicalProfile"
import PillScheduler from "./pages/PillScheduler"
import CalendarHub from "./pages/CalendarHub"
import Profile from "./pages/Profile"
import PuzzlesAndGames from "./pages/PuzzlesAndGames"
import AskRupert from "./pages/AskRupert"
import DiagnosisSummary from "./pages/DiagnosisSummary"
import TreatmentPlan from "./pages/TreatmentPlan"
import MentalHealth from "./pages/MentalHealth"
import "./styles/index.css"

// Define page types for type safety
export type PageType =
  | "home"
  | "oncology"
  | "palliative-care"
  | "nurse-navigation"
  | "caregivers"
  | "my-cancer"
  | "telemedicine"
  | "mychart"
  | "lab-reports"
  | "symptom-tracker"
  | "group-chat"
  | "ai-chat-assistant"
  | "ask-rupert"
  | "research-portal"
  | "entertainment-hub"
  | "medical-profile"
  | "pill-scheduler"
  | "calendar-hub"
  | "profile"
  | "puzzles-and-games"
  | "diagnosis-summary"
  | "treatment-plan"
  | "mental-health"

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>("home")
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [password, setPassword] = useState<string>("")
  const [showPasswordModal, setShowPasswordModal] = useState<boolean>(true)

  useEffect(() => {
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

    if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
      setDarkMode(true)
      document.body.classList.add("dark-mode")
    } else {
      setDarkMode(false)
      document.body.classList.remove("dark-mode")
    }

    // Listen for changes in device color scheme preference
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setDarkMode(e.matches)
        if (e.matches) {
          document.body.classList.add("dark-mode")
        } else {
          document.body.classList.remove("dark-mode")
        }
      }
    }

    prefersDarkScheme.addEventListener("change", handleChange)

    return () => {
      prefersDarkScheme.removeEventListener("change", handleChange)
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.body.classList.add("dark-mode")
      localStorage.setItem("theme", "dark")
    } else {
      document.body.classList.remove("dark-mode")
      localStorage.setItem("theme", "light")
    }
  }

  // Navigation handler
  const navigateTo = (page: PageType) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const validatePassword = () => {
    if (password === "1234") {
      setIsAuthenticated(true)
      setShowPasswordModal(false)
    } else {
      alert("Incorrect password. Please try again.")
    }
  }

  // Add a function to handle inactive button clicks
  const handleInactiveButton = () => {
    alert("Not Functional")
  }

  // Render the current page based on state
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "oncology":
        return <OncologyPage navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "palliative-care":
        return <PalliativeCare navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "nurse-navigation":
        return <NurseNavigation navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "caregivers":
        return <Caregivers navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "my-cancer":
        return <MyCancer navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "telemedicine":
        return <Telemedicine navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "mychart":
        return <MyChart navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "lab-reports":
        return <LabReports navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "symptom-tracker":
        return <SymptomTracker navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "group-chat":
        return <GroupChat navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "ask-rupert":
        return <AskRupert navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "research-portal":
        return <ResearchPortal navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "entertainment-hub":
        return <EntertainmentHub navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "medical-profile":
        return <MedicalProfile navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "pill-scheduler":
        return <PillScheduler navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "calendar-hub":
        return <CalendarHub navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "profile":
        return <Profile navigateTo={navigateTo} />
      case "puzzles-and-games":
        return <PuzzlesAndGames navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "diagnosis-summary":
        return <DiagnosisSummary navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "treatment-plan":
        return <TreatmentPlan navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      case "mental-health":
        return <MentalHealth navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      default:
        return <HomePage navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
    }
  }

  return (
    <div className="app-container">
      {showPasswordModal && !isAuthenticated ? (
        <div className="password-modal">
          <div className="password-modal-content">
            <h2>Cancer Care Hub</h2>
            <p>Please enter your password to continue</p>
            <p className="password-hint">pw: 1234 for this demo</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <button className="button button-primary" onClick={validatePassword}>
              Login
            </button>
          </div>
        </div>
      ) : (
        <>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} navigateTo={navigateTo} />
          <main className="main-content">{renderCurrentPage()}</main>
          <FooterNav currentPage={currentPage} navigateTo={navigateTo} />
        </>
      )}
    </div>
  )
}

export default App
