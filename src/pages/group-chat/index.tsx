"use client";

import type React from "react";
import { useState } from "react";
import BackButton from "../../components/BackButton";
import type { PageType } from "../_app";

interface GroupChatProps {
  navigateTo: (page: PageType) => void;
  handleInactiveButton?: () => void;
}

// Top 100 cancer types for dropdown
const cancerTypes = [
  "Acute Lymphoblastic Leukemia",
  "Acute Myeloid Leukemia",
  "Adrenal Cancer",
  "Anal Cancer",
  "Appendix Cancer",
  "Astrocytoma",
  "Basal Cell Carcinoma",
  "Bile Duct Cancer",
  "Bladder Cancer",
  "Bone Cancer",
  "Brain Cancer",
  "Breast Cancer",
  "Carcinoid Tumor",
  "Cervical Cancer",
  "Cholangiocarcinoma",
  "Chondrosarcoma",
  "Chronic Lymphocytic Leukemia",
  "Chronic Myeloid Leukemia",
  "Colorectal Cancer",
  "Cutaneous T-Cell Lymphoma",
  "Endometrial Cancer",
  "Ependymoma",
  "Esophageal Cancer",
  "Ewing Sarcoma",
  "Eye Cancer",
  "Fallopian Tube Cancer",
  "Fibrosarcoma",
  "Gallbladder Cancer",
  "Gastric Cancer",
  "Gastrointestinal Stromal Tumor",
  "Germ Cell Tumor",
  "Glioblastoma",
  "Glioma",
  "Head and Neck Cancer",
  "Hepatocellular Carcinoma",
  "Hodgkin Lymphoma",
  "Inflammatory Breast Cancer",
  "Kidney Cancer",
  "Laryngeal Cancer",
  "Leiomyosarcoma",
  "Liposarcoma",
  "Liver Cancer",
  "Lung Cancer",
  "Lymphoma",
  "Malignant Mesothelioma",
  "Medulloblastoma",
  "Melanoma",
  "Merkel Cell Carcinoma",
  "Mesothelioma",
  "Multiple Myeloma",
  "Myelodysplastic Syndromes",
  "Myeloproliferative Neoplasms",
  "Nasopharyngeal Cancer",
  "Neuroblastoma",
  "Neuroendocrine Tumors",
  "Non-Hodgkin Lymphoma",
  "Oligodendroglioma",
  "Oral Cancer",
  "Osteosarcoma",
  "Ovarian Cancer",
  "Pancreatic Cancer",
  "Parathyroid Cancer",
  "Penile Cancer",
  "Pheochromocytoma",
  "Pituitary Tumors",
  "Prostate Cancer",
  "Rectal Cancer",
  "Renal Cell Carcinoma",
  "Retinoblastoma",
  "Rhabdomyosarcoma",
  "Salivary Gland Cancer",
  "Sarcoma",
  "Skin Cancer",
  "Small Intestine Cancer",
  "Soft Tissue Sarcoma",
  "Spinal Cord Tumors",
  "Squamous Cell Carcinoma",
  "Stomach Cancer",
  "Synovial Sarcoma",
  "Testicular Cancer",
  "Throat Cancer",
  "Thymus Cancer",
  "Thyroid Cancer",
  "Uterine Cancer",
  "Vaginal Cancer",
  "Vulvar Cancer",
  "Waldenstrom Macroglobulinemia",
  "Wilms Tumor",
  // Additional cancers to reach 100
  "Adrenocortical Carcinoma",
  "Angiosarcoma",
  "Bronchial Tumors",
  "Burkitt Lymphoma",
  "Carcinosarcoma",
  "Chordoma",
  "Craniopharyngioma",
  "Desmoid Tumor",
  "Ductal Carcinoma In Situ",
  "Epithelioid Sarcoma",
  "Extrahepatic Bile Duct Cancer",
  "Gestational Trophoblastic Disease",
  "Hairy Cell Leukemia",
  "Kaposi Sarcoma",
  "Langerhans Cell Histiocytosis",
  "Malignant Fibrous Histiocytoma",
  "Mycosis Fungoides",
  "Myxofibrosarcoma",
];

const GroupChat: React.FC<GroupChatProps> = ({ navigateTo, handleInactiveButton }) => {
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      alert(`Message sent: ${message}`);
      setMessage("");
    }
  };

  const filteredCancerTypes = cancerTypes.filter((cancer) => cancer.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const selectCancerType = (cancer: string) => {
    setSearchTerm(cancer);
    setShowDropdown(false);
    // In a real app, this would trigger a search for groups related to this cancer type
    alert(`Searching for groups related to ${cancer}...`);
  };

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>Group Chat</h1>
      </div>
      <p className="page-description">Connect with other patients and caregivers</p>

      {/* Search for groups by cancer type */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Find Groups by Cancer Type</h2>
        </div>
        <div className="card-content">
          <div className="search-container" style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search for cancer type..."
              value={searchTerm}
              onChange={handleSearchChange}
              onFocus={() => setShowDropdown(true)}
              className="search-input"
            />
            {showDropdown && searchTerm && (
              <div
                className="search-dropdown"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  maxHeight: "200px",
                  overflowY: "auto",
                  backgroundColor: "var(--card-background)",
                  border: "1px solid var(--border-color)",
                  borderRadius: "4px",
                  zIndex: 10,
                }}
              >
                {filteredCancerTypes.length > 0 ? (
                  filteredCancerTypes.map((cancer, index) => (
                    <div
                      key={index}
                      className="search-item"
                      onClick={() => selectCancerType(cancer)}
                      style={{
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom: "1px solid var(--border-color)",
                      }}
                    >
                      {cancer}
                    </div>
                  ))
                ) : (
                  <div className="search-item" style={{ padding: "10px" }}>
                    No cancer types found
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            className="button button-primary"
            style={{ marginTop: "10px" }}
            onClick={() => alert(`Searching for groups related to ${searchTerm}...`)}
          >
            Search Groups
          </button>
        </div>
      </div>

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
  );
};

export default GroupChat;
