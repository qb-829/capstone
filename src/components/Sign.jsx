<<<<<<< HEAD
// import React, { useState, useEffect} from 'react'
// import axios from 'axios';
=======
import React, { useState, useEffect} from 'react'
import axios from 'axios';
>>>>>>> main
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
// import Background from './assets/images/background.png'; 

function Sign () {

  const navigate = useNavigate();

  async function handleSubmit (e) {
    e.preventDefault();
    //user info has to be stored in the user database and authenticated 
    //which means hitting the backend server with an axios call
    //user has to be navigated to the '/myplaylist' page where they can view their current playlists a/o create a new one by hitting the button to '/create' 

    console.log('sign in');
    console.log("Time: ", Date.now())

        try {
            await axios.get('http://localhost:3000/myplaylist', {

            })
        } catch (error) {
            console.log(error);
        }

    navigate('/')

      }

    return <>
    
       <h1> Sign Up </h1>

        <form id='form' className='form-group container'>
            <div className='d-flex flex-column'>
               <h2> Email Address </h2> 
                 <div>
                    <input
                     className='form-control'
                     type="text"
                     name='email'
                     id='name'
                     placeholder='Enter your email address'
                     required>
                     </input>
                 </div>
           </div>
           <div className='d-flex flex-column'>
               <h2> Username </h2> 
                 <div>
                    <input
                     className='form-control'
                     type="text"
                     name='username'
                     id='username'
                     placeholder='Enter your username'
                     title="letters and numbers (no special characters, 4 character min, 12 character max)"
                     pattern="[A-Za-z0-9]{4,12}"
                     required>
                     </input>
                 </div>
           </div>
           <div className='d-flex flex-column'>
               <h2> Password </h2> 
                 <div>
                    <input
                     className='form-control'
                     type="text"
                     name='password'
                     id='password'
                     placeholder='Enter a password'
                     title="letters and numbers (no special characters, 4 character min, 12 character max)"
                     pattern="[A-Za-z0-9]{4,12}"
                     
                     required >
                     
                     </input>
                 </div>
                 
           </div>
    </form>
  
<<<<<<< HEAD
    <Button component={Link} to="/Display" variant="contained" type='submit' className='btn btn-primary' id='btn-submit'> Submit</Button>
   
=======
      <Button onClick={handleSubmit} variant="contained" type='submit' className='btn btn-primary' id='btn-submit'> Submit</Button>
>>>>>>> main
 </>
    
   
}
 export default Sign;

