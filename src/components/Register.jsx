import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
// import Background from './assets/images/background.png';

function Register() {

  const url = "http://localhost:5000/register";
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  async function buttonClick(e) {
    e.preventDefault();
    console.log(user);
    try {
      await axios
        .post(url, {
          email: user.email,
          username: user.username,
          password: user.password,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmit(e) {
    const newUser = { ...user };
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
    console.log("hello", newUser);
    //user info has to be stored in the user database and authenticated
    //which means hitting the backend server with an axios call
    //user has to be navigated to the '/myplaylist' page where they can view their current playlists a/o create a new one by hitting the button to '/create'

  }

  return (
    <>
      <h1> Sign Up </h1>

      <form id="form" onSubmit={buttonClick} className="form-group container">
        <div className="d-flex flex-column">
          <h2> Email Address </h2>
          <div>
            <input
              onChange={(e) => handleSubmit(e)}
              value={user.email}
              className="form-control"
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email address"
              required
            ></input>
          </div>
        </div>
        <div className="d-flex flex-column">
          <h2> Username </h2>
          <div>
            <input
              onChange={(e) => handleSubmit(e)}
              value={user.username}
              className="form-control"
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              title="letters and numbers (no special characters, 4 character min, 12 character max)"
              pattern="[A-Za-z0-9]{4,12}"
              required
            ></input>
          </div>
        </div>
        <div className="d-flex flex-column">
          <h2> Password </h2>
          <div>
            <input
              onChange={(e) => handleSubmit(e)}
              value={user.password}
              className="form-control"
              type="text"
              name="password"
              id="password"
              placeholder="Enter a password"
              title="letters and numbers (no special characters, 4 character min, 12 character max)"
              pattern="[A-Za-z0-9]{4,12}"
              required
            ></input>
          </div>
        </div>
        <Button
          onClick={buttonClick}
          variant="contained"
          className="btn btn-primary"
          type="submit"
          id="btn-submit"
        >
          {" "}
          Submit
        </Button>
      </form>
    </>
  );
}
export default Register;
