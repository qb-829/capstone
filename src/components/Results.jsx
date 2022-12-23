//this page will call the API and display the search results
//when a selection is made via a checkbox, 
//that selection will be stored in the database to be displayed
// on the Display page

import React from 'react'
import axios from 'axios';

export default async function Results() {
//api call
const api = `https://api.spotify.com/v1/search?type=genre&include_external=audio`
//button functionality


    try {
        const data = await axios.get( api )

        console.log(data);

        return data

    } catch (error) {
    console.log(error)
    }

  return (
    <div>Results</div>
    // buttons for api call
    //display results
    //check boxes for putting selections into database
  )
}

