"use client"

import type React from "react"
import { useState } from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"
import "../styles/PageTemplate.css"

interface AskRupertProps {
  navigateTo: (page: PageType) => void
  handleInactiveButton?: () => void
}

const AskRupert: React.FC<AskRupertProps> = ({ navigateTo, handleInactiveButton }) => {
  const [message, setMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      alert(`Question sent to Rupert: ${message}`)
      setMessage("")
    }
  }

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Ask Rupert</h1>
      </div>
      <p className="page-description">Get answers to your questions about cancer care</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Chat with Rupert</h2>
        </div>
        <div className="card-content">
          <div className="chat-container">
            <div className="chat-messages">
              <div className="chat-message other ai">
                <div className="chat-avatar">R</div>
                <div className="chat-bubble">
                  <div className="chat-text">
                    Hello! I'm Rupert, your Cancer Care Assistant. I can help answer questions about cancer treatments,
                    side effects, and supportive care. How can I assist you today?
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
                <div className="chat-avatar">R</div>
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
                placeholder="Ask Rupert a question..."
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
              <button className="ask-button" onClick={handleInactiveButton}>
                Ask about this
              </button>
            </div>
            <div className="topic-item">
              <h3>Nutrition During Cancer Treatment</h3>
              <button className="ask-button" onClick={handleInactiveButton}>
                Ask about this
              </button>
            </div>
            <div className="topic-item">
              <h3>Exercise and Physical Activity</h3>
              <button className="ask-button" onClick={handleInactiveButton}>
                Ask about this
              </button>
            </div>
            <div className="topic-item">
              <h3>Emotional Well-being</h3>
              <button className="ask-button" onClick={handleInactiveButton}>
                Ask about this
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <div className="card-header">
          <h2 className="card-title">Medical Disclaimer</h2>
        </div>
        <div className="card-content">
          <div className="disclaimer" style={{ fontWeight: 300, fontSize: "0.9rem", opacity: 0.8 }}>
            <p>
              <strong>Important:</strong> Rupert is an AI assistant designed to provide general information and support.
              The information provided by Rupert is not a substitute for professional medical advice, diagnosis, or
              treatment.
            </p>
            <p>
              Always seek the advice of your physician or other qualified health provider with any questions you may
              have regarding a medical condition. Never disregard professional medical advice or delay in seeking it
              because of information provided by Rupert.
            </p>
            <p>
              In case of a medical emergency, call your doctor or emergency services immediately. Reliance on any
              information provided by Rupert is solely at your own risk.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AskRupert
