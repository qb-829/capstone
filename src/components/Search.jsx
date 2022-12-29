import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import axios from 'axios';


export default function Search(){
    const [searchInput, setSearchInput] = useState(null)
    const [searchArtist, setArtistResults] = useState([])
    const [searchGenre, setGenreResults] = useState([])
    const [playlist, setPlaylist] = useState('')

    // const resultsList = useSelector()
    
    const search = async (searchValue, isGenre) => {
        if (isGenre === false ) {
            
            const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchValue}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`;        
    
            try {
                const res = await fetch(url);
                const data = await res.json();
        
                console.log(data.results)
    
                setArtistResults(data.results.artistmatches.artist)
                setGenreResults([])
    
            } catch (error) {
                console.log(error)
            }  
        }
        else {
            const api = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${searchValue}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`;

            try {
                const res = await fetch(api);
                const data = await res.json();
        
                console.log(data.tracks.track)
    
                setGenreResults(data.tracks.track)
                setArtistResults([])
    
            } catch (error) {
                console.log(error)
            }  
        }
        
        // function handlesubmit that call the endpoint that will take the information i want to send it and add it to the playlist db, see line 80 and 81
       
    }
    async function handleSubmit (e) {
        e.preventDefault();
        console.log('make playlist');
        console.log("Time: ", Date.now(), "music")

            try {
                await axios.get('http://localhost:3000/myplaylist', {
                    "id": "Riya",
                    "artistName": "Jeezy",
                    "songName": "Then What",
                    "genre": ""
                })
            } catch (error) {
                console.log(error);
            }
        // app.get('/Display', async (req, res) => {
        //     const playlist = await Playlist.findAll();
        //     res.json(playlist);
        //   });
        console.log('hit')
}
    
    return <>
    <div>
    <div>Search</div>
    <label>Search Artist:</label>
    <input onChange={(e) => setSearchInput(e.target.value)}
    type='search' />
    <button onClick={() => search(searchInput, false)}>SearchInput</button>

    <div>
        {searchArtist.map(item => {
            return <>
            <div>{item.name}</div>
            
            </>
        })}
    </div>
    <div>
        <button onClick={() => search('pop', true)}>pop</button>
        <button onClick={() => search('rock', true)}>rock</button>
        <button onClick={() => search('disco', true)}>disco</button>
    </div>
    <div>
        {searchGenre.map(item => {
            return <>
            <div>
                <button>add to playlist-- see line 81 and 82</button>
            <Button onClick={handleSubmit} className='btn btn-danger' id='btn-danger' >Add to Playlist</Button>
                <p>Song Title: {item.name}</p> 
            <br />
                <p>Artist: {item.artist.name}</p>  
                {/* stylized button with an onClick method that will have another function that add the song to the playlist */}
                {/* so it won't be the input on line 82, change it to a button that will do the function, see line 49 */}
                <input type="checkbox" name="playlist" id="playlist" onChange={(e) => setPlaylist(e.target.checked)}/>

            </div>
            </>
        })}
    </div>
    <div>
    </div>
    <div>
    </div>
    <br />
    <br />
    </div>
    <div>i love: </div>
  </>
}