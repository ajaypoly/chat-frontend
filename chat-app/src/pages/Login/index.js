import React from "react";
import FormContainer from "./style";
import logo from "../../assets/chatbot-icon.svg";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
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
  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/chat");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isPasswordHidden, setPasswordHidden] = useState(true);
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
      <FormContainer className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-slate-600 to-black ">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="border border-[#ffffff4d]  rounded-3xl flex flex-col items-center gap-3 p-9 bg-white/20">
            <img className="h-20 " src={logo} alt="come on" />
            <h1 className="text-black py-5 hover:text-[#b0b0b04d] hover:scale-150 transition-all duration-1000">
              Come On
            </h1>
            <input
              className="border border-black rounded-md p-2 pl-3 bg-transparent w-full placeholder:text-gray-800 outline-none"
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
            />

            <div className="relative w-full">
              <input
                className="border border-black rounded-md p-2 pl-3 bg-transparent w-full placeholder:text-gray-800 outline-none"
                type={isPasswordHidden ? "password" : "text"}
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
              />

              <button
                className="showHideBtn absolute right-2 top-2"
                type="button"
                onClick={() => setPasswordHidden(!isPasswordHidden)}
              >
                <i
                  class={`fa-solid fa-eye${isPasswordHidden ? "-slash" : ""}`}
                ></i>
              </button>
            </div>

            <button className="glow-on-hover mt-5" type="submit">
              User Login
            </button>
            <span>
              Don't have an account?
              <a className="text-violet-200 ml-2" href="/register">Register</a>
            </span>
          </div>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

export default Login;
