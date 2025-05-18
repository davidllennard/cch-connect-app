"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface DiagnosisSummaryProps {
  navigateTo: (page: PageType) => void
}

const DiagnosisSummary: React.FC<DiagnosisSummaryProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("my-cancer")} />
        <h1>Diagnosis Summary</h1>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Multiple Myeloma Diagnosis</h2>
        </div>
        <div className="card-content">
          <div className="diagnosis-grid">
            <div className="diagnosis-column">
              <div className="diagnosis-item">
                <h3>Cancer Type</h3>
                <p>Multiple Myeloma (Plasma Cell Myeloma)</p>
              </div>

              <div className="diagnosis-item">
                <h3>Diagnosis Date</h3>
                <p>March 12, 2023</p>
              </div>

              <div className="diagnosis-item">
                <h3>Stage</h3>
                <p>Stage II (ISS Staging System)</p>
              </div>

              <div className="diagnosis-item">
                <h3>Risk Stratification</h3>
                <p>Standard Risk</p>
              </div>
            </div>

            <div className="diagnosis-column">
              <div className="diagnosis-item">
                <h3>Cytogenetics</h3>
                <p>
                  t(11;14) translocation detected
                  <br />
                  No high-risk abnormalities
                </p>
              </div>

              <div className="diagnosis-item">
                <h3>Laboratory Values at Diagnosis</h3>
                <p>
                  M-protein: 2.8 g/dL
                  <br />
                  Hemoglobin: 10.2 g/dL
                  <br />
                  Calcium: 10.8 mg/dL
                  <br />
                  Creatinine: 1.2 mg/dL
                  <br />
                  Beta-2 microglobulin: 4.2 mg/L
                </p>
              </div>

              <div className="diagnosis-item">
                <h3>Bone Involvement</h3>
                <p>Multiple lytic lesions in skull, spine, and pelvis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Diagnostic Procedures</h2>
        </div>
        <div className="card-content">
          <div className="procedure-list">
            <div className="procedure-item">
              <h3>Bone Marrow Biopsy</h3>
              <p>Date: March 5, 2023</p>
              <p>Result: 35% plasma cells in bone marrow</p>
            </div>

            <div className="procedure-item">
              <h3>Serum Protein Electrophoresis (SPEP)</h3>
              <p>Date: March 3, 2023</p>
              <p>Result: IgG kappa monoclonal protein detected</p>
            </div>

            <div className="procedure-item">
              <h3>Skeletal Survey</h3>
              <p>Date: March 4, 2023</p>
              <p>Result: Multiple lytic lesions detected in skull, spine, and pelvis</p>
            </div>

            <div className="procedure-item">
              <h3>PET/CT Scan</h3>
              <p>Date: March 7, 2023</p>
              <p>Result: Increased uptake in multiple bone lesions, no extramedullary disease</p>
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
            <li>Bone pain (particularly in back and ribs)</li>
            <li>Fatigue</li>
            <li>Unexplained weight loss (15 lbs over 3 months)</li>
            <li>Recurrent infections</li>
            <li>Mild anemia symptoms</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DiagnosisSummary
