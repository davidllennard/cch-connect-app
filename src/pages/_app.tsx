"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import FooterNav from "../components/FooterNav";
// import HomePage from ".";
// import OncologyPage from "./OncologyPage";
// import PalliativeCare from "./PalliativeCare";
// import NurseNavigation from "./NurseNavigation";
// import Caregivers from "./Caregivers";
// import Telemedicine from "./Telemedicine";
// import MyChart from "./MyChart";
// import LabReports from "./LabReports";
// import SymptomTracker from "./SymptomTracker";
// import GroupChat from "./GroupChat";
// import ResearchPortal from "./ResearchPortal";
// import EntertainmentHub from "./EntertainmentHub";
// import MedicalProfile from "./MedicalProfile";
// import PillScheduler from "./PillScheduler";
// import CalendarHub from "./CalendarHub";
// import Profile from "./Profile";
// import PuzzlesAndGames from "./PuzzlesAndGames";
// import AskRupert from "./AskRupert";
// import DiagnosisSummary from "./DiagnosisSummary";
// import TreatmentPlan from "./TreatmentPlan";
// import MentalHealth from "./MentalHealth";
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/PageTemplate.css";
import { useRouter, usePathname } from "next/navigation";
// import MyCancer from "./my-cancer";
import type { AppProps } from "next/app";

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
  | "medications"
  | "billing";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (savedTheme === "dark" || (!savedTheme && prefersDarkScheme.matches)) {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark-mode");
    }

    // Listen for changes in device color scheme preference
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setDarkMode(e.matches);
        if (e.matches) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      }
    };

    prefersDarkScheme.addEventListener("change", handleChange);

    return () => {
      prefersDarkScheme.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  // Navigation handler
  const navigateTo = (page: PageType) => {
    if (page === "home") {
      router.push("/");
    } else {
      router.push(`/${page}`);
    }
  };

  // Add a function to handle inactive button clicks
  const handleInactiveButton = () => {
    alert("Not Functional");
  };

  // Get current page from pathname
  const getCurrentPage = (): PageType => {
    const path = pathname?.slice(1) || "home";
    return path as PageType;
  };

  return (
    <div className="app-container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} navigateTo={navigateTo} />
      <main className="main-content">
        <Component {...pageProps} navigateTo={navigateTo} handleInactiveButton={handleInactiveButton} />
      </main>
      <FooterNav currentPage={getCurrentPage()} navigateTo={navigateTo} />
    </div>
  );
};

export default App;
