"use client";

import type React from "react";
import BackButton from "../../components/BackButton";
import type { PageType } from "../_app";

interface ResearchPortalProps {
  navigateTo: (page: PageType) => void;
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
    </div>
  );
};

export default ResearchPortal;
