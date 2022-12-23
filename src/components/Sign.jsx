import React, { useState, useEffect} from 'react'
// import axios from 'axios';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import Background from './assets/images/background.png'; 

function Sign () {
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
  
      <Button component={Link} to="/Display" variant="contained" type='submit' className='btn btn-primary' id='btn-submit'> Submit</Button>
   
 </>
    
   
}
 export default Sign;

