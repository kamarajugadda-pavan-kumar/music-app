import axios from "axios";
import React, { useState, useEffect } from "react";
import SongCard from "../components/SongCard/SongCard";
import checkImageLinks from "../functions/checkImageLinks";
import "./Body.css";

const getSongs = async (setSongs) => {
  const options = {
    method: "GET",
    url: "https://shazam.p.rapidapi.com/charts/track",
    params: { locale: "en-US", pageSize: "20", startFrom: "0" },
    headers: {
      "X-RapidAPI-Key": "c8fe763738msh222ade930dfb185p10c447jsn509968a6beaa",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setSongs(checkImageLinks(response.data.tracks));
      console.log(response.data.tracks);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default function Home(props) {
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    getSongs(setSongs);
  }, []);

  return (
    <div className="body">
      <div className="body-title">Released This week</div>
      <div className="body-songs">
        {songs
          ? songs.map((song) => {
              return (
                <SongCard
                  songData={song}
                  imgUrl={song.images.coverart}
                  songName={song.title}
                  key={song.key}
                ></SongCard>
              );
            })
          : ""}
      </div>
    </div>
  );
}
