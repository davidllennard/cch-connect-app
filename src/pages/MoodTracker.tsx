"use client";

import type React from "react";
import { useState } from "react";
import BackButton from "../components/BackButton";
import type { PageType } from "./_app";

interface MoodTrackerProps {
  navigateTo: (page: PageType) => void;
  handleInactiveButton?: () => void;
}

const MoodTracker: React.FC<MoodTrackerProps> = ({ navigateTo, handleInactiveButton }) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [moodIntensity, setMoodIntensity] = useState<number>(5);
  const [moodNote, setMoodNote] = useState<string>("");

  const moods = [
    { name: "Happy", emoji: "😊" },
    { name: "Calm", emoji: "😌" },
    { name: "Sad", emoji: "😢" },
    { name: "Anxious", emoji: "😰" },
    { name: "Angry", emoji: "😠" },
    { name: "Tired", emoji: "😴" },
    { name: "Hopeful", emoji: "🙂" },
    { name: "Frustrated", emoji: "😤" },
  ];

  // Sample mood data for the chart
  const moodData = [
    { date: "May 1", mood: "Happy", intensity: 8 },
    { date: "May 2", mood: "Calm", intensity: 7 },
    { date: "May 3", mood: "Anxious", intensity: 6 },
    { date: "May 4", mood: "Tired", intensity: 4 },
    { date: "May 5", mood: "Sad", intensity: 3 },
    { date: "May 6", mood: "Hopeful", intensity: 6 },
    { date: "May 7", mood: "Happy", intensity: 7 },
    { date: "May 8", mood: "Calm", intensity: 8 },
    { date: "May 9", mood: "Tired", intensity: 5 },
    { date: "May 10", mood: "Anxious", intensity: 4 },
    { date: "May 11", mood: "Hopeful", intensity: 6 },
    { date: "May 12", mood: "Happy", intensity: 7 },
    { date: "May 13", mood: "Calm", intensity: 8 },
    { date: "May 14", mood: "Tired", intensity: 5 },
  ];

  const handleMoodSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mood logged: ${selectedMood} with intensity ${moodIntensity}`);
    setSelectedMood(null);
    setMoodIntensity(5);
    setMoodNote("");
  };

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("mental-health")} />
        <h1>Mood Tracker</h1>
      </div>
      <p className="page-description">Monitor your emotional wellbeing</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">How are you feeling today?</h2>
        </div>
        <div className="card-content">
          <form onSubmit={handleMoodSubmit}>
            <div className="mood-selector">
              {moods.map((mood) => (
                <div
                  key={mood.name}
                  className={`mood-option ${selectedMood === mood.name ? "selected" : ""}`}
                  onClick={() => setSelectedMood(mood.name)}
                >
                  <div className="mood-emoji">{mood.emoji}</div>
                  <div className="mood-name">{mood.name}</div>
                </div>
              ))}
            </div>

            {selectedMood && (
              <>
                <div className="mood-intensity">
                  <label htmlFor="intensity">How intense is this feeling? ({moodIntensity}/10)</label>
                  <input
                    type="range"
                    id="intensity"
                    min="1"
                    max="10"
                    value={moodIntensity}
                    onChange={(e) => setMoodIntensity(Number.parseInt(e.target.value))}
                  />
                  <div className="intensity-labels">
                    <span>Mild</span>
                    <span>Moderate</span>
                    <span>Strong</span>
                  </div>
                </div>

                <div className="mood-notes">
                  <label htmlFor="notes">Add notes about your mood (optional)</label>
                  <textarea
                    id="notes"
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                    placeholder="What might be contributing to this feeling? Any specific triggers?"
                    rows={3}
                  ></textarea>
                </div>

                <button type="submit" className="button button-primary">
                  Log Mood
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Your Mood History</h2>
        </div>
        <div className="card-content">
          <div className="mood-chart">
            <div className="chart-container">
              <div className="chart-y-axis">
                <div>10</div>
                <div>8</div>
                <div>6</div>
                <div>4</div>
                <div>2</div>
                <div>0</div>
              </div>
              <div className="chart-bars">
                {moodData.map((data, index) => (
                  <div key={index} className="chart-bar-container">
                    <div
                      className={`chart-bar mood-${data.mood.toLowerCase()}`}
                      style={{ height: `${data.intensity * 10}%` }}
                      title={`${data.date}: ${data.mood} (${data.intensity}/10)`}
                    ></div>
                    <div className="chart-label">{data.date.split(" ")[1]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <div className="legend-color mood-happy"></div>
                <div className="legend-label">Happy</div>
              </div>
              <div className="legend-item">
                <div className="legend-color mood-calm"></div>
                <div className="legend-label">Calm</div>
              </div>
              <div className="legend-item">
                <div className="legend-color mood-sad"></div>
                <div className="legend-label">Sad</div>
              </div>
              <div className="legend-item">
                <div className="legend-color mood-anxious"></div>
                <div className="legend-label">Anxious</div>
              </div>
              <div className="legend-item">
                <div className="legend-color mood-tired"></div>
                <div className="legend-label">Tired</div>
              </div>
              <div className="legend-item">
                <div className="legend-color mood-hopeful"></div>
                <div className="legend-label">Hopeful</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Mood Patterns</h2>
        </div>
        <div className="card-content">
          <div className="mood-patterns">
            <div className="pattern">
              <h3>Weekly Summary</h3>
              <p>Your mood has been generally positive this week, with some fluctuations in energy levels.</p>
              <p>Average mood intensity: 6.2/10</p>
              <p>Most frequent mood: Calm</p>
            </div>

            <div className="pattern">
              <h3>Treatment Correlation</h3>
              <p>Your mood tends to dip 1-2 days after chemotherapy sessions, with improvement by day 4.</p>
              <p>Consider scheduling relaxing activities for those days.</p>
            </div>

            <div className="pattern">
              <h3>Sleep Impact</h3>
              <p>Days with reported good sleep (7+ hours) show higher mood ratings.</p>
              <p>Consider discussing sleep strategies with your care team.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Resources for Your Current Mood</h2>
        </div>
        <div className="card-content">
          <div className="mood-resources">
            <div className="resource">
              <h3>Managing Cancer-Related Fatigue</h3>
              <p>Strategies for conserving energy and managing fatigue during cancer treatment.</p>
              <button className="button button-outline">View Resource</button>
            </div>

            <div className="resource">
              <h3>Guided Relaxation</h3>
              <p>10-minute guided relaxation exercise to reduce anxiety and promote calm.</p>
              <button className="button button-outline">Listen Now</button>
            </div>

            <div className="resource">
              <h3>Connecting with Hope</h3>
              <p>Stories and exercises to help maintain hope during difficult treatment periods.</p>
              <button className="button button-outline">View Resource</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodTracker;
