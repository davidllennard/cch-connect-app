"use client"

import type React from "react"
import { useState } from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface PhotosAndVideosProps {
  navigateTo: (page: PageType) => void
  handleInactiveButton?: () => void
}

const PhotosAndVideos: React.FC<PhotosAndVideosProps> = ({ navigateTo, handleInactiveButton }) => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos")
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null)

  // Sample photo albums
  const photoAlbums = [
    { name: "Family", count: 124, cover: "/placeholder.svg?height=150&width=150&text=Family" },
    { name: "Vacation", count: 87, cover: "/placeholder.svg?height=150&width=150&text=Vacation" },
    { name: "Nature", count: 56, cover: "/placeholder.svg?height=150&width=150&text=Nature" },
    { name: "Pets", count: 32, cover: "/placeholder.svg?height=150&width=150&text=Pets" },
    { name: "Events", count: 78, cover: "/placeholder.svg?height=150&width=150&text=Events" },
    { name: "Food", count: 45, cover: "/placeholder.svg?height=150&width=150&text=Food" },
  ]

  // Sample photos for the selected album
  const photos = [
    { id: 1, src: "/placeholder.svg?height=200&width=200&text=Photo+1", date: "May 15, 2023" },
    { id: 2, src: "/placeholder.svg?height=200&width=200&text=Photo+2", date: "May 14, 2023" },
    { id: 3, src: "/placeholder.svg?height=200&width=200&text=Photo+3", date: "May 14, 2023" },
    { id: 4, src: "/placeholder.svg?height=200&width=200&text=Photo+4", date: "May 13, 2023" },
    { id: 5, src: "/placeholder.svg?height=200&width=200&text=Photo+5", date: "May 13, 2023" },
    { id: 6, src: "/placeholder.svg?height=200&width=200&text=Photo+6", date: "May 12, 2023" },
    { id: 7, src: "/placeholder.svg?height=200&width=200&text=Photo+7", date: "May 12, 2023" },
    { id: 8, src: "/placeholder.svg?height=200&width=200&text=Photo+8", date: "May 11, 2023" },
    { id: 9, src: "/placeholder.svg?height=200&width=200&text=Photo+9", date: "May 10, 2023" },
    { id: 10, src: "/placeholder.svg?height=200&width=200&text=Photo+10", date: "May 10, 2023" },
    { id: 11, src: "/placeholder.svg?height=200&width=200&text=Photo+11", date: "May 9, 2023" },
    { id: 12, src: "/placeholder.svg?height=200&width=200&text=Photo+12", date: "May 8, 2023" },
  ]

  // Sample video collections
  const videoCollections = [
    { name: "Family Videos", count: 12, cover: "/placeholder.svg?height=150&width=150&text=Family+Videos" },
    { name: "Travel", count: 8, cover: "/placeholder.svg?height=150&width=150&text=Travel" },
    { name: "Events", count: 15, cover: "/placeholder.svg?height=150&width=150&text=Events" },
    { name: "Pets", count: 6, cover: "/placeholder.svg?height=150&width=150&text=Pets" },
  ]

  // Sample videos
  const videos = [
    {
      id: 1,
      title: "Family Reunion",
      duration: "12:34",
      thumbnail: "/placeholder.svg?height=200&width=320&text=Family+Reunion",
      date: "May 15, 2023",
    },
    {
      id: 2,
      title: "Beach Vacation",
      duration: "8:22",
      thumbnail: "/placeholder.svg?height=200&width=320&text=Beach+Vacation",
      date: "May 10, 2023",
    },
    {
      id: 3,
      title: "Birthday Party",
      duration: "15:47",
      thumbnail: "/placeholder.svg?height=200&width=320&text=Birthday+Party",
      date: "May 5, 2023",
    },
    {
      id: 4,
      title: "Dog Playing",
      duration: "3:12",
      thumbnail: "/placeholder.svg?height=200&width=320&text=Dog+Playing",
      date: "May 1, 2023",
    },
    {
      id: 5,
      title: "Cooking Tutorial",
      duration: "22:05",
      thumbnail: "/placeholder.svg?height=200&width=320&text=Cooking+Tutorial",
      date: "April 28, 2023",
    },
    {
      id: 6,
      title: "Garden Tour",
      duration: "5:38",
      thumbnail: "/placeholder.svg?height=200&width=320&text=Garden+Tour",
      date: "April 25, 2023",
    },
  ]

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("entertainment-hub")} />
        <h1>Photos & Videos</h1>
      </div>
      <p className="page-description">Browse your photo and video collection</p>

      <div className="media-tabs">
        <button
          className={`tab-button ${activeTab === "photos" ? "active" : ""}`}
          onClick={() => setActiveTab("photos")}
        >
          Photos
        </button>
        <button
          className={`tab-button ${activeTab === "videos" ? "active" : ""}`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      {activeTab === "photos" && (
        <>
          {!selectedAlbum ? (
            <div className="card">
              <div className="card-header">
                <h2 className="card-title">Photo Albums</h2>
              </div>
              <div className="card-content">
                <div className="albums-grid">
                  {photoAlbums.map((album, index) => (
                    <div key={index} className="album-item" onClick={() => setSelectedAlbum(album.name)}>
                      <div className="album-cover">
                        <img src={album.cover || "/placeholder.svg"} alt={album.name} />
                      </div>
                      <div className="album-info">
                        <h3 className="album-name">{album.name}</h3>
                        <p className="album-count">{album.count} photos</p>
                      </div>
                    </div>
                  ))}
                  <div className="album-item new-album">
                    <div className="album-cover new-album-cover">
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
                    <div className="album-info">
                      <h3 className="album-name">Create New Album</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-header">
                <div className="card-header-with-action">
                  <h2 className="card-title">{selectedAlbum} Album</h2>
                  <button className="button button-outline" onClick={() => setSelectedAlbum(null)}>
                    Back to Albums
                  </button>
                </div>
              </div>
              <div className="card-content">
                <div className="photos-grid">
                  {photos.map((photo) => (
                    <div key={photo.id} className="photo-item">
                      <img src={photo.src || "/placeholder.svg"} alt={`Photo ${photo.id}`} />
                      <div className="photo-date">{photo.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {activeTab === "videos" && (
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Videos</h2>
          </div>
          <div className="card-content">
            <div className="video-collections">
              <h3>Collections</h3>
              <div className="collections-grid">
                {videoCollections.map((collection, index) => (
                  <div key={index} className="collection-item">
                    <div className="collection-cover">
                      <img src={collection.cover || "/placeholder.svg"} alt={collection.name} />
                      <div className="collection-count">{collection.count}</div>
                    </div>
                    <div className="collection-info">
                      <h4 className="collection-name">{collection.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="recent-videos">
              <h3>Recent Videos</h3>
              <div className="videos-grid">
                {videos.map((video) => (
                  <div key={video.id} className="video-item">
                    <div className="video-thumbnail">
                      <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} />
                      <div className="video-duration">{video.duration}</div>
                      <div className="video-play-button">
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
                    <div className="video-info">
                      <h4 className="video-title">{video.title}</h4>
                      <p className="video-date">{video.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotosAndVideos
