"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import TeamMemberCard from "../components/TeamMemberCard"
import AppointmentCard from "../components/AppointmentCard"
import type { PageType } from "../App"

interface OncologyPageProps {
  navigateTo: (page: PageType) => void
}

const OncologyPage: React.FC<OncologyPageProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Oncology</h1>
      </div>
      {/* Removed page description */}

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Oncology Team</h2>
        </div>
        <div className="card-content">
          <TeamMemberCard
            name="Dr. Emily Johnson"
            role="Medical Oncologist"
            description="Specializes in breast and colorectal cancers"
            onSchedule={() => alert("Scheduling appointment with Dr. Emily Johnson")}
          />

          <TeamMemberCard
            name="Dr. Michael Chen"
            role="Radiation Oncologist"
            description="Specializes in precision radiation therapy"
            onSchedule={() => alert("Scheduling appointment with Dr. Michael Chen")}
          />

          <TeamMemberCard
            name="Dr. Sarah Williams"
            role="Surgical Oncologist"
            description="Specializes in minimally invasive surgical techniques"
            onSchedule={() => alert("Scheduling appointment with Dr. Sarah Williams")}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Upcoming Appointments</h2>
        </div>
        <div className="card-content">
          <AppointmentCard
            month="May"
            date="20"
            year="2023"
            title="Oncology Follow-up"
            doctor="Dr. Emily Johnson"
            location="Memorial Cancer Center, Suite 300"
            time="10:00 AM"
            onReschedule={() => alert("Rescheduling appointment")}
            onCancel={() => alert("Cancelling appointment")}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Treatment Plan</h2>
        </div>
        <div className="card-content">
          <div className="treatment-list">
            <div className="treatment-item">
              <div className="treatment-header">
                <h3>Chemotherapy</h3>
                <span className="badge badge-success">In Progress</span>
              </div>
              <p>AC-T Regimen (Adriamycin, Cyclophosphamide, followed by Taxol)</p>
              <p className="treatment-meta">Started on March 15, 2023 • 2 of 8 cycles completed</p>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: "25%" }}></div>
              </div>
            </div>

            <div className="treatment-item">
              <div className="treatment-header">
                <h3>Radiation Therapy</h3>
                <span className="badge badge-warning">Upcoming</span>
              </div>
              <p>External Beam Radiation</p>
              <p className="treatment-meta">Scheduled to begin July 10, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OncologyPage
