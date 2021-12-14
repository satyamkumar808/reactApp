import React, {useState} from "react";
import authService from "../Services/auth-service";
import {useNavigate} from "react-router-dom";

export const Register = () => {

    let navigate= useNavigate();

    const[userName, setUserName] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")

    const handleSubmit =(e) =>{
        e.preventDefault();
        authService.register(userName,Email,Password)
        .then(navigate("/login"))
        .catch((err)=> console.log(err))
    }

  return(
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="Email"
            name="Email"
            value={Email}
            onChange={(e)=> setEmail(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            value={userName}
            id="userName"
            onChange={(e)=> setUserName(e.target.value)}
            name="uerName"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="Password"
            className="form-control"
            onChange={(e)=> setPassword(e.target.value)}
            value = {Password}
            id="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
