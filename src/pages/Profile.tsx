"use client"

import type React from "react"
import { useState } from "react"
import BackButton from "../components/BackButton"
import type { PageType } from "../App"

interface ProfileProps {
  navigateTo: (page: PageType) => void
}

const Profile: React.FC<ProfileProps> = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    dob: "",
    address: "",
    zipCode: "",
    cancerDiagnosis: "",
    diagnosisDate: "",
    liveAlone: "",
    maritalStatus: "",
    singleParent: "",
    likeToCook: "",
    topMovies: "",
    topTVShows: "",
    topBands: "",
    favoriteAuthors: "",
    makeArt: "",
    artGenre: "",
    playInstrument: "",
    instrumentType: "",
    canSing: "",
    specialTalent: "",
    otherHobby: "",
  })

  const [hobbies, setHobbies] = useState<string[]>([])
  const [cuisines, setCuisines] = useState<string[]>([])

  // Sort hobby options alphabetically
  const hobbyOptions = [
    "Bird watching",
    "Collecting",
    "Cooking",
    "Dancing",
    "Fishing",
    "Gaming",
    "Gardening",
    "Hiking",
    "Knitting",
    "Meditation",
    "Music",
    "Painting",
    "Photography",
    "Reading",
    "Sports",
    "Travel",
    "Volunteering",
    "Woodworking",
    "Writing",
    "Yoga",
  ]

  const cuisineOptions = [
    "American",
    "Brazilian",
    "Caribbean",
    "Chinese",
    "Ethiopian",
    "French",
    "German",
    "Greek",
    "Indian",
    "Italian",
    "Japanese",
    "Korean",
    "Lebanese",
    "Mexican",
    "Moroccan",
    "Russian",
    "Spanish",
    "Thai",
    "Turkish",
    "Vietnamese",
  ]

  const artGenreOptions = [
    "Digital Art",
    "Drawing",
    "Painting",
    "Sculpture",
    "Photography",
    "Graphic Design",
    "Animation",
    "Poetry",
    "Book Writing",
    "Music Composition",
    "Film Making",
    "Crafts",
    "Ceramics",
    "Printmaking",
    "Mixed Media",
    "Other",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleHobbyChange = (hobby: string) => {
    if (hobbies.includes(hobby)) {
      setHobbies(hobbies.filter((h) => h !== hobby))
    } else {
      setHobbies([...hobbies, hobby])
    }
  }

  const handleCuisineChange = (cuisine: string) => {
    if (cuisines.includes(cuisine)) {
      setCuisines(cuisines.filter((c) => c !== cuisine))
    } else {
      setCuisines([...cuisines, cuisine])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Profile saved successfully!")
  }

  return (
    <div className="container page-container">
      <div className="page-header">
        <BackButton onClick={() => navigateTo("home")} />
        <h1>My Profile</h1>
      </div>
      <p className="page-description">Personalize your journey</p>

      <div className="ceo-message">
        <p>
          Navigating cancer is deeply personal, with each journey unique. Personalizing your approach is
          crucial—embracing treatments, support systems, and coping mechanisms that align with your individual needs and
          values. By recognizing your specific challenges, likes and strengths, the Connect App becomes your steadfast
          companion, adapting to your changing needs rather than imposing rigid protocols. This personalized partnership
          preserves your dignity and agency when control feels elusive, ensuring medical decisions and support honor
          your distinct physical, emotional, and spiritual requirements. When care is tailored to you, the Connect App
          becomes a compassionate ally throughout your journey.
        </p>
        <p className="ceo-signature">David Lennard, CEO and Principal Founder</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Personal Information</h2>
          </div>
          <div className="card-content">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
              </div>

              <div className="form-group">
                <label htmlFor="sex">Sex</label>
                <select id="sex" name="sex" value={formData.sex} onChange={handleInputChange}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
              </div>

              <div className="form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} />
              </div>

              <div className="form-group">
                <label htmlFor="maritalStatus">Marital Status</label>
                <select
                  id="maritalStatus"
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                  <option value="separated">Separated</option>
                  <option value="domestic-partnership">Domestic Partnership</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Medical Information</h2>
          </div>
          <div className="card-content">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="cancerDiagnosis">Cancer Diagnosis</label>
                <input
                  type="text"
                  id="cancerDiagnosis"
                  name="cancerDiagnosis"
                  value={formData.cancerDiagnosis}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="diagnosisDate">Date of Diagnosis</label>
                <input
                  type="date"
                  id="diagnosisDate"
                  name="diagnosisDate"
                  value={formData.diagnosisDate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="liveAlone">Do you live alone?</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="liveAlone"
                      value="yes"
                      checked={formData.liveAlone === "yes"}
                      onChange={handleInputChange}
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="liveAlone"
                      value="no"
                      checked={formData.liveAlone === "no"}
                      onChange={handleInputChange}
                    />{" "}
                    No
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="singleParent">Are you a single parent?</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="singleParent"
                      value="yes"
                      checked={formData.singleParent === "yes"}
                      onChange={handleInputChange}
                    />{" "}
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="singleParent"
                      value="no"
                      checked={formData.singleParent === "no"}
                      onChange={handleInputChange}
                    />{" "}
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Interests & Hobbies</h2>
          </div>
          <div className="card-content">
            <div className="form-group">
              <label htmlFor="topMovies">Top 10 Movies of All Time</label>
              <textarea
                id="topMovies"
                name="topMovies"
                value={formData.topMovies}
                onChange={handleInputChange}
                placeholder="Enter your favorite movies, separated by commas"
                rows={3}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="topTVShows">Top 20 TV Shows of All Time</label>
              <textarea
                id="topTVShows"
                name="topTVShows"
                value={formData.topTVShows}
                onChange={handleInputChange}
                placeholder="Enter your favorite TV shows, separated by commas"
                rows={3}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="topBands">Top 10 Bands of All Time</label>
              <textarea
                id="topBands"
                name="topBands"
                value={formData.topBands}
                onChange={handleInputChange}
                placeholder="Enter your favorite bands, separated by commas"
                rows={3}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="favoriteAuthors">Favorite Authors</label>
              <textarea
                id="favoriteAuthors"
                name="favoriteAuthors"
                value={formData.favoriteAuthors}
                onChange={handleInputChange}
                placeholder="Enter your favorite authors, separated by commas"
                rows={3}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="likeToCook">Do you like to cook?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="likeToCook"
                    value="yes"
                    checked={formData.likeToCook === "yes"}
                    onChange={handleInputChange}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="likeToCook"
                    value="no"
                    checked={formData.likeToCook === "no"}
                    onChange={handleInputChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {formData.likeToCook === "yes" && (
              <div className="form-group">
                <label>Favorite Cuisines</label>
                <div className="cuisine-grid">
                  {cuisineOptions.map((cuisine) => (
                    <label key={cuisine} className="cuisine-item">
                      <input
                        type="checkbox"
                        checked={cuisines.includes(cuisine)}
                        onChange={() => handleCuisineChange(cuisine)}
                      />{" "}
                      {cuisine}
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="form-group">
              <label>Hobbies and Areas of Interest</label>
              <div
                className="hobby-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px" }}
              >
                {hobbyOptions.map((hobby) => (
                  <label key={hobby} className="hobby-item">
                    <input
                      type="checkbox"
                      checked={hobbies.includes(hobby)}
                      onChange={() => handleHobbyChange(hobby)}
                    />{" "}
                    {hobby}
                  </label>
                ))}
              </div>

              <div className="other-hobby-container">
                <label htmlFor="otherHobby">Other Hobbies</label>
                <textarea
                  id="otherHobby"
                  name="otherHobby"
                  value={formData.otherHobby}
                  onChange={handleInputChange}
                  placeholder="Enter any other hobbies or interests not listed above"
                  rows={2}
                ></textarea>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="makeArt">Do you like to make art?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="makeArt"
                    value="yes"
                    checked={formData.makeArt === "yes"}
                    onChange={handleInputChange}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="makeArt"
                    value="no"
                    checked={formData.makeArt === "no"}
                    onChange={handleInputChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {formData.makeArt === "yes" && (
              <div className="form-group">
                <label htmlFor="artGenre">Genre</label>
                <select id="artGenre" name="artGenre" value={formData.artGenre} onChange={handleInputChange}>
                  <option value="">Select a genre</option>
                  {artGenreOptions.map((genre) => (
                    <option key={genre} value={genre.toLowerCase().replace(/\s+/g, "-")}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="playInstrument">Do you play a musical instrument?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="playInstrument"
                    value="yes"
                    checked={formData.playInstrument === "yes"}
                    onChange={handleInputChange}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="playInstrument"
                    value="no"
                    checked={formData.playInstrument === "no"}
                    onChange={handleInputChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            {formData.playInstrument === "yes" && (
              <div className="form-group">
                <label htmlFor="instrumentType">What instrument(s) do you play?</label>
                <input
                  type="text"
                  id="instrumentType"
                  name="instrumentType"
                  value={formData.instrumentType}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="canSing">Can you sing?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="canSing"
                    value="yes"
                    checked={formData.canSing === "yes"}
                    onChange={handleInputChange}
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="canSing"
                    value="no"
                    checked={formData.canSing === "no"}
                    onChange={handleInputChange}
                  />{" "}
                  No
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialTalent">In 100 words or less, what's your special talent?</label>
              <textarea
                id="specialTalent"
                name="specialTalent"
                value={formData.specialTalent}
                onChange={handleInputChange}
                placeholder="Describe your special talent..."
                rows={4}
                maxLength={500}
              ></textarea>
              <div className="word-count">{formData.specialTalent.split(/\s+/).filter(Boolean).length}/100 words</div>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="button button-primary">
            Save Profile
          </button>
          <button type="button" className="button button-outline" onClick={() => navigateTo("home")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
