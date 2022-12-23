import React from 'react'

export default function Display() {
    //cool code that calls to the database
    //displays the playlists stored in the database, we're storing their saved choices
    //mock data can be used to display
    //will need state to hold username - coming from user input, when someone hits login put - save input to state or global variable

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
        {/* this button opens to 'Create Playlist/Results' page that has a button for each genre; each genre is an API call */}
        {/* make the modal and make the call */}
    </div>
  </>
  
}
