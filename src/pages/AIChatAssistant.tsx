"use client";

import type React from "react";
import { useState } from "react";
import BackButton from "../components/BackButton";
import type { PageType } from "./_app";

interface AIChatAssistantProps {
  navigateTo: (page: PageType) => void;
}

const AIChatAssistant: React.FC<AIChatAssistantProps> = ({ navigateTo }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      alert(`Question sent to AI: ${message}`);
      setMessage("");
    }
  };

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>AI Chat Assistant</h1>
      </div>
      <p className="page-description">Get answers to your questions about cancer care</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Cancer Care Assistant</h2>
        </div>
        <div className="card-content">
          <div className="chat-container">
            <div className="chat-messages">
              <div className="chat-message other ai">
                <div className="chat-avatar">AI</div>
                <div className="chat-bubble">
                  <div className="chat-text">
                    Hello! I'm your Cancer Care Assistant. I can help answer questions about cancer treatments, side
                    effects, and supportive care. How can I assist you today?
                  </div>
                  <div className="chat-time">Just now</div>
                </div>
              </div>

              <div className="chat-message self">
                <div className="chat-bubble">
                  <div className="chat-text">What are common side effects of FOLFOX chemotherapy?</div>
                  <div className="chat-time">Just now</div>
                </div>
              </div>

              <div className="chat-message other ai">
                <div className="chat-avatar">AI</div>
                <div className="chat-bubble">
                  <div className="chat-text">
                    <p>
                      FOLFOX is a chemotherapy regimen commonly used for colorectal cancer. Common side effects include:
                    </p>
                    <ul>
                      <li>
                        <strong>Neuropathy:</strong> Tingling, numbness, or pain in hands and feet, often triggered by
                        cold
                      </li>
                      <li>
                        <strong>Fatigue:</strong> Feeling tired or exhausted
                      </li>
                      <li>
                        <strong>Nausea and vomiting:</strong> Usually managed with anti-nausea medications
                      </li>
                      <li>
                        <strong>Diarrhea:</strong> Changes in bowel habits
                      </li>
                      <li>
                        <strong>Low blood counts:</strong> Increased risk of infection, bleeding, or anemia
                      </li>
                      <li>
                        <strong>Mouth sores:</strong> Painful sores in the mouth or throat
                      </li>
                    </ul>
                    <p>
                      It's important to report any side effects to your healthcare team so they can help manage them
                      effectively. Would you like more information about managing any specific side effect?
                    </p>
                  </div>
                  <div className="chat-time">Just now</div>
                </div>
              </div>
            </div>

            <form className="chat-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Ask a question..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="button button-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Suggested Topics</h2>
        </div>
        <div className="card-content">
          <div className="topic-list">
            <div className="topic-item">
              <h3>Managing Treatment Side Effects</h3>
              <button className="button button-outline">Ask About This</button>
            </div>
            <div className="topic-item">
              <h3>Nutrition During Cancer Treatment</h3>
              <button className="button button-outline">Ask About This</button>
            </div>
            <div className="topic-item">
              <h3>Exercise and Physical Activity</h3>
              <button className="button button-outline">Ask About This</button>
            </div>
            <div className="topic-item">
              <h3>Emotional Well-being</h3>
              <button className="button button-outline">Ask About This</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatAssistant;
