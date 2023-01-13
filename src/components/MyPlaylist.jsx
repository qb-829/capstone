import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MyPlaylist() {
  //cool code that calls to the database
  //displays the playlists stored in the database, we're storing their saved choices
  //mock data can be used to display
  //will need state to hold username - coming from user input, when someone hits login put - save input to state or global variable
  const navigate = useNavigate();
  const [artistName, setArtistName] = useState("");
  const [songName, setSongName] = useState("");
  const [genre, setGenre] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    getPlaylist();
  }, []);

  const getPlaylist = async () => {
    try {
      await axios("http://localhost:5000/myplaylist").then(
        (res) => {
          setData(res.data);
          setLoading(false);
          console.log(res.data);
        },
        (error) => {
          console.log("Error fetching data: ", error);
          setError(error);
        }
      );
    } catch (error) {
      console.log(error);
    }
    if (loading) return "Loading";
    if (error) return "Error";
  };

  return (
    <>
      <div>
        <h1>Welcome User</h1>
        {/* user information will be pulled from user table once signed in */}
        <h2>Here are your playlists:</h2>
        {/* for each genre that has a playlist it creates a div */}
        <div>{data}</div>
        <div>
          <h3>Playlist One: </h3>
          {/* pulls from playlist database */}
          <ul>track one</ul>
        </div>
        <button onClick={() => navigate("/create")} className="btn btn-primary">
          Create Playlist
        </button>
        {/* this button opens to 'Create Playlist/Results' page that has a button for each genre; each genre is an API call */}
      </div>
    </>
  );
}
