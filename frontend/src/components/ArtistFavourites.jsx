import React from 'react';
import '../styles/ArtistFavourites.css';

const ArtistFavourites = () => {
    const artists = [
        {
          name: "Sơn Tùng M-TP",
          followers: "9.5M",
          img: "https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj",
        },
        {
          name: "Hoàng Thùy Linh",
          followers: "3.2M",
          img: "https://vcdn1-vnexpress.vnecdn.net/2022/02/09/hoangthuylinh-7154-1627961612-4573-1644380784.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=YlobnHHYTSx1YXVP6y8D_g",
        },
        {
          name: "Đen Vâu",
          followers: "5.8M",
          img: "https://vcdn1-vnexpress.vnecdn.net/2022/02/09/denvau-5827-1627546466-5337-1644377203.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=TuKT8cqLOq4Onz7AVCeXGA",
        },
        {
          name: "Hòa Minzy",
          followers: "8.1M",
          img: "https://cdn-web.onlive.vn/onlive/image-news/hoa-minzy-huy-show-4eda66482d944979878f38b19a1c127d.jpg",
        },
        {
          name: "Rhyder",
          followers: "2.9M",
          img: "https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2024/4/10/quang-anh-17127124315492064568877-140-0-994-1366-crop-1712713714884247118860.jpg",
        },
        {
          name: "JustaTee",
          followers: "4.2M",
          img: "https://backstage.vn/storage/2024/07/Justatee-NTPMM-Ha-Noi-2-1048x570.jpg",
        },
      ];
      
    return (
        <div className="album-detail artist-favourites">
            <div className="album-header artist-header">
                <div className="album-infor artist-infor">
                    <h1>Artist Favourites</h1>
                </div>
            </div>
            <div className="artist-list">
                {artists.map((artist, index) => (
                    <div className="artist-item" key={index}>
                        <img className="artist-image" src={artist.img} alt={artist.name} />
                        <div className="artist-info">
                            <span className="artist-name">{artist.name}</span>
                            <br />
                            <span className="artist-followers">{artist.followers} followers</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistFavourites;
