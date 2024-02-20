import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddUser.css";
export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password:"",
  });

  const { name, username, email ,password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
function myFunc(){
  alert("Sucessfully Registered")
}
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required="ture"
              />
               
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username}
                errorMessage= "it should be 3-20 characters and shouldn't include any special character!"
                pattern="^[a-zA-Z][A-Za-z0-9-_]{3,20}$"
                onChange={(e) => onInputChange(e)}
                required="ture"
                
              />
               <span>it should be 3-20 characters and shouldn't include any special character!</span>
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                errorMessage= "Enter a valid email address!"
                value={email}
                
                onChange={(e) => onInputChange(e)}
                required="ture"
              />
              <span>Enter a valid email address!</span>
             
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type={"password"}
                className="form-control"
                placeholder="Enter your Password"
                name="password"
                pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,24}$"
                errorMessage=
                "Password should be 8-24 characters and include at least 1 letter, 1 number and 1 special character!"
                value={password}
                onChange={(e) => onInputChange(e)}
                
              />
              <span>Password should be 8-24 characters and include at least 1 letter, 1 number and 1 special character!</span>
             
            </div>
            <button type="myFunc()" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
