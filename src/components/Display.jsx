import axios from 'axios'
import React, { useState } from 'react'
import{ Link }from 'react-router-dom'


export default function Display() {
    //cool code that calls to the database
    //displays the playlists stored in the database, we're storing their saved choices
    //mock data can be used to display
    //will need state to hold username - coming from user input, when someone hits login put - save input to state or global variable

  const [artistName, setArtistName] = useState('')
  const [songName, setSongName] = useState('')
  const [genre, setGenre] = useState('')

  async function postPlaylist(e){
    e.preventDefault()

      try {
        await axios.post('http://localhost:3001/myplaylist',{
          artistName
        })
        
      } catch (error) {
        console.log(error)
      }


  }

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
       <form onSubmit={postPlaylist}>
        <input type="text" value={artistName} onChange={(e) => setArtistName(e.target.value)} />
       <button type='submit'>Send Artist Name</button>
       </form>
        <Link to='/search' > 
                <button class="btn btn-primary" href='./components/Search.jsx'>
                    Create Playlist
                </button>
        </Link>
        {/* this button opens to 'Create Playlist/Results' page that has a button for each genre; each genre is an API call */}
        {/* make the modal and make the call */}
    </div>
  </>
  
}
