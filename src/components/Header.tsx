"use client";

import type React from "react";
import ThemeToggle from "./ThemeToggle";
import type { PageType } from "../pages/_app";

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  navigateTo: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode, navigateTo }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo" onClick={() => navigateTo("home")}>
          Cancer Care Hub
        </div>
        <div className="tagline">Where your dignity matters</div>
      </div>
      <div className="header-controls">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </header>
  );
};

export default Header;
