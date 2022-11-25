import React, { useState } from "react";
import SongCard from "../components/SongCard/SongCard";
import "./Body.css";
import axios from "axios";

const handleSearch = (e, searchTerm, setSongs, setAutoSearchResults) => {
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/search",
    params: { term: searchTerm, locale: "en-US", offset: "0", limit: "5" },
    headers: {
      "X-RapidAPI-Key": "c8fe763738msh222ade930dfb185p10c447jsn509968a6beaa",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      if (response.data.tracks?.hits) {
        console.log(response.data.tracks.hits);
        setSongs(response.data.tracks.hits);
        setAutoSearchResults(null);
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

const handleChange = async (e, setSearchTerm, setAutoSearchResults) => {
  setSearchTerm(e.target.value);
  const res = await autoComplete(e.target.value);
  console.log(res.data.hints);
  setAutoSearchResults(res.data.hints);
};

const autoComplete = async (searchTerm) => {
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/auto-complete",
    params: { term: searchTerm, locale: "en-US" },
    headers: {
      "X-RapidAPI-Key": "c8fe763738msh222ade930dfb185p10c447jsn509968a6beaa",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response;
};

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [autoSearchResults, setAutoSearchResults] = useState(null);
  const [songs, setSongs] = useState(null);
  return (
    <div className="body">
      <div className="body-title">Search music</div>
      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="search music"
          id="search"
          value={searchTerm}
          onChange={(e) => handleChange(e, setSearchTerm, setAutoSearchResults)}
        ></input>
        <button
          className="search-button"
          onClick={(e) =>
            handleSearch(e, searchTerm, setSongs, setAutoSearchResults)
          }
        >
          search
        </button>
      </div>
      <div className="search-results-wrapper">
        {autoSearchResults ? (
          <div className="search-results">
            {autoSearchResults.map((item) => {
              return (
                <span
                  className="search-results-span"
                  onClick={() => {
                    setSearchTerm(item.term);
                    setAutoSearchResults(null);
                  }}
                >
                  {item.term}
                </span>
              );
            })}
          </div>
        ) : null}
        {/* <div className="search-results">
          {autoSearchResults
            ? autoSearchResults.map((item) => {
                return (
                  <span
                    className="search-results-span"
                    onClick={() => {
                      setSearchTerm(item.term);
                      setAutoSearchResults(null);
                    }}
                  >
                    {item.term}
                  </span>
                );
              })
            : ""}
        </div> */}
      </div>

      <div className="body-songs">
        {songs
          ? songs.map((song) => {
              return (
                <SongCard
                  songData={song.track}
                  imgUrl={song.track.images.coverart}
                  songName={song.track.title}
                ></SongCard>
              );
            })
          : ""}
      </div>
    </div>
  );
}
