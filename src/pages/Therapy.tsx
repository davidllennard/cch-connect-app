"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import type { PageType } from "./_app";

interface TherapyProps {
  navigateTo: (page: PageType) => void;
  handleInactiveButton?: () => void;
}

const Therapy: React.FC<TherapyProps> = ({ navigateTo, handleInactiveButton }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("mental-health")} />
        <h1>Therapy</h1>
      </div>
      <p className="page-description">Connect with mental health professionals</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Your Therapy Team</h2>
        </div>
        <div className="card-content">
          <div className="therapy-team">
            <div className="team-member">
              <div className="team-member-photo">
                <img src="/placeholder.svg?height=100&width=100" alt="Dr. Sarah Williams" />
              </div>
              <div className="team-member-info">
                <h3>Dr. Sarah Williams</h3>
                <p className="team-member-title">Clinical Psychologist</p>
                <p>Specializes in cancer patients and anxiety management</p>
                <div className="team-member-contact">
                  <button className="button button-outline">Schedule Session</button>
                  <button className="button button-outline">Message</button>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="team-member-photo">
                <img src="/placeholder.svg?height=100&width=100" alt="Dr. Michael Chen" />
              </div>
              <div className="team-member-info">
                <h3>Dr. Michael Chen</h3>
                <p className="team-member-title">Psychiatrist</p>
                <p>Specializes in medication management for depression and anxiety</p>
                <div className="team-member-contact">
                  <button className="button button-outline">Schedule Session</button>
                  <button className="button button-outline">Message</button>
                </div>
              </div>
            </div>

            <div className="team-member">
              <div className="team-member-photo">
                <img src="/placeholder.svg?height=100&width=100" alt="Jennifer Lopez" />
              </div>
              <div className="team-member-info">
                <h3>Jennifer Lopez</h3>
                <p className="team-member-title">Licensed Clinical Social Worker</p>
                <p>Specializes in family therapy and resource navigation</p>
                <div className="team-member-contact">
                  <button className="button button-outline">Schedule Session</button>
                  <button className="button button-outline">Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Upcoming Sessions</h2>
        </div>
        <div className="card-content">
          <div className="upcoming-sessions">
            <div className="session">
              <div className="session-date">
                <div className="session-month">May</div>
                <div className="session-day">15</div>
                <div className="session-time">2:00 PM</div>
              </div>
              <div className="session-details">
                <h3>Individual Therapy Session</h3>
                <p>With Dr. Sarah Williams</p>
                <p>Virtual Session (Zoom)</p>
              </div>
              <div className="session-actions">
                <button className="button button-outline">Reschedule</button>
                <button className="button button-outline">Cancel</button>
                <button className="button button-primary">Join Session</button>
              </div>
            </div>

            <div className="session">
              <div className="session-date">
                <div className="session-month">May</div>
                <div className="session-day">22</div>
                <div className="session-time">10:30 AM</div>
              </div>
              <div className="session-details">
                <h3>Medication Review</h3>
                <p>With Dr. Michael Chen</p>
                <p>Memorial Cancer Center, Suite 205</p>
              </div>
              <div className="session-actions">
                <button className="button button-outline">Reschedule</button>
                <button className="button button-outline">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Group Therapy Options</h2>
        </div>
        <div className="card-content">
          <div className="group-therapy-options">
            <div className="group-therapy">
              <h3>Cancer Survivors Support Group</h3>
              <p>Weekly meetings for cancer survivors to share experiences and coping strategies.</p>
              <p>
                <strong>When:</strong> Tuesdays, 6:00 PM - 7:30 PM
              </p>
              <p>
                <strong>Where:</strong> Memorial Cancer Center, Community Room
              </p>
              <p>
                <strong>Facilitator:</strong> Jennifer Lopez, LCSW
              </p>
              <button className="button button-outline">Join Group</button>
            </div>

            <div className="group-therapy">
              <h3>Multiple Myeloma Specific Group</h3>
              <p>Support group specifically for patients with multiple myeloma.</p>
              <p>
                <strong>When:</strong> Thursdays, 4:00 PM - 5:30 PM
              </p>
              <p>
                <strong>Where:</strong> Virtual (Zoom)
              </p>
              <p>
                <strong>Facilitator:</strong> Dr. Sarah Williams
              </p>
              <button className="button button-outline">Join Group</button>
            </div>

            <div className="group-therapy">
              <h3>Family and Caregivers Support</h3>
              <p>Support group for family members and caregivers of cancer patients.</p>
              <p>
                <strong>When:</strong> Wednesdays, 5:00 PM - 6:30 PM
              </p>
              <p>
                <strong>Where:</strong> Memorial Cancer Center, Family Room
              </p>
              <p>
                <strong>Facilitator:</strong> Jennifer Lopez, LCSW
              </p>
              <button className="button button-outline">Join Group</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Resources</h2>
        </div>
        <div className="card-content">
          <div className="resources">
            <div className="resource">
              <h3>Coping with Cancer Diagnosis</h3>
              <p>Articles and videos on emotional responses to cancer diagnosis and treatment.</p>
              <button className="button button-outline">View Resources</button>
            </div>

            <div className="resource">
              <h3>Mindfulness Practices</h3>
              <p>Guided mindfulness exercises specifically designed for cancer patients.</p>
              <button className="button button-outline">View Resources</button>
            </div>

            <div className="resource">
              <h3>Sleep Improvement</h3>
              <p>Techniques and resources for improving sleep during cancer treatment.</p>
              <button className="button button-outline">View Resources</button>
            </div>

            <div className="resource">
              <h3>Managing Treatment Anxiety</h3>
              <p>Strategies for managing anxiety related to cancer treatments.</p>
              <button className="button button-outline">View Resources</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapy;
