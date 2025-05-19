"use client"

import type React from "react"
import { useState } from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface ClinicalTrialsByCountryProps {
  navigateTo: (page: PageType) => void
}

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Australia",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "South Korea",
  "Israel",
  "Switzerland",
  "Netherlands",
  "Belgium",
  "Sweden",
  "Denmark",
  "Norway",
  "Finland",
  "Austria",
  "Poland",
  "Russia",
  "Turkey",
  "South Africa",
  "Argentina",
  "Chile",
  "Colombia",
  "Peru",
  "New Zealand",
  "Singapore",
  "Thailand",
  "Malaysia",
  "Philippines",
  "Indonesia",
  "Vietnam",
  "Egypt",
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Jordan",
  "Lebanon",
  "Greece",
  "Portugal",
  "Ireland",
  "Czech Republic",
  "Hungary",
]

const ClinicalTrialsByCountry: React.FC<ClinicalTrialsByCountryProps> = ({ navigateTo }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("United States")
  const [searchTerm, setSearchTerm] = useState<string>("")

  const filteredCountries = countries.filter((country) => country.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("research-portal")} />
        <h1>Clinical Trials By Country</h1>
      </div>
      <p className="page-description">Find clinical trials available in different countries</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Select a Country</h2>
        </div>
        <div className="card-content">
          <div className="search-container" style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              style={{ marginBottom: "10px" }}
            />
            <div
              className="country-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "10px",
                maxHeight: "300px",
                overflowY: "auto",
                padding: "10px",
                border: "1px solid var(--border-color)",
                borderRadius: "4px",
              }}
            >
              {filteredCountries.map((country, index) => (
                <div
                  key={index}
                  className={`country-item ${selectedCountry === country ? "selected" : ""}`}
                  onClick={() => setSelectedCountry(country)}
                  style={{
                    padding: "10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    backgroundColor: selectedCountry === country ? "var(--primary-color)" : "var(--card-background)",
                    color: selectedCountry === country ? "white" : "var(--text-color)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  {country}
                </div>
              ))}
            </div>
          </div>
          <button
            className="button button-primary"
            onClick={() => alert(`Searching for clinical trials in ${selectedCountry}...`)}
          >
            Find Trials in {selectedCountry}
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Clinical Trials in {selectedCountry}</h2>
        </div>
        <div className="card-content">
          <div className="trial-list">
            <div className="trial-item">
              <h3>Multiple Myeloma Treatment with Novel Immunotherapy</h3>
              <div className="trial-meta">
                <span className="badge badge-primary">Phase 2</span>
                <span className="badge badge-success">Recruiting</span>
              </div>
              <p>
                This study evaluates the effectiveness of a novel immunotherapy approach for patients with relapsed or
                refractory multiple myeloma.
              </p>
              <div className="trial-details">
                <div className="trial-detail">
                  <strong>Location:</strong>{" "}
                  {selectedCountry === "United States"
                    ? "Mayo Clinic, Rochester, MN"
                    : `Medical Center, ${selectedCountry}`}
                </div>
                <div className="trial-detail">
                  <strong>Principal Investigator:</strong> Dr. Sarah Johnson
                </div>
                <div className="trial-detail">
                  <strong>Identifier:</strong> NCT04567890
                </div>
              </div>
              <button className="button button-primary">Learn More</button>
            </div>

            <div className="trial-item">
              <h3>CAR-T Cell Therapy for Multiple Myeloma</h3>
              <div className="trial-meta">
                <span className="badge badge-primary">Phase 3</span>
                <span className="badge badge-success">Recruiting</span>
              </div>
              <p>
                This study compares the effectiveness of CAR-T cell therapy versus standard treatment in patients with
                multiple myeloma.
              </p>
              <div className="trial-details">
                <div className="trial-detail">
                  <strong>Location:</strong>{" "}
                  {selectedCountry === "United States"
                    ? "Dana-Farber Cancer Institute, Boston, MA"
                    : `University Hospital, ${selectedCountry}`}
                </div>
                <div className="trial-detail">
                  <strong>Principal Investigator:</strong> Dr. Michael Chen
                </div>
                <div className="trial-detail">
                  <strong>Identifier:</strong> NCT05123456
                </div>
              </div>
              <button className="button button-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClinicalTrialsByCountry
