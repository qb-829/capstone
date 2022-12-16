import React from 'react'

export default function Display() {
    //cool code that calls to the database

  return <>
    <div>
        <h1>Welcome User</h1>
        {/* user information will be pulled from user table once signed in */}
        <h2>Here are your playlists:</h2>

        {/* for each genre that has a playlist it creates a div */}
        <div>
            <h3>Playlist One: </h3>
            <ul>track one</ul>
        </div>

       
        <button>Create Playlist</button>
        {/* this button opens to a modal that has a button for each genre; each genre is an API call */}
    </div>
  </>
  
}
