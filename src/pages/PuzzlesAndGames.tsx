"use client";

import type React from "react";
import BackButton from "../components/BackButton";
import type { PageType } from "./_app";

interface PuzzlesAndGamesProps {
  navigateTo: (page: PageType) => void;
}

const PuzzlesAndGames: React.FC<PuzzlesAndGamesProps> = ({ navigateTo }) => {
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
            <div className="puzzle-item">
              <h3>Today's Cryptic Crossword</h3>
              <p>Challenge yourself with our daily cryptic crossword puzzle.</p>
              <button className="button button-primary">Play Now</button>
            </div>

            <div className="puzzle-item">
              <h3>Today's Quick Crossword</h3>
              <p>A simpler crossword for a quick mental workout.</p>
              <button className="button button-primary">Play Now</button>
            </div>

            <div className="puzzle-item">
              <h3>Sudoku</h3>
              <p>Test your logic with today's Sudoku puzzle.</p>
              <button className="button button-primary">Play Now</button>
            </div>

            <div className="puzzle-item">
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
            <div className="game-item">
              <h3>Minecraft</h3>
              <p>Build and explore in this creative sandbox game.</p>
              <button className="button button-primary">Play Now</button>
            </div>

            <div className="game-item">
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

            <div className="game-item">
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

            <div className="game-item">
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
  );
};

export default PuzzlesAndGames;
