"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"
import "../styles/PageTemplate.css"

interface ResearchPortalProps {
  navigateTo: (page: PageType) => void
}

interface PortalCardProps {
  title: string
  description: string
  onClick: () => void
  icon: React.ReactNode
}

const PortalCard: React.FC<PortalCardProps> = ({ title, description, onClick, icon }) => {
  return (
    <div className="portal-card" onClick={onClick}>
      <div className="portal-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

const ResearchPortal: React.FC<ResearchPortalProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Research Portal</h1>
      </div>
      <p className="page-description">Access clinical trials and research information</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Clinical Trials</h2>
        </div>
        <div className="card-content">
          <div className="trial-list">
            <div className="trial-item">
              <h3>FOLFOXIRI Plus Bevacizumab for Metastatic Colorectal Cancer</h3>
              <div className="trial-meta">
                <span className="badge badge-primary">Phase 3</span>
                <span className="badge badge-success">Recruiting</span>
              </div>
              <p>
                This study evaluates the effectiveness of FOLFOXIRI plus bevacizumab compared to standard FOLFOX plus
                bevacizumab in patients with metastatic colorectal cancer.
              </p>
              <div className="trial-details">
                <div className="trial-detail">
                  <strong>Location:</strong> Memorial Cancer Center
                </div>
                <div className="trial-detail">
                  <strong>Principal Investigator:</strong> Dr. Michael Chen
                </div>
                <div className="trial-detail">
                  <strong>Identifier:</strong> NCT12345678
                </div>
              </div>
              <button className="button button-primary">Learn More</button>
            </div>

            <div className="trial-item">
              <h3>Immunotherapy for MSI-High Colorectal Cancer</h3>
              <div className="trial-meta">
                <span className="badge badge-primary">Phase 2</span>
                <span className="badge badge-success">Recruiting</span>
              </div>
              <p>
                This study evaluates the effectiveness of pembrolizumab in patients with microsatellite instability-high
                (MSI-H) colorectal cancer.
              </p>
              <div className="trial-details">
                <div className="trial-detail">
                  <strong>Location:</strong> Memorial Cancer Center
                </div>
                <div className="trial-detail">
                  <strong>Principal Investigator:</strong> Dr. Emily Johnson
                </div>
                <div className="trial-detail">
                  <strong>Identifier:</strong> NCT87654321
                </div>
              </div>
              <button className="button button-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Research Articles</h2>
        </div>
        <div className="card-content">
          <div className="article-list">
            <div className="article-item">
              <h3>Advances in Colorectal Cancer Treatment: A Review</h3>
              <p>
                This review article summarizes recent advances in the treatment of colorectal cancer, including targeted
                therapies, immunotherapies, and novel chemotherapy regimens.
              </p>
              <div className="article-meta">
                <span>Journal of Clinical Oncology, 2023</span>
              </div>
              <button className="button button-outline">Read Article</button>
            </div>

            <div className="article-item">
              <h3>Quality of Life in Colorectal Cancer Survivors</h3>
              <p>
                This study examines the long-term quality of life in colorectal cancer survivors and identifies factors
                associated with better outcomes.
              </p>
              <div className="article-meta">
                <span>Cancer Survivorship Journal, 2022</span>
              </div>
              <button className="button button-outline">Read Article</button>
            </div>

            <div className="article-item">
              <h3>Nutrition and Colorectal Cancer: Current Evidence</h3>
              <p>
                This article reviews the current evidence on the role of nutrition in colorectal cancer prevention and
                treatment.
              </p>
              <div className="article-meta">
                <span>Nutrition and Cancer, 2023</span>
              </div>
              <button className="button button-outline">Read Article</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Research Resources</h2>
        </div>
        <div className="card-content">
          <div className="portal-grid" style={{ marginBottom: "20px" }}>
            <PortalCard
              title="Clinical Trials By Country"
              description="Find trials in your region"
              onClick={() => navigateTo("clinical-trials-by-country")}
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              }
            />

            <PortalCard
              title="Deep Research"
              description="Advanced scientific resources"
              onClick={() => navigateTo("deep-research")}
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
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchPortal
