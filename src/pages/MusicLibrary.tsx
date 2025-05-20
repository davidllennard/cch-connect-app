"use client"

import type React from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface MusicLibraryProps {
  navigateTo: (page: PageType) => void
  handleInactiveButton?: () => void
}

const MusicLibrary: React.FC<MusicLibraryProps> = ({ navigateTo, handleInactiveButton }) => {
  // Sample music data
  const recentlyPlayed = [
    { title: "Bohemian Rhapsody", artist: "Queen", album: "A Night at the Opera", duration: "5:55" },
    { title: "Hotel California", artist: "Eagles", album: "Hotel California", duration: "6:30" },
    { title: "Imagine", artist: "John Lennon", album: "Imagine", duration: "3:03" },
    { title: "Sweet Child O' Mine", artist: "Guns N' Roses", album: "Appetite for Destruction", duration: "5:56" },
    { title: "Billie Jean", artist: "Michael Jackson", album: "Thriller", duration: "4:54" },
  ]

  const playlists = [
    { name: "Relaxation", songs: 15, duration: "1 hr 12 min" },
    { name: "Workout", songs: 20, duration: "1 hr 30 min" },
    { name: "Favorites", songs: 32, duration: "2 hr 45 min" },
    { name: "Classical", songs: 18, duration: "1 hr 50 min" },
    { name: "Jazz", songs: 24, duration: "2 hr 10 min" },
    { name: "Rock Classics", songs: 28, duration: "2 hr 30 min" },
  ]

  const albums = [
    { title: "Thriller", artist: "Michael Jackson", year: 1982, songs: 9 },
    { title: "Back in Black", artist: "AC/DC", year: 1980, songs: 10 },
    { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973, songs: 10 },
    { title: "Abbey Road", artist: "The Beatles", year: 1969, songs: 17 },
    { title: "Rumours", artist: "Fleetwood Mac", year: 1977, songs: 11 },
    { title: "Born to Run", artist: "Bruce Springsteen", year: 1975, songs: 8 },
  ]

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("entertainment-hub")} />
        <h1>Your Music Library</h1>
      </div>
      <p className="page-description">Browse and play your music collection</p>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Recently Played</h2>
        </div>
        <div className="card-content">
          <div className="music-list">
            <div className="music-list-header">
              <div className="music-list-column song-column">Song</div>
              <div className="music-list-column artist-column">Artist</div>
              <div className="music-list-column album-column">Album</div>
              <div className="music-list-column duration-column">Duration</div>
              <div className="music-list-column actions-column"></div>
            </div>
            {recentlyPlayed.map((song, index) => (
              <div key={index} className="music-list-item">
                <div className="music-list-column song-column">
                  <div className="song-info">
                    <div className="song-number">{index + 1}</div>
                    <div className="song-title">{song.title}</div>
                  </div>
                </div>
                <div className="music-list-column artist-column">{song.artist}</div>
                <div className="music-list-column album-column">{song.album}</div>
                <div className="music-list-column duration-column">{song.duration}</div>
                <div className="music-list-column actions-column">
                  <button className="button button-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                  <button className="button button-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </button>
                  <button className="button button-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Your Playlists</h2>
        </div>
        <div className="card-content">
          <div className="playlists-grid">
            {playlists.map((playlist, index) => (
              <div key={index} className="playlist-item">
                <div className="playlist-cover">
                  <img src={`/placeholder.svg?height=150&width=150&text=Playlist`} alt={playlist.name} />
                  <div className="playlist-play-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="playlist-info">
                  <h3 className="playlist-name">{playlist.name}</h3>
                  <p className="playlist-details">
                    {playlist.songs} songs • {playlist.duration}
                  </p>
                </div>
              </div>
            ))}
            <div className="playlist-item new-playlist">
              <div className="playlist-cover new-playlist-cover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <div className="playlist-info">
                <h3 className="playlist-name">Create New Playlist</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Albums</h2>
        </div>
        <div className="card-content">
          <div className="albums-grid">
            {albums.map((album, index) => (
              <div key={index} className="album-item">
                <div className="album-cover">
                  <img
                    src={`/placeholder.svg?height=180&width=180&text=${album.title}`}
                    alt={`${album.title} by ${album.artist}`}
                  />
                  <div className="album-play-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
                <div className="album-info">
                  <h3 className="album-title">{album.title}</h3>
                  <p className="album-artist">{album.artist}</p>
                  <p className="album-details">
                    {album.year} • {album.songs} songs
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Now Playing</h2>
        </div>
        <div className="card-content">
          <div className="now-playing">
            <div className="now-playing-cover">
              <img src="/placeholder.svg?height=200&width=200&text=Album+Cover" alt="Album Cover" />
            </div>
            <div className="now-playing-info">
              <h3 className="now-playing-title">Bohemian Rhapsody</h3>
              <p className="now-playing-artist">Queen • A Night at the Opera</p>
              <div className="now-playing-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "45%" }}></div>
                </div>
                <div className="progress-time">
                  <span>2:40</span>
                  <span>5:55</span>
                </div>
              </div>
              <div className="now-playing-controls">
                <button className="button button-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="19 20 9 12 19 4 19 20"></polygon>
                    <line x1="5" y1="19" x2="5" y2="5"></line>
                  </svg>
                </button>
                <button className="button button-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                </button>
                <button className="button button-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 4 15 12 5 20 5 4"></polygon>
                    <line x1="19" y1="5" x2="19" y2="19"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicLibrary
