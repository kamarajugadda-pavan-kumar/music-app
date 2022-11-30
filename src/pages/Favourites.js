import React, { useEffect, useState } from "react";
import SongCard from "../components/SongCard/SongCard";
export default function Favourites(props) {
  const [fav, setFav] = useState([]);
  useEffect(() => {
    const f = localStorage.getItem("fav")
      ? JSON.parse(localStorage.getItem("fav"))
      : [];
    setFav(f);
  }, []);

  return (
    <div className="body">
      <div className="body-title">Favourites</div>
      <div className="body-songs">
        {fav.map((song) => {
          return (
            <SongCard
              songData={song}
              imgUrl={song.images.coverart}
              songName={song.title}
              key={song.key}
            ></SongCard>
          );
        })}
      </div>
    </div>
  );
}
