import React from "react";
import "../styles/PLaylistList.css";

const PlaylistList = () => {
  return (
    <div className="playlist-list">
      <div className="playlist-header">
        <div className="playlist-infor">
          <h1>Your Playlists</h1>
        </div>
      </div>
      <div className="playlist-items">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div className="playlist-item" key={index}>
              <img
                className="playlist-image"
                src={`https://picsum.photos/seed/playlist${index}/100`}
                alt="playlist cover"
              />
              <div className="playlist-info">
                <div className="playlist-main-info">
                  <span className="playlist-title">Playlist {index + 1}</span>
                </div>
                <span className="playlist-songs">
                  {Math.floor(Math.random() * 50) + 10} songs
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlaylistList;
