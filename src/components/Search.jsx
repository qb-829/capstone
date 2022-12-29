import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';


export default function Search(){
    const [searchInput, setSearchInput] = useState(null)
    const [searchArtist, setArtistResults] = useState([])
    const [searchGenre, setGenreResults] = useState([])
    // const resultsList = useSelector()
    
    const search = async (searchValue, isGenre) => {
        if (isGenre === false ) {
            
            const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchValue}&api_key=${process.env.REACT_APP_LASTFM_API_KEY}&format=json`;
        
         
    
            try {
                const res = await fetch(url);
                const data = await res.json();
        
                console.log(data.results)
    
                setArtistResults(data.results.artistmatches.artist)
    
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
    
            } catch (error) {
                console.log(error)
            }  
        }
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
    <button onClick={() => search('pop', true)}>pop</button>
    <button onClick={() => search('rock', true)}>rock</button>
    <button onClick={() => search('disco', true)}>disco</button>
    <br />
    <br />
    <br />
    <Button onClick={() => search('anthony hamilton', true)} className='btn btn-danger' id='btn-danger' >Search</Button>
    </div>
    <div>i love: </div>
  </>
}