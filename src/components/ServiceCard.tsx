import type React from "react"
import type { ReactNode } from "react"
import "../styles/ServiceCard.css"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="service-item">
      <div className="service-icon">{icon}</div>
      <div className="service-details">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
