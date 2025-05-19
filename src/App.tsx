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
import "./styles/index.css"

// Update the imports to include all new pages
import AskRupert from "./pages/AskRupert"
import MentalHealth from "./pages/MentalHealth"
import DiagnosisSummary from "./pages/DiagnosisSummary"
import TreatmentPlan from "./pages/TreatmentPlan"
import ClinicalTrialsByCountry from "./pages/ClinicalTrialsByCountry"
import DeepResearch from "./pages/DeepResearch"
import ComedyHour from "./pages/ComedyHour"

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
  | "ask-rupert"
  | "research-portal"
  | "entertainment-hub"
  | "medical-profile"
  | "pill-scheduler"
  | "calendar-hub"
  | "mental-health"
  | "diagnosis-summary"
  | "treatment-plan"
  | "clinical-trials-by-country"
  | "deep-research"
  | "comedy-hour"

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>("home")
  const [darkMode, setDarkMode] = useState<boolean>(false)

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

  // Update the renderCurrentPage function to include all new routes
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigateTo={navigateTo} />
      case "oncology":
        return <OncologyPage navigateTo={navigateTo} />
      case "palliative-care":
        return <PalliativeCare navigateTo={navigateTo} />
      case "nurse-navigation":
        return <NurseNavigation navigateTo={navigateTo} />
      case "caregivers":
        return <Caregivers navigateTo={navigateTo} />
      case "my-cancer":
        return <MyCancer navigateTo={navigateTo} />
      case "telemedicine":
        return <Telemedicine navigateTo={navigateTo} />
      case "mychart":
        return <MyChart navigateTo={navigateTo} />
      case "lab-reports":
        return <LabReports navigateTo={navigateTo} />
      case "symptom-tracker":
        return <SymptomTracker navigateTo={navigateTo} />
      case "group-chat":
        return <GroupChat navigateTo={navigateTo} />
      case "ask-rupert":
        return <AskRupert navigateTo={navigateTo} />
      case "research-portal":
        return <ResearchPortal navigateTo={navigateTo} />
      case "entertainment-hub":
        return <EntertainmentHub navigateTo={navigateTo} />
      case "medical-profile":
        return <MedicalProfile navigateTo={navigateTo} />
      case "pill-scheduler":
        return <PillScheduler navigateTo={navigateTo} />
      case "calendar-hub":
        return <CalendarHub navigateTo={navigateTo} />
      case "mental-health":
        return <MentalHealth navigateTo={navigateTo} />
      case "diagnosis-summary":
        return <DiagnosisSummary navigateTo={navigateTo} />
      case "treatment-plan":
        return <TreatmentPlan navigateTo={navigateTo} />
      case "clinical-trials-by-country":
        return <ClinicalTrialsByCountry navigateTo={navigateTo} />
      case "deep-research":
        return <DeepResearch navigateTo={navigateTo} />
      case "comedy-hour":
        return <ComedyHour navigateTo={navigateTo} />
      default:
        return <HomePage navigateTo={navigateTo} />
    }
  }

  return (
    <div className="app-container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} navigateTo={navigateTo} />
      <main className="main-content">{renderCurrentPage()}</main>
      <FooterNav currentPage={currentPage} navigateTo={navigateTo} />
    </div>
  )
}

export default App
