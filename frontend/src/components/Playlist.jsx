import React, { useState } from "react";
import "../styles/Playlist.css";

const Playlist = () => {
  const [songs, setSongs] = useState([
    {
      title: "Chịu cách mình nói thua",
      artist: "Rhyder",
      duration: "3:45",
      img: "https://yt3.googleusercontent.com/Wi1jIAQcToKCteHGUmoKzgO9f9Bj9wKbIWZKniYjCIejQHnQ2916Nt4GejbZHChdxz7zdFuKsA=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Exit Sign",
      artist: "HIEUTHUHAI",
      duration: "4:12",
      img: "https://photo-resize-zmp3.zadn.vn/w360_r1x1_jpeg/cover/d/4/a/c/d4acc6335d41bd7164173312c6123706.jpg",
    },
  ]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Example search results
  const mockSearchResults = [
    {
      title: "Lao Tâm Khổ Tứ",
      artist: "Thanh Hưng",
      duration: "3:21",
      img: "https://i.ytimg.com/vi/QxLkENZFkrk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDilF7GIF3fVAYtF0Dff2ip3H1NTA",
    },
    {
      title: "Em là",
      artist: "MONO",
      duration: "4:45",
      img: "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/e/7/7/2/e772358978fef8a02eefd34f6a4ca6f3.jpg",
    },
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // Mock search logic
    if (e.target.value) {
      setSearchResults(
        mockSearchResults.filter((song) =>
          song.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setSearchResults([]);
    }
  };

  const addSongToPlaylist = (song) => {
    setSongs([...songs, song]);
    setSearch("");
    setSearchResults([]);
  };

  return (
    <div className="playlist-container">
      <div className="playlist-header">
        <img
          className="playlist-header-image"
          src="https://images.beta.cosmos.so/45316875-9608-43e4-8cc0-09d5c89b81a3?format=jpeg"
          alt="Playlist Cover"
        />
        <div className="playlist-info">
          <h1>My Favourite Playlist</h1>
          <p>A collection of your top hits</p>
        </div>
      </div>
      <div className="playlist-actions">
        <i className="bx bx-play-circle play-button"></i>
        <i className="bx bx-shuffle"></i>
        <i className="bx bx-download"></i>
        <i className="bx bx-edit-alt"></i>
      </div>
      <div className="playlist-song-list">
        {songs.map((song, index) => (
          <div className="playlist-song-item" key={index}>
            <img
              className="playlist-song-image"
              src={song.img}
              alt={song.title}
            />
            <div className="playlist-song-info">
              <div className="playlist-song-main-info">
                <span className="playlist-song-title">{song.title}</span>
                <span className="playlist-song-artist">{song.artist}</span>
              </div>
              <span className="playlist-song-duration">{song.duration}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="search-divider"></div>
      <div className="playlist-search">
            <i className="bx bx-search"></i>
            <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search for a song to add"
            />
            <div className="playlist-search-results">
            {searchResults.map((song, index) => (
                <div
                className="playlist-search-result-item"
                key={index}
                onClick={() => addSongToPlaylist(song)}
                >
                <img
                    className="playlist-search-result-image"
                    src={song.img}
                    alt={song.title}
                />
                <div className="playlist-search-result-info">
                    <span className="playlist-search-result-title">
                    {song.title}
                    </span>
                    <span className="playlist-search-result-artist">
                    {song.artist}
                    </span>
                </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default Playlist;
