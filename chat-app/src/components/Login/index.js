import React from "react";
import FormContainer from "./style";
import logo from "../../assets/chatbot-icon.svg";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { loginRoute } from "../../utils/APIRoutes";
function Login() {
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [Value, setValue] = useState({
    username: "",
    password: "",
  });
  const [inputType, setInputType] = useState("password");
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      console.log("in validation", loginRoute);
      const { password, username } = Value;

      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };
  const handleValidation = () => {
    const { password, username } = Value;
    if (password === "") {
      toast.error("Email and password is required", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("Email and password is required", toastOptions);
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
            
            <button className="glow-on-hover" type="submit">
              User Login
            </button>
            <span>
              Don't have an account?<a href="/register">Register</a>
            </span>
          </div>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default Login;
