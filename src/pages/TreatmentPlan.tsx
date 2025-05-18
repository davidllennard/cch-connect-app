"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface TreatmentPlanProps {
  navigateTo: (page: PageType) => void
}

const TreatmentPlan: React.FC<TreatmentPlanProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("my-cancer")} />
        <h1>Treatment Plan</h1>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Multiple Myeloma Treatment Protocol</h2>
        </div>
        <div className="card-content">
          <div className="treatment-list">
            <div className="treatment-item">
              <div className="treatment-header">
                <h3>Induction Therapy</h3>
                <span className="badge badge-success">In Progress</span>
              </div>
              <p>RVd Regimen: Lenalidomide (Revlimid), Bortezomib (Velcade), and Dexamethasone</p>
              <p className="treatment-meta">Started on March 25, 2023 • 4 of 6 cycles completed</p>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: "66%" }}></div>
              </div>
              <p>
                <strong>Schedule:</strong> 21-day cycles
              </p>
              <ul>
                <li>Lenalidomide: 25mg orally on days 1-14</li>
                <li>Bortezomib: 1.3 mg/m² subcutaneously on days 1, 4, 8, and 11</li>
                <li>Dexamethasone: 20mg orally on days 1, 2, 4, 5, 8, 9, 11, and 12</li>
              </ul>
            </div>

            <div className="treatment-item">
              <div className="treatment-header">
                <h3>Stem Cell Collection</h3>
                <span className="badge badge-warning">Upcoming</span>
              </div>
              <p>Autologous stem cell collection for future transplant</p>
              <p className="treatment-meta">Scheduled for August 2023 (after induction therapy)</p>
            </div>

            <div className="treatment-item">
              <div className="treatment-header">
                <h3>Autologous Stem Cell Transplant</h3>
                <span className="badge badge-warning">Upcoming</span>
              </div>
              <p>High-dose chemotherapy followed by stem cell rescue</p>
              <p className="treatment-meta">Tentatively scheduled for September 2023</p>
            </div>

            <div className="treatment-item">
              <div className="treatment-header">
                <h3>Maintenance Therapy</h3>
                <span className="badge badge-warning">Upcoming</span>
              </div>
              <p>Lenalidomide (Revlimid) maintenance</p>
              <p className="treatment-meta">Planned to begin 100 days post-transplant</p>
              <p>
                <strong>Schedule:</strong> 10-15mg orally daily, continuous therapy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Supportive Care</h2>
        </div>
        <div className="card-content">
          <div className="supportive-care-list">
            <div className="supportive-care-item">
              <h3>Bone Health</h3>
              <p>Zoledronic acid (Zometa) 4mg IV every 3 months</p>
              <p>Calcium 1000mg and Vitamin D 2000 IU daily</p>
            </div>

            <div className="supportive-care-item">
              <h3>Infection Prevention</h3>
              <p>Acyclovir 400mg twice daily (herpes prophylaxis)</p>
              <p>Seasonal vaccinations as recommended</p>
            </div>

            <div className="supportive-care-item">
              <h3>Thrombosis Prevention</h3>
              <p>Aspirin 81mg daily (while on immunomodulatory drugs)</p>
            </div>

            <div className="supportive-care-item">
              <h3>Pain Management</h3>
              <p>As needed based on pain assessment</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Response Assessment</h2>
        </div>
        <div className="card-content">
          <div className="response-list">
            <div className="response-item">
              <h3>After Cycle 2</h3>
              <p>Date: April 30, 2023</p>
              <p>Result: Partial Response (PR)</p>
              <p>M-protein decreased from 2.8 g/dL to 1.2 g/dL</p>
            </div>

            <div className="response-item">
              <h3>After Cycle 4</h3>
              <p>Date: June 15, 2023</p>
              <p>Result: Very Good Partial Response (VGPR)</p>
              <p>M-protein decreased to 0.4 g/dL</p>
            </div>

            <div className="response-item">
              <h3>Next Assessment</h3>
              <p>Scheduled after completion of induction therapy</p>
              <p>Target: Complete Response (CR) or Very Good Partial Response (VGPR)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreatmentPlan
