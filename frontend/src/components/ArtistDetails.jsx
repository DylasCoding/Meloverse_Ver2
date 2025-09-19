import React from "react";
import "../styles/ArtistDetail.css";
import { useParams } from "react-router-dom";
import { ArtistContext } from "../contexts/ArtistContext";
import { useContext } from "react";
import { useEffect } from "react";
import { formatDuration } from "../utils/formatDuration";
import { SongContext } from "../contexts/SongContext";
import { QueueContext } from "../contexts/QueueContext";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ArtistDetail = () => {
  const { artistID } = useParams();
  const { songs, loading, error, fetchArtistDetails, artistData } = useContext(ArtistContext);
  const { fetchSong } = useContext(SongContext);
  const { handleSongClick } = useContext(QueueContext);

  // Gọi API để lấy danh sách bài hát khi component render
  useEffect(() => {
    console.log("ArtistID from URL:", artistID);
    fetchArtistDetails(artistID);
  }, [artistID]);

  if (!artistData || !songs) return <p>Loading data...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="artist-detail">
      <div
        className="artist-header"
        style={{ backgroundImage: `url(${artistData.imagePath})` }}
      >
        <div className="artist-info">
          <h1 className="artist-name">{artistData.userName}</h1>
          <p className="artist-followers">
            {artistData.followerCount ?? 0} followers
          </p>
          <div className="artist-actions">
            <i className="bx bx-play-circle play-button"></i>
            <i className="bx bx-heart"></i>
            <i className="bx bx-shuffle"></i>
            <button>Follow</button>
          </div>
        </div>
      </div>

      <div className="artist-songs">
        {songs.map((song, index) => (
          <div 
          key={song.id} 
          className="song-item"
          onClick={() => handleSongClick(song.id, fetchSong)}
          >
            <div className="song-index">{index + 1}</div>
            <LazyLoadImage
            src={song.imagePath}
            alt={song.trackTitle}
            className="song-image"
          />
            
            <div className="song-details">{song.trackTitle}</div>
            <div className="song-listens">{song.plays ?? 0} listens</div>
            <div className="song-duration">{formatDuration(song.duration)}</div>
          </div>
        ))}
      </div>

      <div className="artist-bio">
        <img
          src={artistData.imagePath}
          alt={artistData.userName}
          className="artist-bio-image"
        />
        <p className="artist-bio-text">{artistData.profile}</p>
      </div>
    </div>
  );
};

export default ArtistDetail;
