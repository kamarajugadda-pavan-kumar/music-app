import React from "react";
import "./SongCard.css";

const handleClick = (e, songData) => {
  let prev = localStorage.getItem("fav") ? localStorage.getItem("fav") : "[]";
  localStorage.setItem("fav", JSON.stringify([...JSON.parse(prev), songData]));
};

export default function SongCard(props) {
  let { songData } = props;
  return (
    <div className="song">
      <img className="song-img" src={props.imgUrl} alt={props.songName}></img>
      <span className="song-title">{props.songName}</span>
      <span className="song-fav" onClick={(e) => handleClick(e, songData)}>
        ♡🖤
      </span>
    </div>
  );
}
