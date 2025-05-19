"use client"

import type React from "react"
import { useState } from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface ComedyHourProps {
  navigateTo: (page: PageType) => void
}

const comedyCategories = [
  "Stand-up Comedy",
  "Comedy Movies",
  "TV Sitcoms",
  "Sketch Comedy",
  "Improv Comedy",
  "Comedy Podcasts",
]

const ComedyHour: React.FC<ComedyHourProps> = ({ navigateTo }) => {
  const [activeCategory, setActiveCategory] = useState<string>("Stand-up Comedy")

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("entertainment-hub")} />
        <h1>Comedy Hour</h1>
      </div>
      <p className="page-description">Laugh and enjoy comedy content to brighten your day</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Comedy Categories</h2>
        </div>
        <div className="card-content">
          <div
            className="category-tabs"
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "10px",
              paddingBottom: "10px",
              marginBottom: "20px",
            }}
          >
            {comedyCategories.map((category, index) => (
              <button
                key={index}
                className={`category-tab ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: "10px 15px",
                  borderRadius: "20px",
                  border: "1px solid var(--border-color)",
                  backgroundColor: activeCategory === category ? "var(--primary-color)" : "var(--card-background)",
                  color: activeCategory === category ? "white" : "var(--text-color)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {activeCategory === "Stand-up Comedy" && (
            <div className="comedy-content">
              <div
                className="comedy-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "20px",
                }}
              >
                <div
                  className="comedy-item"
                  style={{
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="comedy-thumbnail"
                    style={{
                      height: "150px",
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "48px", height: "48px", opacity: "0.5" }}
                    >
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                  <div className="comedy-info" style={{ padding: "15px" }}>
                    <h3>John Mulaney: New in Town</h3>
                    <p>Stand-up comedy special featuring John Mulaney's hilarious observations on life.</p>
                    <button className="button button-primary" style={{ marginTop: "10px" }}>
                      Watch Now
                    </button>
                  </div>
                </div>

                <div
                  className="comedy-item"
                  style={{
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="comedy-thumbnail"
                    style={{
                      height: "150px",
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "48px", height: "48px", opacity: "0.5" }}
                    >
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                  <div className="comedy-info" style={{ padding: "15px" }}>
                    <h3>Ali Wong: Baby Cobra</h3>
                    <p>Ali Wong's breakthrough comedy special filmed while she was 7 months pregnant.</p>
                    <button className="button button-primary" style={{ marginTop: "10px" }}>
                      Watch Now
                    </button>
                  </div>
                </div>

                <div
                  className="comedy-item"
                  style={{
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="comedy-thumbnail"
                    style={{
                      height: "150px",
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "48px", height: "48px", opacity: "0.5" }}
                    >
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                  <div className="comedy-info" style={{ padding: "15px" }}>
                    <h3>Dave Chappelle: Sticks & Stones</h3>
                    <p>Dave Chappelle's fifth Netflix special featuring his unique comedic perspective.</p>
                    <button className="button button-primary" style={{ marginTop: "10px" }}>
                      Watch Now
                    </button>
                  </div>
                </div>

                <div
                  className="comedy-item"
                  style={{
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="comedy-thumbnail"
                    style={{
                      height: "150px",
                      backgroundColor: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "48px", height: "48px", opacity: "0.5" }}
                    >
                      <polygon points="23 7 16 12 23 17 23 7"></polygon>
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                    </svg>
                  </div>
                  <div className="comedy-info" style={{ padding: "15px" }}>
                    <h3>Hannah Gadsby: Nanette</h3>
                    <p>Hannah Gadsby's powerful comedy special that challenges the very form of stand-up comedy.</p>
                    <button className="button button-primary" style={{ marginTop: "10px" }}>
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeCategory !== "Stand-up Comedy" && (
            <div
              className="comedy-placeholder"
              style={{
                padding: "30px",
                textAlign: "center",
                border: "1px dashed var(--border-color)",
                borderRadius: "8px",
              }}
            >
              <h3>{activeCategory} content will be displayed here</h3>
              <p>Check back soon for more {activeCategory.toLowerCase()} content!</p>
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Laughter is the Best Medicine</h2>
        </div>
        <div className="card-content">
          <div
            className="quote-container"
            style={{
              padding: "20px",
              backgroundColor: "rgba(0,0,0,0.03)",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <p style={{ fontStyle: "italic", fontSize: "1.1rem" }}>
              "Laughter is the tonic, the relief, the surcease for pain."
            </p>
            <p style={{ textAlign: "right", marginTop: "10px" }}>— Charlie Chaplin</p>
          </div>

          <p>Research has shown that laughter can have positive effects on both physical and mental health:</p>
          <ul style={{ marginLeft: "20px", marginTop: "10px" }}>
            <li>Reduces stress hormones</li>
            <li>Boosts immune function</li>
            <li>Triggers the release of endorphins</li>
            <li>Improves mood and reduces anxiety</li>
            <li>Enhances resilience</li>
          </ul>

          <p style={{ marginTop: "20px" }}>
            Taking time to enjoy comedy can be an important part of your self-care routine during cancer treatment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ComedyHour
