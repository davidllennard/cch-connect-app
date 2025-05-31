"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface DiagnosisSummaryProps {
  navigateTo: (page: PageType) => void
  handleInactiveButton?: () => void
}

const DiagnosisSummary: React.FC<DiagnosisSummaryProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("my-cancer")} />
        <h1>Diagnosis Summary</h1>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Multiple Myeloma</h2>
        </div>
        <div className="card-content">
          <div className="diagnosis-details">
            <div className="diagnosis-item">
              <h3>Diagnosis Date</h3>
              <p>March 15, 2023</p>
            </div>
            <div className="diagnosis-item">
              <h3>Stage</h3>
              <p>Stage II</p>
            </div>
            <div className="diagnosis-item">
              <h3>Type</h3>
              <p>IgG Kappa</p>
            </div>
            <div className="diagnosis-item">
              <h3>Cytogenetics</h3>
              <p>t(11;14)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Key Diagnostic Tests</h2>
        </div>
        <div className="card-content">
          <div className="test-results">
            <div className="test-item">
              <h3>Bone Marrow Biopsy</h3>
              <p>30% plasma cells</p>
              <p className="test-date">March 10, 2023</p>
            </div>
            <div className="test-item">
              <h3>Serum Protein Electrophoresis</h3>
              <p>M-protein: 2.5 g/dL</p>
              <p className="test-date">March 8, 2023</p>
            </div>
            <div className="test-item">
              <h3>Skeletal Survey</h3>
              <p>Lytic lesions in skull and right femur</p>
              <p className="test-date">March 12, 2023</p>
            </div>
            <div className="test-item">
              <h3>Free Light Chain Assay</h3>
              <p>Kappa/Lambda ratio: 8.5</p>
              <p className="test-date">March 8, 2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Symptoms at Diagnosis</h2>
        </div>
        <div className="card-content">
          <ul className="symptom-list">
            <li>Bone pain (lower back and ribs)</li>
            <li>Fatigue</li>
            <li>Anemia (Hemoglobin 9.8 g/dL)</li>
            <li>Elevated calcium (11.2 mg/dL)</li>
            <li>Renal insufficiency (Creatinine 1.8 mg/dL)</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Risk Stratification</h2>
        </div>
        <div className="card-content">
          <p>
            <strong>R-ISS Stage:</strong> II
          </p>
          <p>
            <strong>Risk Category:</strong> Standard Risk
          </p>
          <p>
            <strong>Prognostic Factors:</strong> Presence of t(11;14), absence of high-risk cytogenetics
          </p>
        </div>
      </div>
    </div>
  )
}

export default DiagnosisSummary
