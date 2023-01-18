import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function MyPlaylist() {
  //cool code that calls to the database
  //displays the playlists stored in the database, we're storing their saved choices
  //mock data can be used to display
  //will need state to hold username - coming from user input, when someone hits login put - save input to state or global variable
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPlaylist();
  }, []);

  const getPlaylist = async (itemArtistName, itemName) => {
    try {
      await axios("http://localhost:5000/myplaylist", {
        artistName: itemArtistName,
        songName: itemName,
      }).then(
        (res) => {
          setData(res.data.records);
          setLoading(false);
          console.log(res.data.records);
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
        <h1>Welcome</h1>
        {/* user information will be pulled from user table once signed in */}
        <h2>Here is your playlist:</h2>
        {/* for each genre that has a playlist it creates a div */}
        <div>
          {data.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <h2>Song Title: {item.songName}</h2>
                  <h3>Artist: {item.artistName}</h3>
                  <h3>Genre: {item.genre}</h3>
                </div>
              </>
            );
          })}
        </div>

        <button onClick={() => navigate("/create")} className="btn btn-primary">
          Create Playlist
        </button>
        {/* this button opens to 'Create Playlist/Results' page that has a button for each genre; each genre is an API call */}
      </div>
    </>
  );
}
