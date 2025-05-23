"use client";

import type React from "react";
// import "../styles/AppointmentCard.css"

interface AppointmentCardProps {
  date: string;
  month: string;
  year: string;
  title: string;
  doctor: string;
  location: string;
  time: string;
  onReschedule?: () => void;
  onCancel?: () => void;
  onJoin?: () => void;
  isVirtual?: boolean;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  date,
  month,
  year,
  title,
  doctor,
  location,
  time,
  onReschedule,
  onCancel,
  onJoin,
  isVirtual = false,
}) => {
  return (
    <div className="appointment">
      <div className="appointment-date">
        <div className="date-month">{month}</div>
        <div className="date-day">{date}</div>
        <div className="date-year">{year}</div>
      </div>
      <div className="appointment-details">
        <h3>{title}</h3>
        <p>{doctor}</p>
        <p>
          {time} • {location}
        </p>
        <div className="appointment-actions">
          {isVirtual && onJoin && (
            <button className="button button-primary" onClick={onJoin}>
              Join Meeting
            </button>
          )}
          {onReschedule && (
            <button className="button button-outline" onClick={onReschedule}>
              Reschedule
            </button>
          )}
          {onCancel && (
            <button className="button button-outline" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
