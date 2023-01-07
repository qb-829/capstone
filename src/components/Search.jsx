import React, { useState, useEffect } from "react";
// import { useSelector } from 'react-redux'
import Button from "@mui/material/Button";
import axios from "axios";

export default function Search() {
  const [searchInput, setSearchInput] = useState(null);
  const [searchArtist, setArtistResults] = useState([]);
  const [searchGenre, setGenreResults] = useState([]);
  const [genre, setGenre] = useState("");

  // const resultsList = useSelector()

  const search = async (searchValue, isGenre) => {
    setGenre(searchValue);
    if (isGenre === false) {
      setGenre("miscellaneous");

      const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${searchValue}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data.toptracks.track);

        setArtistResults(data.toptracks.track);
        setGenreResults([]);
      } catch (error) {
        console.log(error);
      }
    } else {
      const api = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${searchValue}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`;

      try {
        const res = await fetch(api);
        const data = await res.json();

        console.log(data.tracks.track);

        setGenreResults(data.tracks.track);
        setArtistResults([]);
      } catch (error) {
        console.log(error);
      }
    }

};

useEffect(() => {}, [searchInput, searchArtist, searchGenre, genre]);

async function handleSubmit(songName, artistName) {
    // function handlesubmit calls the endpoint that will take the information and send it to the playlist database
    console.log("Time: ", Date.now(), "music");

    //if the USER uses the search input field to find tracks to add to the playlist instead of the pre-selected genre buttons
    //the Genre will be assigned the 'miscellaneous' value for the playlist database

    try {
      console.log(genre, artistName);
      await axios.get("http://localhost:5000/getData", {
        id: "Riya",
        artistName: artistName,
        songName: songName,
        genre: genre,
      });
    } catch (error) {
      console.log(error);
    }

    console.log("hit");
  }

  return (
    <>
      <div>
        <div>
          <h1> Search</h1>
          <br />
          Start creating your playlist by selecting a genre
        </div>

        <div>
          <section className="genre_section layout_padding">
            <div className="container">
              <div className="genre_container">
                <div className="genre_box">
                  <div
                    onClick={() => search("pop", true)}
                    className="genre_img-box"
                  ></div>
                  <h4>POP</h4>
                </div>
                <div className="genre_box">
                  <div
                    onClick={() => search("rock", true)}
                    className="genre_img-box"
                  ></div>
                  <h4>ROCK</h4>
                </div>
                <div className="genre_box">
                  <div
                    onClick={() => search("disco", true)}
                    className="genre_img-box"
                  ></div>
                  <h4>DISCO</h4>
                </div>
                <div className="genre_box">
                  <div
                    onClick={() => search("jazz", true)}
                    className="genre_img-box"
                  ></div>
                  <h4>JAZZ</h4>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <label>Search by Artist:</label>
          <br />
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="search"
          />
          <button onClick={() => search(searchInput, false)}>Search</button>
        </div>
        <div>
          {searchArtist.map((item) => {
            return (
              <>
                <div>
                  <Button
                    onClick={(e) => handleSubmit(item.name, item.artist.name)}
                    className="btn btn-danger"
                    id="btn-danger"
                  >
                    Add to Playlist
                  </Button>
                  <h2>Song Title: {item.name}</h2>
                  <h3>Artist: {item.artist.name}</h3>
                </div>
              </>
            );
          })}
        </div>
        {/* <div>
          <button onClick={() => search("pop", true)}>pop</button>
          <button onClick={() => search("rock", true)}>rock</button>
          <button onClick={() => search("disco", true)}>disco</button>
        </div> */}

        <div>
          {searchGenre.map((item, index) => {
            return (
              <>
                <div key={index}>
                  {/* stylized button with an onClick method that will have another function that add the song to the playlist */}
                  <Button
                    onClick={(e) => handleSubmit(item.name, item.artist.name)}
                    className="btn btn-danger"
                    id="btn-danger"
                  >
                    Add to Playlist
                  </Button>
                  <h2>Song Title: {item.name}</h2>
                  <h3>Artist: {item.artist.name}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
