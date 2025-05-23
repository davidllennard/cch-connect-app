"use client";

import type React from "react";
import { useState } from "react";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español (Spanish)" },
  { code: "zh", name: "中文 (Chinese)" },
  { code: "hi", name: "हिन्दी (Hindi)" },
  { code: "ar", name: "العربية (Arabic)" },
  { code: "pt", name: "Português (Portuguese)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "ru", name: "Русский (Russian)" },
  { code: "ja", name: "日本語 (Japanese)" },
  { code: "fr", name: "Français (French)" },
  { code: "de", name: "Deutsch (German)" },
  { code: "ko", name: "한국어 (Korean)" },
  { code: "it", name: "Italiano (Italian)" },
  { code: "vi", name: "Tiếng Việt (Vietnamese)" },
  { code: "tr", name: "Türkçe (Turkish)" },
];

const LanguageSelector: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setCurrentLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <div className="language-button" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="20"
          height="20"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>{currentLanguage.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="16"
          height="16"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <div
              key={language.code}
              className={`language-option ${language.code === currentLanguage.code ? "active" : ""}`}
              onClick={() => handleLanguageChange(language)}
            >
              {language.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
