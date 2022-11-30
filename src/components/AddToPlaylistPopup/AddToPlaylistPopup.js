import React, { useEffect, useState } from "react";
import "./AddToPlaylistPopup.css";

const handleClick = (e, item, songData, setDisplayPopup, displayPopup) => {
  console.log(item, songData);
  let playlistData = JSON.parse(localStorage.getItem("playlists"));
  playlistData[item].push(songData);
  localStorage.setItem("playlists", JSON.stringify(playlistData));
  setDisplayPopup(!displayPopup);
};

export default function AddToPlaylistPopup(props) {
  const { songData, setDisplayPopup, displayPopup } = props;
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    setPlaylists(Object.keys(JSON.parse(localStorage.getItem("playlists"))));
  }, []);
  return (
    <div className="popup-container" id="popup-container">
      <div className="popup-playlist">
        <ul className="popup-ul">
          {playlists.map((item) => {
            return (
              <li
                className="popup-li"
                key={item}
                onClick={(e) =>
                  handleClick(e, item, songData, setDisplayPopup, displayPopup)
                }
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="popup-add-new-playlist">
        <ul className="popup-ul">
          <li className="popup-li">
            <a href="/playlists">add new playlist</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
