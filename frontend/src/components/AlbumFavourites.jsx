import React from "react";
import "../styles/AlbumDetail.css";

const favouriteAlbums = [
  {
    id: 1,
    title: "Cong",
    artist: "Tóc Tiên",
    plays: "324",
    image: "https://thanhnien.mediacdn.vn/Uploaded/minhnguyet/2022_11_21/nhac-viet2-7478.jpg",
  },
  {
    id: 2,
    title: "Bảo tàng của nuối tiếc",
    artist: "Vũ",
    plays: "455",
    image: "https://i.scdn.co/image/ab67616d0000b273be066d7fd668d8a0672b1245",
  },
  {
    id: 3,
    title: "Tò tí te",
    artist: "Wren Evans",
    plays: "200",
    image: "https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/9/2/2/1/9221a527645f506db573a5af94c38ceb.jpg",
  },
  {
    id: 4,
    title: "Thằng Điên",
    artist: "JustaTee, Phương Ly",
    plays: "1.8M",
    image: "https://i.scdn.co/image/ab67616d0000b27333a20720e2b9c247b0f2d9f1",
  },
  {
    id: 5,
    title: "Hoàng",
    artist: "Hoàng Thùy Linh",
    plays: "1.3M",
    image: "https://i.scdn.co/image/ab67616d0000b273a8c4ea4be2a50c3240e91b80",
  },
];

const AlbumFavourites = () => {
  return (
    <div className="album-detail album-favourites">
      <div className="album-header">
        <div className="album-infor">
          <h1>Album Favourites</h1>
        </div>
      </div>
      <div className="song-list">
        {favouriteAlbums.map((album) => (
          <div className="song-item" key={album.id}>
            <img className="song-image" src={album.image} alt="album cover" />
            <div className="song-info">
              <div className="song-main-info">
                <span className="song-title">{album.title}</span>
                <span className="song-artist">{album.artist}</span>
              </div>
              <span className="song-plays">{album.plays} plays</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumFavourites;
