"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import type { PageType } from "./_app";

interface SupportGroupsProps {
  navigateTo: (page: PageType) => void;
  handleInactiveButton?: () => void;
}

const SupportGroups: React.FC<SupportGroupsProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("mental-health")} />
        <h1>Support Groups</h1>
      </div>
      <p className="page-description">Connect with others facing similar challenges</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Your Support Groups</h2>
        </div>
        <div className="card-content">
          <div className="support-groups">
            <div className="support-group">
              <div className="support-group-header">
                <h3>Multiple Myeloma Warriors</h3>
                <span className="badge badge-primary">Member</span>
              </div>
              <p>
                A support group specifically for patients with multiple myeloma, sharing experiences and coping
                strategies.
              </p>
              <div className="support-group-details">
                <p>
                  <strong>Next Meeting:</strong> May 18, 2023 • 6:00 PM
                </p>
                <p>
                  <strong>Location:</strong> Virtual (Zoom)
                </p>
                <p>
                  <strong>Members:</strong> 24
                </p>
              </div>
              <div className="support-group-actions">
                <button className="button button-primary">Join Meeting</button>
                <button className="button button-outline">View Group</button>
              </div>
            </div>

            <div className="support-group">
              <div className="support-group-header">
                <h3>Cancer Survivors Network</h3>
                <span className="badge badge-primary">Member</span>
              </div>
              <p>
                A general support group for all cancer survivors, focusing on life after diagnosis and during treatment.
              </p>
              <div className="support-group-details">
                <p>
                  <strong>Next Meeting:</strong> May 20, 2023 • 7:00 PM
                </p>
                <p>
                  <strong>Location:</strong> Memorial Cancer Center, Community Room
                </p>
                <p>
                  <strong>Members:</strong> 42
                </p>
              </div>
              <div className="support-group-actions">
                <button className="button button-outline">View Group</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Recommended Groups</h2>
        </div>
        <div className="card-content">
          <div className="support-groups">
            <div className="support-group">
              <div className="support-group-header">
                <h3>Caregivers Circle</h3>
                <span className="badge badge-secondary">Recommended</span>
              </div>
              <p>A support group for family members and caregivers of cancer patients.</p>
              <div className="support-group-details">
                <p>
                  <strong>Next Meeting:</strong> May 19, 2023 • 5:30 PM
                </p>
                <p>
                  <strong>Location:</strong> Memorial Cancer Center, Family Room
                </p>
                <p>
                  <strong>Members:</strong> 36
                </p>
              </div>
              <div className="support-group-actions">
                <button className="button button-primary">Join Group</button>
                <button className="button button-outline">Learn More</button>
              </div>
            </div>

            <div className="support-group">
              <div className="support-group-header">
                <h3>Young Adults with Cancer</h3>
                <span className="badge badge-secondary">Recommended</span>
              </div>
              <p>
                A support group specifically for young adults (ages 18-39) dealing with cancer diagnosis and treatment.
              </p>
              <div className="support-group-details">
                <p>
                  <strong>Next Meeting:</strong> May 21, 2023 • 6:00 PM
                </p>
                <p>
                  <strong>Location:</strong> Virtual (Zoom)
                </p>
                <p>
                  <strong>Members:</strong> 28
                </p>
              </div>
              <div className="support-group-actions">
                <button className="button button-primary">Join Group</button>
                <button className="button button-outline">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Find a Support Group</h2>
        </div>
        <div className="card-content">
          <div className="search-container">
            <div className="search-filters">
              <div className="filter">
                <label htmlFor="cancer-type">Cancer Type</label>
                <select id="cancer-type">
                  <option value="">All Cancer Types</option>
                  <option value="multiple-myeloma" selected>
                    Multiple Myeloma
                  </option>
                  <option value="breast-cancer">Breast Cancer</option>
                  <option value="lung-cancer">Lung Cancer</option>
                  <option value="prostate-cancer">Prostate Cancer</option>
                  <option value="colorectal-cancer">Colorectal Cancer</option>
                </select>
              </div>

              <div className="filter">
                <label htmlFor="meeting-type">Meeting Type</label>
                <select id="meeting-type">
                  <option value="">All Meeting Types</option>
                  <option value="in-person">In-Person</option>
                  <option value="virtual">Virtual</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <div className="filter">
                <label htmlFor="group-focus">Group Focus</label>
                <select id="group-focus">
                  <option value="">All Focus Areas</option>
                  <option value="general-support">General Support</option>
                  <option value="newly-diagnosed">Newly Diagnosed</option>
                  <option value="treatment-support">Treatment Support</option>
                  <option value="survivorship">Survivorship</option>
                  <option value="caregivers">Caregivers</option>
                </select>
              </div>
            </div>

            <button className="button button-primary">Search Groups</button>
          </div>

          <div className="search-results">
            <div className="support-group">
              <div className="support-group-header">
                <h3>Multiple Myeloma Research Foundation Group</h3>
              </div>
              <p>
                Official support group from the Multiple Myeloma Research Foundation with access to latest research
                updates.
              </p>
              <div className="support-group-details">
                <p>
                  <strong>Meeting Schedule:</strong> Bi-weekly on Thursdays • 7:00 PM
                </p>
                <p>
                  <strong>Location:</strong> Virtual (Zoom)
                </p>
                <p>
                  <strong>Members:</strong> 156
                </p>
              </div>
              <div className="support-group-actions">
                <button className="button button-primary">Join Group</button>
                <button className="button button-outline">Learn More</button>
              </div>
            </div>

            <div className="support-group">
              <div className="support-group-header">
                <h3>Memorial Hospital Multiple Myeloma Group</h3>
              </div>
              <p>Hospital-based support group led by oncology social workers specializing in multiple myeloma.</p>
              <div className="support-group-details">
                <p>
                  <strong>Meeting Schedule:</strong> Weekly on Tuesdays • 5:30 PM
                </p>
                <p>
                  <strong>Location:</strong> Memorial Cancer Center, Room 204
                </p>
                <p>
                  <strong>Members:</strong> 32
                </p>
              </div>
              <div className="support-group-actions">
                <button className="button button-primary">Join Group</button>
                <button className="button button-outline">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportGroups;
