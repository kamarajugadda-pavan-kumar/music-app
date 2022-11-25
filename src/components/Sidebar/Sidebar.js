import React from "react";
import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <span className="sidebar-span">
        <a href="/home" className="sidebar-a">
          Home
        </a>
      </span>
      <span className="sidebar-span">
        <a href="/search" className="sidebar-a">
          Search
        </a>
      </span>
      <span className="sidebar-span">
        <a href="/favourites" className="sidebar-a">
          Favourites
        </a>
      </span>
      <span className="sidebar-span">
        <a href="/playlists" className="sidebar-a">
          Playlists
        </a>
      </span>
    </div>
  );
}
