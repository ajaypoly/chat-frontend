import React from "react";
import FormContainer from "./style";
import logo from "../../assets/chatbot-icon.svg";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {useNavigate}from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { registerRoute } from "../../utils/APIRoutes";
function Register() {
const navigate= useNavigate()

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [Value, setValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputType, setInputType] = useState("password");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("in validation", registerRoute);
      const { password, username, email } = Value;
      
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if(data.status===false){
        toast.error(data.msg,toastOptions)
      }
      if(data.status===true){
        localStorage.setItem('chat-app-user',JSON.stringify(data.user))
        navigate("/")

      }
    }
    
  };
  const handleValidation = () => {
    const { password, confirmPassword, email } = Value;
    if (password === !confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (password.length < 4) {
      toast.error(
        "Password should be equal or greater than 4 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValue({ ...Value, [event.target.name]: event.target.value });
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brands">
            <img className="robo" src={logo} alt="come on" />
            <h1>Come On</h1>
            <input
              className="inputField"
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
            />
            <input
              className="inputField"
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <div className="passwordDiv">
              <input
                className="passwordField"
                type={inputType}
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              {inputType === "password" ? (
                <button
                  class="showHideBtn"
                  type="button"
                  onClick={() => setInputType("text")}
                >
                  <i class="fa-solid fa-eye-slash"></i>
                </button>
              ) : (
                <button
                  className="showHideBtn"
                  type="button"
                  onClick={() => setInputType("password")}
                >
                  <i class="fa-solid fa-eye"></i>
                </button>
              )}
            </div>
            <input
              className="inputField"
              type="password"
              placeholder="Confirm Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <button className="glow-on-hover" type="submit">
              Create User
            </button>
            <span>
              Already have an account?<a href="/login">Login</a>
            </span>
          </div>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default Register;
