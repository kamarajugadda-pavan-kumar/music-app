import React, { useEffect, useState } from "react";

const handleChange = (e, setPlaylistName) => {
  setPlaylistName(e.target.value);
};

const handleClick = (
  e,
  playlistName,
  setPlaylistName,
  playlists,
  setPlaylists
) => {
  let prev = localStorage.getItem("playlists")
    ? localStorage.getItem("playlists")
    : "[]";
  if (playlistName !== "") {
    localStorage.setItem(
      "playlists",
      JSON.stringify([...JSON.parse(prev), { [playlistName]: [] }])
    );
    setPlaylists([...playlists, playlistName]);
  }

  setPlaylistName("");
};

export default function Playlists(props) {
  const [playlistName, setPlaylistName] = useState("");
  const [playlists, setPlaylists] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("playlists")) {
      localStorage.setItem("playlists", JSON.stringify([]));
    }
    setPlaylists(JSON.parse(localStorage.getItem("playlists")));
  }, []);
  return (
    <div className="body">
      <div className="body-title playlist-title">
        <span>Playlists</span>
        <div>
          <input
            className="create-playlist-input"
            id="playlistName"
            onChange={(e) => handleChange(e, setPlaylistName)}
            value={playlistName}
          ></input>
          <span
            className="create-playlist-button"
            onClick={(e) =>
              handleClick(
                e,
                playlistName,
                setPlaylistName,
                playlists,
                setPlaylists
              )
            }
          >
            create Playlist
          </span>
        </div>
      </div>

      <div className="playlist-list">
        {playlists.map((item) => {
          return (
            <div className="playlist-single">
              {console.log(Object.keys(item)[0])}
              {Object.keys(item)[0]}
            </div>
          );
        })}
      </div>
    </div>
  );
}
