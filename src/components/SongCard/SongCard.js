import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./SongCard.css";
import checkSongExistsInList from "../../functions/checkSongExistsInList";
import AddToPlaylistPopup from "../AddToPlaylistPopup/AddToPlaylistPopup";

const handleClick = (e, songData) => {
  let prev = localStorage.getItem("fav") ? localStorage.getItem("fav") : "[]";
  let status = checkSongExistsInList(
    JSON.parse(localStorage.getItem("fav")),
    songData.key
  );
  if (!status) {
    localStorage.setItem(
      "fav",
      JSON.stringify([...JSON.parse(prev), songData])
    );
  }
};

export default function SongCard(props) {
  let { songData } = props;
  const [displayPopup, setDisplayPopup] = useState(false);
  return (
    <div className="song">
      <div className="song-img-container">
        <img className="song-img" src={props.imgUrl} alt={props.songName}></img>
        <span className="song-fav" onClick={(e) => handleClick(e, songData)}>
          {checkSongExistsInList(
            JSON.parse(localStorage.getItem("fav")),
            songData.key
          ) ? (
            <BsHeartFill className="heart-fill" />
          ) : (
            <BsHeart className="heart-empty" />
          )}
        </span>
        <span
          className="song-add-to-playlist"
          onClick={(e) => setDisplayPopup(!displayPopup)}
        >
          <BiDotsVerticalRounded />
        </span>
        {displayPopup ? (
          <AddToPlaylistPopup
            songData={songData}
            setDisplayPopup={setDisplayPopup}
            displayPopup={displayPopup}
          />
        ) : null}
      </div>
      <span className="song-title">{props.songName}</span>
    </div>
  );
}
