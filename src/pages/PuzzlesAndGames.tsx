"use client"

import type React from "react"
import { useState } from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"
import "../styles/PuzzlesAndGames.css"

interface PuzzlesAndGamesProps {
  navigateTo: (page: PageType) => void
}

const PuzzlesAndGames: React.FC<PuzzlesAndGamesProps> = ({ navigateTo }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("entertainment-hub")} />
        <h1>Today's Puzzles and Games</h1>
      </div>
      <p className="page-description">Challenge your mind with these puzzles and games</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Daily Puzzles</h2>
        </div>
        <div className="card-content">
          <div className="puzzle-grid">
            <div
              className={`puzzle-item ${hoveredItem === "cryptic" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredItem("cryptic")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => alert("Opening Cryptic Crossword...")}
            >
              <div className="puzzle-image">
                <img src="/placeholder.svg?height=150&width=150&text=Cryptic+Crossword" alt="Cryptic Crossword" />
              </div>
              <h3>Today's Cryptic Crossword</h3>
              <p>Challenge yourself with our daily cryptic crossword puzzle.</p>
              <button className="button button-primary">Play Now</button>
            </div>

            <div
              className={`puzzle-item ${hoveredItem === "quick" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredItem("quick")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => alert("Opening Quick Crossword...")}
            >
              <div className="puzzle-image">
                <img src="/placeholder.svg?height=150&width=150&text=Quick+Crossword" alt="Quick Crossword" />
              </div>
              <h3>Today's Quick Crossword</h3>
              <p>A simpler crossword for a quick mental workout.</p>
              <button className="button button-primary">Play Now</button>
            </div>

            <div
              className={`puzzle-item ${hoveredItem === "sudoku" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredItem("sudoku")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => alert("Opening Sudoku...")}
            >
              <div className="puzzle-image">
                <img src="/placeholder.svg?height=150&width=150&text=Sudoku" alt="Sudoku" />
              </div>
              <h3>Sudoku</h3>
              <p>Test your logic with today's Sudoku puzzle.</p>
              <button className="button button-primary">Play Now</button>
            </div>

            <div
              className={`puzzle-item ${hoveredItem === "wordle" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredItem("wordle")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => alert("Opening Wordle...")}
            >
              <div className="puzzle-image">
                <img src="/placeholder.svg?height=150&width=150&text=Wordle" alt="Wordle" />
              </div>
              <h3>Wordle</h3>
              <p>Guess the five-letter word in six tries or less.</p>
              <button className="button button-primary">Play Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Games</h2>
        </div>
        <div className="card-content">
          <div className="game-grid">
            <div
              className={`game-item ${hoveredItem === "minecraft" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredItem("minecraft")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => alert("Opening Minecraft...")}
            >
              <div className="game-image">
                <img src="/placeholder.svg?height=180&width=180&text=Minecraft" alt="Minecraft" />
              </div>
              <h3>Minecraft</h3>
              <p>Build and explore in this creative sandbox game.</p>
              <button className="button button-primary">Play Now</button>
            </div>

            <div
              className={`game-item ${hoveredItem === "chess" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredItem("chess")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => alert("Opening Chess...")}
            >
              <div className="game-image">
                <img src="/placeholder.svg?height=180&width=180&text=Chess" alt="Chess" />
              </div>
              <h3>Chess</h3>
              <p>Play against the computer at your chosen difficulty level.</p>
              <div className="difficulty-selector">
                <label>Difficulty:</label>
                <select>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>
              <button className="button button-primary">Play Now</button>
            </div>

            <div
              className={`game-item ${hoveredItem === "backgammon" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredItem("backgammon")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => alert("Opening Backgammon...")}
            >
              <div className="game-image">
                <img src="/placeholder.svg?height=180&width=180&text=Backgammon" alt="Backgammon" />
              </div>
              <h3>Backgammon</h3>
              <p>A classic board game of strategy and luck.</p>
              <div className="difficulty-selector">
                <label>Difficulty:</label>
                <select>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <button className="button button-primary">Play Now</button>
            </div>

            <div
              className={`game-item ${hoveredItem === "poker" ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredItem("poker")}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => alert("Opening Poker...")}
            >
              <div className="game-image">
                <img src="/placeholder.svg?height=180&width=180&text=Poker" alt="Poker" />
              </div>
              <h3>Poker</h3>
              <p>Test your poker skills against computer opponents.</p>
              <div className="difficulty-selector">
                <label>Difficulty:</label>
                <select>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <button className="button button-primary">Play Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PuzzlesAndGames
