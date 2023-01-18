import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import "./assets/styles/baselayout.css";
import { Row, Col, Card } from "react-bootstrap";

export default function Search() {
  const [searchInput, setSearchInput] = useState(null);
  const [searchArtist, setArtistResults] = useState([]);
  const [searchGenre, setGenreResults] = useState([]);
  const [genre, setGenre] = useState("");
  const [playlist, setPlaylist] = useState({
    artistName: "",
    songName: "",
    genre: "",
  });

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

  async function handleSubmit(itemArtistName, itemName) {
    // e.preventDefault();
    console.log(itemName);
    console.log(itemArtistName);
    // function handlesubmit calls the endpoint that will take the information and send it to the playlist database
    console.log("Time: ", Date.now(), "music");

    //if the USER uses the search input field to find tracks to add to the playlist instead of the pre-selected genre buttons
    //the Genre will be assigned the 'miscellaneous' value for the playlist database

    try {
      await axios
        .post("http://localhost:5000/create", {
          artistName: itemArtistName,
          songName: itemName,
          genre: genre,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div>
        <div className="text-center">
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
        <div className="text-center">
          <label>Search by Artist:</label>
          <br />
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            type="search"
          />
          <button onClick={() => search(searchInput, false)}>Search</button>
        </div>

        <div>
          {/* ARTIST SEARCH BY INPUT MAPPING AND RETURN*/}
          <Row lg={3}>
            {searchArtist &&
              searchArtist.map((item) => {
                return (
                  <Col
                    className="d-flex text-center"
                    style={{ marginTop: "10px" }}
                  >
                    <Card className="flex-fill">
                      <Card.Img
                        variant="top"
                        src={require("./assets/images/MusicNote.png")}
                      />
                      <Card.Body>
                        <Card.Title>{item.artist.name}</Card.Title>
                        <Card.Text>{item.name}</Card.Text>
                        <Button
                          onClick={(e) =>
                            handleSubmit(item.artist.name, item.name)
                          }
                          className="btn btn-danger"
                          id="btn-danger"
                        >
                          Add to Playlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>

        <div>
          {/* GENRE SEARCH BY INPUT MAPPING AND RETURN*/}
          <Row lg={3}>
            {searchGenre &&
              searchGenre.map((item, index) => {
                return (
                  <Col
                    className="d-flex text-center"
                    style={{ marginTop: "10px" }}
                  >
                    <Card className="flex-fill">
                      <Card.Img
                        variant="top"
                        src={require("./assets/images/MusicNote.png")}
                      />
                      <Card.Body>
                        <Card.Title>{item.artist.name}</Card.Title>
                        <Card.Text>{item.name}</Card.Text>
                        <Button
                          onClick={(e) =>
                            handleSubmit(item.artist.name, item.name)
                          }
                          className="btn btn-danger"
                          id="btn-danger"
                        >
                          Add to Playlist
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    </>
  );
}
