"use client"

import type React from "react"
import { useState } from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"
import "../styles/PageTemplate.css"

interface GroupChatProps {
  navigateTo: (page: PageType) => void
}

const GroupChat: React.FC<GroupChatProps> = ({ navigateTo }) => {
  const [message, setMessage] = useState("")

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      alert(`Message sent: ${message}`)
      setMessage("")
    }
  }

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Group Chat</h1>
      </div>
      <p className="page-description">Connect with other patients and caregivers</p>

      <div className="card">
        <div className="card-header">
          <div className="card-header-with-action">
            <h2 className="card-title">Colorectal Cancer Support Group</h2>
            <span className="badge badge-success">12 Online</span>
          </div>
        </div>
        <div className="card-content">
          <div className="chat-container">
            <div className="chat-messages">
              <div className="chat-message other">
                <div className="chat-avatar">JD</div>
                <div className="chat-bubble">
                  <div className="chat-sender">John Doe</div>
                  <div className="chat-text">
                    Hello everyone! I just finished my third round of chemo yesterday. How is everyone doing today?
                  </div>
                  <div className="chat-time">10:15 AM</div>
                </div>
              </div>

              <div className="chat-message other">
                <div className="chat-avatar">SM</div>
                <div className="chat-bubble">
                  <div className="chat-sender">Sarah Miller</div>
                  <div className="chat-text">
                    Hi John! I hope you're feeling okay after chemo. I'm on my fifth round and starting to see the light
                    at the end of the tunnel.
                  </div>
                  <div className="chat-time">10:18 AM</div>
                </div>
              </div>

              <div className="chat-message other">
                <div className="chat-avatar">RJ</div>
                <div className="chat-bubble">
                  <div className="chat-sender">Dr. Rebecca Johnson</div>
                  <div className="chat-text">
                    Good morning everyone! Just a reminder that we have our virtual support group meeting tomorrow at
                    7:00 PM. We'll be discussing nutrition during treatment.
                  </div>
                  <div className="chat-time">10:25 AM</div>
                </div>
              </div>

              <div className="chat-message self">
                <div className="chat-bubble">
                  <div className="chat-text">
                    Thanks for the reminder, Dr. Johnson! I'll definitely be there. Nutrition has been a challenge for
                    me lately.
                  </div>
                  <div className="chat-time">10:30 AM</div>
                </div>
              </div>

              <div className="chat-message other">
                <div className="chat-avatar">JD</div>
                <div className="chat-bubble">
                  <div className="chat-sender">John Doe</div>
                  <div className="chat-text">
                    I'll be there too! Has anyone tried those protein shakes the dietitian recommended?
                  </div>
                  <div className="chat-time">10:32 AM</div>
                </div>
              </div>
            </div>

            <form className="chat-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Type your message..."
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
          <h2 className="card-title">Available Groups</h2>
        </div>
        <div className="card-content">
          <div className="group-list">
            <div className="group-item active">
              <h3>Colorectal Cancer Support Group</h3>
              <p>A supportive community for patients with colorectal cancer</p>
              <div className="group-meta">
                <span>42 members</span>
                <span>12 online</span>
              </div>
            </div>

            <div className="group-item">
              <h3>Caregivers Connect</h3>
              <p>A group for family members and caregivers of cancer patients</p>
              <div className="group-meta">
                <span>78 members</span>
                <span>8 online</span>
              </div>
              <button className="button button-outline">Join Group</button>
            </div>

            <div className="group-item">
              <h3>Young Adults with Cancer</h3>
              <p>Support group for cancer patients under 40</p>
              <div className="group-meta">
                <span>35 members</span>
                <span>5 online</span>
              </div>
              <button className="button button-outline">Join Group</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupChat
