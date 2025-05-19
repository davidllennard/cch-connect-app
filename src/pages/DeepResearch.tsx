"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface DeepResearchProps {
  navigateTo: (page: PageType) => void
}

const DeepResearch: React.FC<DeepResearchProps> = ({ navigateTo }) => {
  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("research-portal")} />
        <h1>Deep Research</h1>
      </div>
      <p className="page-description">Access advanced scientific resources and publications</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Scientific Databases</h2>
        </div>
        <div className="card-content">
          <div className="database-list">
            <div
              className="database-item"
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
              }}
            >
              <h3>PubMed</h3>
              <p>
                Access over 33 million citations for biomedical literature from MEDLINE, life science journals, and
                online books.
              </p>
              <button className="button button-primary" style={{ marginTop: "10px" }}>
                Access PubMed
              </button>
            </div>

            <div
              className="database-item"
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
              }}
            >
              <h3>Cochrane Library</h3>
              <p>
                Collection of databases containing high-quality, independent evidence to inform healthcare
                decision-making.
              </p>
              <button className="button button-primary" style={{ marginTop: "10px" }}>
                Access Cochrane
              </button>
            </div>

            <div
              className="database-item"
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
              }}
            >
              <h3>ScienceDirect</h3>
              <p>Leading platform of peer-reviewed scholarly literature, including journals, books, and articles.</p>
              <button className="button button-primary" style={{ marginTop: "10px" }}>
                Access ScienceDirect
              </button>
            </div>

            <div
              className="database-item"
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
              }}
            >
              <h3>Google Scholar</h3>
              <p>
                Search across a wide variety of disciplines and sources: articles, theses, books, abstracts and court
                opinions.
              </p>
              <button className="button button-primary" style={{ marginTop: "10px" }}>
                Access Google Scholar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Multiple Myeloma Research</h2>
        </div>
        <div className="card-content">
          <div className="research-list">
            <div
              className="research-item"
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
              }}
            >
              <h3>Recent Advances in Multiple Myeloma Treatment</h3>
              <p>A comprehensive review of novel therapies and treatment approaches for multiple myeloma.</p>
              <div
                className="research-meta"
                style={{ marginTop: "10px", fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <span>Journal of Clinical Oncology, 2023</span>
              </div>
              <button className="button button-outline" style={{ marginTop: "10px" }}>
                Read Full Paper
              </button>
            </div>

            <div
              className="research-item"
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
              }}
            >
              <h3>CAR-T Cell Therapy in Multiple Myeloma: Current Status and Future Directions</h3>
              <p>An in-depth analysis of CAR-T cell therapy applications in multiple myeloma treatment.</p>
              <div
                className="research-meta"
                style={{ marginTop: "10px", fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <span>Nature Reviews Cancer, 2023</span>
              </div>
              <button className="button button-outline" style={{ marginTop: "10px" }}>
                Read Full Paper
              </button>
            </div>

            <div
              className="research-item"
              style={{
                marginBottom: "20px",
                padding: "15px",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
              }}
            >
              <h3>Genomic Landscape of Multiple Myeloma: Implications for Targeted Therapy</h3>
              <p>
                A study of genomic alterations in multiple myeloma and their implications for personalized treatment
                approaches.
              </p>
              <div
                className="research-meta"
                style={{ marginTop: "10px", fontSize: "0.9rem", color: "var(--text-secondary)" }}
              >
                <span>Blood Cancer Journal, 2022</span>
              </div>
              <button className="button button-outline" style={{ marginTop: "10px" }}>
                Read Full Paper
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Research Tools</h2>
        </div>
        <div className="card-content">
          <div
            className="tool-list"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}
          >
            <div
              className="tool-item"
              style={{ padding: "15px", border: "1px solid var(--border-color)", borderRadius: "8px" }}
            >
              <h3>Citation Manager</h3>
              <p>Organize research papers and generate citations in various formats.</p>
              <button className="button button-outline" style={{ marginTop: "10px" }}>
                Access Tool
              </button>
            </div>

            <div
              className="tool-item"
              style={{ padding: "15px", border: "1px solid var(--border-color)", borderRadius: "8px" }}
            >
              <h3>Statistical Analysis</h3>
              <p>Tools for analyzing research data and generating statistical reports.</p>
              <button className="button button-outline" style={{ marginTop: "10px" }}>
                Access Tool
              </button>
            </div>

            <div
              className="tool-item"
              style={{ padding: "15px", border: "1px solid var(--border-color)", borderRadius: "8px" }}
            >
              <h3>Research Translator</h3>
              <p>Translate complex scientific papers into easy-to-understand summaries.</p>
              <button className="button button-outline" style={{ marginTop: "10px" }}>
                Access Tool
              </button>
            </div>

            <div
              className="tool-item"
              style={{ padding: "15px", border: "1px solid var(--border-color)", borderRadius: "8px" }}
            >
              <h3>Clinical Trial Matcher</h3>
              <p>Find clinical trials that match your specific condition and criteria.</p>
              <button className="button button-outline" style={{ marginTop: "10px" }}>
                Access Tool
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeepResearch
