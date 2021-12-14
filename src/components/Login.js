import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import authService from "../Services/auth-service";

export const Login = () => {

    const [userName, setUserName] = useState("")
    const [Password, setPassword] = useState("")

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.login(userName,Password)
        .then((res)=>{
            console.log(res)
            navigate("/")})
        .catch((err) => alert("Invalid Credentials"))
    }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            name = "userName"
            onChange = {(e)=>setUserName(e.target.value)}
            value = {userName}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="Password"
            value={Password}
            className="form-control"
            onChange = {(e)=>setPassword(e.target.value)}
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
