"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import TeamMemberCard from "../components/TeamMemberCard"
import type { PageType } from "../App"

interface PalliativeCareProps {
  navigateTo: (page: PageType) => void
}

const PalliativeCare: React.FC<PalliativeCareProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Palliative Care</h1>
      </div>
      <p className="page-description">Access palliative care services</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">About Palliative Care</h2>
        </div>
        <div className="card-content">
          <p>
            Palliative care focuses on providing relief from the symptoms and stress of a serious illness. Our goal is
            to improve quality of life for both the patient and the family.
          </p>

          <h3>Services Include:</h3>
          <ul>
            <li>Pain management</li>
            <li>Symptom control</li>
            <li>Emotional support</li>
            <li>Spiritual support</li>
            <li>Coordination of care</li>
            <li>Advance care planning</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Palliative Care Team</h2>
        </div>
        <div className="card-content">
          <TeamMemberCard
            name="Dr. Rebecca Martinez"
            role="Palliative Care Physician"
            description="Specializes in pain management and symptom control"
            onSchedule={() => alert("Scheduling consultation with Dr. Rebecca Martinez")}
          />

          <TeamMemberCard
            name="Lisa Thompson"
            role="Palliative Care Nurse"
            description="Specializes in patient comfort and family support"
            onContact={() => alert("Requesting visit from Lisa Thompson")}
          />

          <TeamMemberCard
            name="David Wilson"
            role="Social Worker"
            description="Specializes in emotional support and resource coordination"
            onSchedule={() => alert("Scheduling meeting with David Wilson")}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Pain Management</h2>
        </div>
        <div className="card-content">
          <div className="pain-management">
            <h3>Current Pain Level</h3>
            <div className="pain-scale">
              <div className="pain-scale-labels">
                <span>No Pain</span>
                <span>Moderate</span>
                <span>Severe</span>
              </div>
              <div className="pain-scale-bar">
                <div className="pain-scale-fill" style={{ width: "40%" }}></div>
                <div className="pain-scale-marker" style={{ left: "40%" }}></div>
              </div>
              <div className="pain-scale-numbers">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
            </div>
            <button className="button button-primary">Update Pain Level</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PalliativeCare
