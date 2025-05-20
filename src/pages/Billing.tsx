"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface BillingProps {
  navigateTo: (page: PageType) => void
  handleInactiveButton?: () => void
}

const Billing: React.FC<BillingProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("my-cancer")} />
        <h1>Billing</h1>
      </div>
      <p className="page-description">View and manage your medical bills</p>

      <div className="card">
        <div className="card-header">
          <div className="card-header-with-action">
            <h2 className="card-title">Current Bills</h2>
            <button className="button button-primary">Make a Payment</button>
          </div>
        </div>
        <div className="card-content">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Service</th>
                  <th>Provider</th>
                  <th>Total Amount</th>
                  <th>Insurance Paid</th>
                  <th>Your Responsibility</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>May 5, 2023</td>
                  <td>Oncology Consultation</td>
                  <td>Dr. Emily Johnson</td>
                  <td>$350.00</td>
                  <td>$280.00</td>
                  <td>$70.00</td>
                  <td>
                    <span className="badge badge-warning">Due in 30 days</span>
                  </td>
                  <td>
                    <button className="button button-outline">Pay</button>
                  </td>
                </tr>
                <tr>
                  <td>May 1, 2023</td>
                  <td>Bortezomib (Velcade) Administration</td>
                  <td>Memorial Cancer Center</td>
                  <td>$4,200.00</td>
                  <td>$3,780.00</td>
                  <td>$420.00</td>
                  <td>
                    <span className="badge badge-warning">Due in 25 days</span>
                  </td>
                  <td>
                    <button className="button button-outline">Pay</button>
                  </td>
                </tr>
                <tr>
                  <td>April 22, 2023</td>
                  <td>Laboratory Tests</td>
                  <td>Memorial Cancer Center</td>
                  <td>$850.00</td>
                  <td>$765.00</td>
                  <td>$85.00</td>
                  <td>
                    <span className="badge badge-warning">Due in 15 days</span>
                  </td>
                  <td>
                    <button className="button button-outline">Pay</button>
                  </td>
                </tr>
                <tr>
                  <td>April 15, 2023</td>
                  <td>CT Scan - Abdomen/Pelvis</td>
                  <td>Memorial Imaging Center</td>
                  <td>$3,200.00</td>
                  <td>$2,880.00</td>
                  <td>$320.00</td>
                  <td>
                    <span className="badge badge-danger">Due in 5 days</span>
                  </td>
                  <td>
                    <button className="button button-outline">Pay</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Payment History</h2>
        </div>
        <div className="card-content">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Service</th>
                  <th>Provider</th>
                  <th>Amount Paid</th>
                  <th>Payment Method</th>
                  <th>Receipt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>April 10, 2023</td>
                  <td>Zoledronic Acid (Zometa) Administration</td>
                  <td>Memorial Cancer Center</td>
                  <td>$250.00</td>
                  <td>Credit Card ending in 4567</td>
                  <td>
                    <button className="button button-outline">View</button>
                  </td>
                </tr>
                <tr>
                  <td>March 28, 2023</td>
                  <td>Oncology Follow-up</td>
                  <td>Dr. Emily Johnson</td>
                  <td>$70.00</td>
                  <td>Credit Card ending in 4567</td>
                  <td>
                    <button className="button button-outline">View</button>
                  </td>
                </tr>
                <tr>
                  <td>March 15, 2023</td>
                  <td>Laboratory Tests</td>
                  <td>Memorial Cancer Center</td>
                  <td>$85.00</td>
                  <td>Bank Transfer</td>
                  <td>
                    <button className="button button-outline">View</button>
                  </td>
                </tr>
                <tr>
                  <td>March 1, 2023</td>
                  <td>Bortezomib (Velcade) Administration</td>
                  <td>Memorial Cancer Center</td>
                  <td>$420.00</td>
                  <td>Bank Transfer</td>
                  <td>
                    <button className="button button-outline">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Insurance Information</h2>
        </div>
        <div className="card-content">
          <div className="insurance-info">
            <div className="insurance-section">
              <h3>Primary Insurance</h3>
              <div className="insurance-details">
                <p>
                  <strong>Provider:</strong> Blue Cross Blue Shield
                </p>
                <p>
                  <strong>Plan:</strong> PPO Premium
                </p>
                <p>
                  <strong>Policy Number:</strong> BCBS12345678
                </p>
                <p>
                  <strong>Group Number:</strong> GRP987654
                </p>
                <p>
                  <strong>Member ID:</strong> MEM123456789
                </p>
                <p>
                  <strong>Coverage Period:</strong> Jan 1, 2023 - Dec 31, 2023
                </p>
              </div>
            </div>

            <div className="insurance-section">
              <h3>Secondary Insurance</h3>
              <div className="insurance-details">
                <p>
                  <strong>Provider:</strong> Medicare
                </p>
                <p>
                  <strong>Plan:</strong> Part B
                </p>
                <p>
                  <strong>Medicare Number:</strong> 1234-567-8901A
                </p>
                <p>
                  <strong>Coverage Period:</strong> Ongoing
                </p>
              </div>
            </div>

            <div className="insurance-section">
              <h3>Coverage Summary for Multiple Myeloma Treatment</h3>
              <div className="insurance-details">
                <p>
                  <strong>Annual Deductible:</strong> $1,500 ($750 remaining)
                </p>
                <p>
                  <strong>Out-of-Pocket Maximum:</strong> $5,000 ($3,250 remaining)
                </p>
                <p>
                  <strong>Specialist Visit Copay:</strong> $40
                </p>
                <p>
                  <strong>Hospital Inpatient:</strong> 10% after deductible
                </p>
                <p>
                  <strong>Hospital Outpatient:</strong> 10% after deductible
                </p>
                <p>
                  <strong>Prescription Drugs:</strong> Tier 1: $10, Tier 2: $30, Tier 3: $50, Specialty: 10% up to $250
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Financial Assistance</h2>
        </div>
        <div className="card-content">
          <div className="financial-assistance">
            <p>
              Multiple myeloma treatment can be expensive. Below are resources that may help with your medical expenses:
            </p>

            <div className="assistance-options">
              <div className="assistance-option">
                <h3>Patient Assistance Programs</h3>
                <p>
                  Pharmaceutical companies offer programs to help patients access medications they otherwise couldn't
                  afford.
                </p>
                <button className="button button-outline">View Programs</button>
              </div>

              <div className="assistance-option">
                <h3>Foundation Support</h3>
                <p>
                  Various foundations provide financial assistance for cancer patients, including help with treatment
                  costs, transportation, and living expenses.
                </p>
                <button className="button button-outline">View Foundations</button>
              </div>

              <div className="assistance-option">
                <h3>Hospital Financial Aid</h3>
                <p>Memorial Cancer Center offers financial aid programs for qualifying patients.</p>
                <button className="button button-outline">Apply for Aid</button>
              </div>

              <div className="assistance-option">
                <h3>Payment Plans</h3>
                <p>Set up a monthly payment plan to manage your medical bills.</p>
                <button className="button button-outline">Set Up Plan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
