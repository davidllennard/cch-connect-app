"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import AppointmentCard from "../components/AppointmentCard";
import TeamMemberCard from "../components/TeamMemberCard";
import type { PageType } from "./_app";
// import "../styles/PageTemplate.css"

interface TelemedicineProps {
  navigateTo: (page: PageType) => void;
}

const Telemedicine: React.FC<TelemedicineProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Telemedicine</h1>
      </div>
      <p className="page-description">Virtual appointments with your providers</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Upcoming Virtual Appointments</h2>
        </div>
        <div className="card-content">
          <AppointmentCard
            month="May"
            date="18"
            year="2023"
            title="Virtual Check-in"
            doctor="Dr. Emily Johnson"
            location="Video Conference"
            time="2:00 PM"
            isVirtual={true}
            onJoin={() => alert("Joining virtual appointment")}
            onReschedule={() => alert("Rescheduling appointment")}
            onCancel={() => alert("Cancelling appointment")}
          />

          <AppointmentCard
            month="May"
            date="25"
            year="2023"
            title="Nutrition Consultation"
            doctor="Maria Rodriguez, RD"
            location="Video Conference"
            time="11:00 AM"
            isVirtual={true}
            onJoin={() => alert("Joining virtual appointment")}
            onReschedule={() => alert("Rescheduling appointment")}
            onCancel={() => alert("Cancelling appointment")}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Schedule a Virtual Appointment</h2>
        </div>
        <div className="card-content">
          <div className="provider-list">
            <TeamMemberCard
              name="Dr. Emily Johnson"
              role="Medical Oncologist"
              onSchedule={() => alert("Scheduling virtual appointment with Dr. Emily Johnson")}
            />

            <TeamMemberCard
              name="Dr. Michael Chen"
              role="Radiation Oncologist"
              onSchedule={() => alert("Scheduling virtual appointment with Dr. Michael Chen")}
            />

            <TeamMemberCard
              name="Jennifer Adams, RN"
              role="Oncology Nurse Navigator"
              onSchedule={() => alert("Scheduling virtual appointment with Jennifer Adams")}
            />

            <TeamMemberCard
              name="Maria Rodriguez, RD"
              role="Registered Dietitian"
              onSchedule={() => alert("Scheduling virtual appointment with Maria Rodriguez")}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Technical Requirements</h2>
        </div>
        <div className="card-content">
          <ul className="requirements-list">
            <li>Stable internet connection</li>
            <li>Device with camera and microphone (smartphone, tablet, or computer)</li>
            <li>Quiet, private location for your appointment</li>
            <li>Chrome, Firefox, or Safari browser (if using a computer)</li>
          </ul>
          <button className="button button-primary">Test Your Connection</button>
        </div>
      </div>
    </div>
  );
};

export default Telemedicine;
