"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import TeamMemberCard from "../components/TeamMemberCard"
import type { PageType } from "../App"

interface OncologyPageProps {
  navigateTo: (page: PageType) => void
  handleInactiveButton?: () => void
}

const OncologyPage: React.FC<OncologyPageProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("my-cancer")} />
        <h1>Oncology Team</h1>
      </div>

      <div className="team-grid">
        <TeamMemberCard
          name="Dr. Sarah Johnson"
          role="Medical Oncologist"
          specialty="Multiple Myeloma Specialist"
          imageUrl="/placeholder.svg?height=150&width=150"
          contactInfo={{
            email: "sarah.johnson@hospital.org",
            phone: "(555) 123-4567",
            office: "Cancer Center, Floor 3, Room 302",
          }}
          availability="Mon, Wed, Fri: 9am-5pm"
        />

        <TeamMemberCard
          name="Dr. Michael Chen"
          role="Hematologist"
          specialty="Blood Disorders"
          imageUrl="/placeholder.svg?height=150&width=150"
          contactInfo={{
            email: "michael.chen@hospital.org",
            phone: "(555) 123-4568",
            office: "Cancer Center, Floor 3, Room 310",
          }}
          availability="Tue, Thu: 8am-4pm"
        />

        <TeamMemberCard
          name="Dr. Lisa Rodriguez"
          role="Radiation Oncologist"
          specialty="Targeted Radiation Therapy"
          imageUrl="/placeholder.svg?height=150&width=150"
          contactInfo={{
            email: "lisa.rodriguez@hospital.org",
            phone: "(555) 123-4569",
            office: "Cancer Center, Floor 2, Room 215",
          }}
          availability="Mon, Wed, Fri: 10am-6pm"
        />

        <TeamMemberCard
          name="Dr. James Wilson"
          role="Surgical Oncologist"
          specialty="Minimally Invasive Procedures"
          imageUrl="/placeholder.svg?height=150&width=150"
          contactInfo={{
            email: "james.wilson@hospital.org",
            phone: "(555) 123-4570",
            office: "Cancer Center, Floor 4, Room 405",
          }}
          availability="Tue, Thu: 7am-3pm"
        />

        <TeamMemberCard
          name="Amanda Thompson"
          role="Oncology Nurse Practitioner"
          specialty="Patient Education & Symptom Management"
          imageUrl="/placeholder.svg?height=150&width=150"
          contactInfo={{
            email: "amanda.thompson@hospital.org",
            phone: "(555) 123-4571",
            office: "Cancer Center, Floor 3, Room 315",
          }}
          availability="Mon-Fri: 8am-4pm"
        />

        <TeamMemberCard
          name="Robert Davis"
          role="Oncology Pharmacist"
          specialty="Chemotherapy & Medication Management"
          imageUrl="/placeholder.svg?height=150&width=150"
          contactInfo={{
            email: "robert.davis@hospital.org",
            phone: "(555) 123-4572",
            office: "Cancer Center, Floor 1, Room 120",
          }}
          availability="Mon-Fri: 9am-5pm"
        />
      </div>
    </div>
  )
}

export default OncologyPage
