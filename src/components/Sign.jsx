import React from 'react'
import Button from '@mui/material/Button';

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
                     placeholder='enter a password'
                     required >
                     
                     </input>
                 </div>
           </div>
    </form>
  
      <Button variant="contained">Submit</Button>
   
 </>
    
}
 export default Sign;

