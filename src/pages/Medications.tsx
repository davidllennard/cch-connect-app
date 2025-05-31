"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface MedicationsProps {
  navigateTo: (page: PageType) => void
  handleInactiveButton?: () => void
}

const Medications: React.FC<MedicationsProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("my-cancer")} />
        <h1>Medications</h1>
      </div>
      <p className="page-description">View and manage your medications for Multiple Myeloma</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Current Medications</h2>
        </div>
        <div className="card-content">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Medication</th>
                  <th>Dosage</th>
                  <th>Frequency</th>
                  <th>Purpose</th>
                  <th>Start Date</th>
                  <th>Refills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lenalidomide (Revlimid)</td>
                  <td>25mg</td>
                  <td>Once daily for 21 days of a 28-day cycle</td>
                  <td>Immunomodulatory drug for Multiple Myeloma</td>
                  <td>Jan 15, 2023</td>
                  <td>2 remaining</td>
                </tr>
                <tr>
                  <td>Bortezomib (Velcade)</td>
                  <td>1.3mg/m²</td>
                  <td>Twice weekly for 2 weeks (days 1, 4, 8, 11) of a 21-day cycle</td>
                  <td>Proteasome inhibitor for Multiple Myeloma</td>
                  <td>Jan 15, 2023</td>
                  <td>Administered in clinic</td>
                </tr>
                <tr>
                  <td>Dexamethasone</td>
                  <td>40mg</td>
                  <td>Once weekly</td>
                  <td>Corticosteroid to reduce inflammation</td>
                  <td>Jan 15, 2023</td>
                  <td>3 remaining</td>
                </tr>
                <tr>
                  <td>Zoledronic Acid (Zometa)</td>
                  <td>4mg</td>
                  <td>Once monthly (IV infusion)</td>
                  <td>Bisphosphonate to strengthen bones</td>
                  <td>Feb 1, 2023</td>
                  <td>Administered in clinic</td>
                </tr>
                <tr>
                  <td>Acyclovir</td>
                  <td>400mg</td>
                  <td>Twice daily</td>
                  <td>Antiviral prophylaxis</td>
                  <td>Jan 15, 2023</td>
                  <td>5 remaining</td>
                </tr>
                <tr>
                  <td>Ondansetron (Zofran)</td>
                  <td>8mg</td>
                  <td>As needed for nausea</td>
                  <td>Anti-nausea medication</td>
                  <td>Jan 15, 2023</td>
                  <td>4 remaining</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Medication Schedule</h2>
        </div>
        <div className="card-content">
          <div className="medication-schedule">
            <div className="day-schedule">
              <h3>Morning</h3>
              <ul className="medication-list">
                <li>
                  <div className="medication-time">8:00 AM</div>
                  <div className="medication-name">Lenalidomide (Revlimid) - 25mg</div>
                  <div className="medication-instructions">Take with food</div>
                </li>
                <li>
                  <div className="medication-time">8:00 AM</div>
                  <div className="medication-name">Acyclovir - 400mg</div>
                  <div className="medication-instructions">Take with water</div>
                </li>
              </ul>
            </div>

            <div className="day-schedule">
              <h3>Afternoon</h3>
              <ul className="medication-list">
                <li>
                  <div className="medication-time">12:00 PM</div>
                  <div className="medication-name">Ondansetron (Zofran) - 8mg</div>
                  <div className="medication-instructions">Take as needed for nausea</div>
                </li>
              </ul>
            </div>

            <div className="day-schedule">
              <h3>Evening</h3>
              <ul className="medication-list">
                <li>
                  <div className="medication-time">8:00 PM</div>
                  <div className="medication-name">Acyclovir - 400mg</div>
                  <div className="medication-instructions">Take with water</div>
                </li>
              </ul>
            </div>

            <div className="day-schedule">
              <h3>Weekly</h3>
              <ul className="medication-list">
                <li>
                  <div className="medication-time">Monday 8:00 AM</div>
                  <div className="medication-name">Dexamethasone - 40mg</div>
                  <div className="medication-instructions">Take with food</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Medication History</h2>
        </div>
        <div className="card-content">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Medication</th>
                  <th>Dosage</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Reason for Discontinuation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Thalidomide</td>
                  <td>100mg daily</td>
                  <td>Oct 10, 2022</td>
                  <td>Jan 5, 2023</td>
                  <td>Switched to Lenalidomide due to peripheral neuropathy</td>
                </tr>
                <tr>
                  <td>Cyclophosphamide</td>
                  <td>300mg/m² weekly</td>
                  <td>Oct 10, 2022</td>
                  <td>Jan 5, 2023</td>
                  <td>Completed initial therapy regimen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Side Effects Tracker</h2>
        </div>
        <div className="card-content">
          <div className="side-effects-tracker">
            <div className="side-effect-item">
              <div className="side-effect-name">Fatigue</div>
              <div className="side-effect-severity">
                <div className="severity-bar">
                  <div className="severity-level" style={{ width: "70%" }}></div>
                </div>
                <div className="severity-label">Moderate to Severe</div>
              </div>
              <div className="side-effect-notes">Worst in the afternoons, improving with rest</div>
            </div>

            <div className="side-effect-item">
              <div className="side-effect-name">Nausea</div>
              <div className="side-effect-severity">
                <div className="severity-bar">
                  <div className="severity-level" style={{ width: "40%" }}></div>
                </div>
                <div className="severity-label">Mild to Moderate</div>
              </div>
              <div className="side-effect-notes">Controlled with medication</div>
            </div>

            <div className="side-effect-item">
              <div className="side-effect-name">Peripheral Neuropathy</div>
              <div className="side-effect-severity">
                <div className="severity-bar">
                  <div className="severity-level" style={{ width: "30%" }}></div>
                </div>
                <div className="severity-label">Mild</div>
              </div>
              <div className="side-effect-notes">Tingling in fingers and toes</div>
            </div>

            <div className="side-effect-item">
              <div className="side-effect-name">Insomnia</div>
              <div className="side-effect-severity">
                <div className="severity-bar">
                  <div className="severity-level" style={{ width: "60%" }}></div>
                </div>
                <div className="severity-label">Moderate</div>
              </div>
              <div className="side-effect-notes">Worse on dexamethasone days</div>
            </div>
          </div>
          <button className="button button-primary" style={{ marginTop: "20px" }}>
            Record New Side Effect
          </button>
        </div>
      </div>
    </div>
  )
}

export default Medications
