"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import type { PageType } from "./_app";

interface CalendarHubProps {
  navigateTo: (page: PageType) => void;
}

const CalendarHub: React.FC<CalendarHubProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Calendar Hub</h1>
      </div>
      <p className="page-description">Manage all your appointments and personal events in one convenient place</p>

      <div className="card">
        <div className="card-header">
          <div className="card-header-with-action">
            <h2 className="card-title">May 2023</h2>
            <div>
              <button className="button button-outline">Previous</button>
              <button className="button button-outline" style={{ marginLeft: "10px" }}>
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="card-content">
          <div className="calendar-grid">
            {/* Calendar would go here */}
            <div className="calendar-placeholder">
              <p>Calendar view will be displayed here</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-header-with-action">
            <h2 className="card-title">Upcoming Events</h2>
            <button className="button button-primary">Add Event</button>
          </div>
        </div>
        <div className="card-content">
          <div className="event-list">
            <div className="event-item medical">
              <div className="event-date">
                <div className="date-month">May</div>
                <div className="date-day">18</div>
                <div className="date-year">2023</div>
              </div>
              <div className="event-details">
                <h3>Oncology Appointment</h3>
                <p>10:00 AM - 11:00 AM</p>
                <p>Dr. Sarah Williams • Memorial Cancer Center</p>
                <div className="event-actions">
                  <button className="button button-outline">Reschedule</button>
                  <button className="button button-outline">Cancel</button>
                </div>
              </div>
            </div>

            <div className="event-item personal">
              <div className="event-date">
                <div className="date-month">May</div>
                <div className="date-day">20</div>
                <div className="date-year">2023</div>
              </div>
              <div className="event-details">
                <h3>Lunch with Friends</h3>
                <p>12:30 PM - 2:00 PM</p>
                <p>Cafe Bella • 123 Main Street</p>
                <div className="event-actions">
                  <button className="button button-outline">Edit</button>
                  <button className="button button-outline">Delete</button>
                </div>
              </div>
            </div>

            <div className="event-item reminder">
              <div className="event-date">
                <div className="date-month">May</div>
                <div className="date-day">21</div>
                <div className="date-year">2023</div>
              </div>
              <div className="event-details">
                <h3>Take Medication</h3>
                <p>8:00 AM</p>
                <p>Reminder to take morning medications</p>
                <div className="event-actions">
                  <button className="button button-outline">Edit</button>
                  <button className="button button-outline">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarHub;
