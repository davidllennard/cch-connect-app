"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import type { PageType } from "./_app";

interface MedicalProfileProps {
  navigateTo: (page: PageType) => void;
}

const MedicalProfile: React.FC<MedicalProfileProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Medical Profile</h1>
      </div>
      <p className="page-description">View and update your medical information</p>

      <div className="card">
        <div className="card-header">
          <div className="card-header-with-action">
            <h2 className="card-title">Personal Information</h2>
            <button className="button button-outline">Edit</button>
          </div>
        </div>
        <div className="card-content">
          <div className="profile-grid">
            <div className="profile-item">
              <h3>Name</h3>
              <p>Jane Smith</p>
            </div>
            <div className="profile-item">
              <h3>Date of Birth</h3>
              <p>January 15, 1975</p>
            </div>
            <div className="profile-item">
              <h3>Gender</h3>
              <p>Female</p>
            </div>
            <div className="profile-item">
              <h3>Blood Type</h3>
              <p>O+</p>
            </div>
            <div className="profile-item">
              <h3>Height</h3>
              <p>5'6" (168 cm)</p>
            </div>
            <div className="profile-item">
              <h3>Weight</h3>
              <p>150 lbs (68 kg)</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-header-with-action">
            <h2 className="card-title">Contact Information</h2>
            <button className="button button-outline">Edit</button>
          </div>
        </div>
        <div className="card-content">
          <div className="profile-grid">
            <div className="profile-item">
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>
            <div className="profile-item">
              <h3>Email</h3>
              <p>jane.smith@example.com</p>
            </div>
            <div className="profile-item">
              <h3>Address</h3>
              <p>123 Main Street, Anytown, CA 12345</p>
            </div>
            <div className="profile-item">
              <h3>Emergency Contact</h3>
              <p>John Smith (Husband)</p>
              <p>(555) 987-6543</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-header-with-action">
            <h2 className="card-title">Medical History</h2>
            <button className="button button-outline">Edit</button>
          </div>
        </div>
        <div className="card-content">
          <div className="medical-history">
            <div className="medical-history-section">
              <h3>Current Diagnosis</h3>
              <ul>
                <li>Stage 2 Colorectal Cancer (diagnosed January 15, 2023)</li>
              </ul>
            </div>

            <div className="medical-history-section">
              <h3>Past Medical Conditions</h3>
              <ul>
                <li>Hypertension (diagnosed 2015, controlled with medication)</li>
                <li>Type 2 Diabetes (diagnosed 2018, controlled with diet and medication)</li>
              </ul>
            </div>

            <div className="medical-history-section">
              <h3>Surgical History</h3>
              <ul>
                <li>Appendectomy (1995)</li>
                <li>Laparoscopic sigmoid colectomy (February 10, 2023)</li>
              </ul>
            </div>

            <div className="medical-history-section">
              <h3>Family History</h3>
              <ul>
                <li>Father: Colorectal cancer at age 65</li>
                <li>Mother: Hypertension, Type 2 Diabetes</li>
                <li>Sister: No significant medical conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-header-with-action">
            <h2 className="card-title">Allergies</h2>
            <button className="button button-outline">Edit</button>
          </div>
        </div>
        <div className="card-content">
          <div className="allergy-list">
            <div className="allergy-item">
              <h3>Penicillin</h3>
              <p>Severe rash and difficulty breathing</p>
              <span className="badge badge-danger">Severe</span>
            </div>
            <div className="allergy-item">
              <h3>Shellfish</h3>
              <p>Hives and swelling</p>
              <span className="badge badge-warning">Moderate</span>
            </div>
            <div className="allergy-item">
              <h3>Latex</h3>
              <p>Skin irritation</p>
              <span className="badge badge-success">Mild</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalProfile;
