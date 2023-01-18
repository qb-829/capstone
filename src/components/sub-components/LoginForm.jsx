



import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Register from '../Register';
import axios from 'axios';
import '../assets/images/homepage.jpeg'


export default function LoginForm() {

    // declare state vars
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();


    // allows rendering and refreshing of the component
    useEffect(() => {
        console.log('useEffect Ran')
        if(isSubmitted) {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            // call other functions
            // getRecords();
        }

        // make API calls
        // call other functions
        // getRecords();

    } ) //state var array
    
    
    //grab the username and password from the input fields

    // const handleClick = (e) => {
    //     window.location.reload();
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username)

        const url = "http://localhost:5000/login";
    
        setIsSubmitted(true);
        
        try {
            await axios
            .post(url, {
                username: username,
                password: password,
            })
            .then( (user) => {
                console.log(user.data[0]);
                navigate('/myplaylist', {state: { userInfo: user }})
            });
        } catch (error) {
            console.log(error);
        }

    };

    return <>
            <div className="App">


            {/* create a form with username and password fields */}
            <form id='form' className='form-group container' onSubmit={handleSubmit} >
                <div className='d-flex flex-column'>
                    <h2 className='home-title'>Login or Sign up below</h2>
                    <div>
                        <input
                            className='form-control'
                            type="username"
                            name='username'
                            id='username'
                            value={username}
                            onChange={ function (e) { setUsername(e.target.value) }}
                            placeholder='Username'
                            required
                        />
                    </div>
                    <div>
                        <input
                            className='form-control'
                            type="text"
                            name='password'
                            id='password'
                            value={password}
                            onChange={ function (e) { setPassword(e.target.value) }}
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                 <Button variant="contained" type='submit' className='btn btn-primary' id='btn-submit' onClick={handleSubmit}>
                    LOGIN 
                    </Button>

                </div>
            
                    <br /><h5 className='home-sub-title'>No Account? No problem! Sign up below!</h5>


                    <br />

                    <Button  variant="contained" className='btn btn-danger' id='btn-danger' href='/Register'>

                    SIGN UP

                    </Button>

                 
            </form>
           
        </div>
       
  </>
}