"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import type { PageType } from "./_app";

interface TreatmentPlanProps {
  navigateTo: (page: PageType) => void;
  handleInactiveButton?: () => void;
}

const TreatmentPlan: React.FC<TreatmentPlanProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("my-cancer")} />
        <h1>Treatment Plan</h1>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Current Treatment Protocol</h2>
        </div>
        <div className="card-content">
          <div className="treatment-phase">
            <h3>Induction Therapy</h3>
            <p>
              <strong>Regimen:</strong> RVd (Lenalidomide, Bortezomib, Dexamethasone)
            </p>
            <p>
              <strong>Duration:</strong> 4 cycles (28 days each)
            </p>
            <p>
              <strong>Start Date:</strong> April 1, 2023
            </p>
            <p>
              <strong>Current Cycle:</strong> 3 of 4
            </p>
            <p>
              <strong>Response Assessment:</strong> Partial response after cycle 2
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Planned Next Steps</h2>
        </div>
        <div className="card-content">
          <div className="treatment-phase">
            <h3>Stem Cell Collection</h3>
            <p>
              <strong>Planned Date:</strong> August 2023
            </p>
            <p>
              <strong>Mobilization:</strong> G-CSF + Plerixafor
            </p>
          </div>
          <div className="treatment-phase">
            <h3>Autologous Stem Cell Transplant</h3>
            <p>
              <strong>Conditioning:</strong> High-dose Melphalan
            </p>
            <p>
              <strong>Planned Date:</strong> September 2023
            </p>
          </div>
          <div className="treatment-phase">
            <h3>Maintenance Therapy</h3>
            <p>
              <strong>Regimen:</strong> Lenalidomide
            </p>
            <p>
              <strong>Duration:</strong> Until progression
            </p>
            <p>
              <strong>Planned Start:</strong> November 2023
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Supportive Care</h2>
        </div>
        <div className="card-content">
          <ul className="supportive-care-list">
            <li>
              <strong>Bone Health:</strong> Zoledronic acid monthly
            </li>
            <li>
              <strong>Infection Prevention:</strong> Acyclovir, Fluconazole
            </li>
            <li>
              <strong>Thrombosis Prevention:</strong> Aspirin daily
            </li>
            <li>
              <strong>Pain Management:</strong> As needed
            </li>
            <li>
              <strong>Nutritional Support:</strong> Consultation with dietitian
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Response Monitoring</h2>
        </div>
        <div className="card-content">
          <div className="monitoring-schedule">
            <div className="monitoring-item">
              <h3>Blood Tests</h3>
              <p>Complete blood count, chemistry panel, serum protein electrophoresis</p>
              <p>
                <strong>Frequency:</strong> Every 2 weeks during induction, monthly during maintenance
              </p>
            </div>
            <div className="monitoring-item">
              <h3>Bone Marrow Biopsy</h3>
              <p>
                <strong>Next Scheduled:</strong> After cycle 4 of induction
              </p>
            </div>
            <div className="monitoring-item">
              <h3>Imaging</h3>
              <p>PET/CT scan</p>
              <p>
                <strong>Next Scheduled:</strong> After cycle 4 of induction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentPlan;
