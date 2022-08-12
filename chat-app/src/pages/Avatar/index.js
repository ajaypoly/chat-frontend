import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AvatarStyle from "./style";
import { Buffer } from "buffer";

function Avatar() {
  const api = "https://api.multiavatar.com/45678945";
  const navigate = useNavigate;
  const [avatars, setAvatars] = useState([]);
  const [seletedAvatar, setselectedAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const setProfilepic = async () => {};
  const loadProfilePic = () => {
    const data = [];
    for (let i = 0; i < 4; i++) {
      const request = axios.get(
        `${api}/${Math.round(Math.random() * 1000)}?apikey=MsvGH8gm36Pdl7`
      );
      data.push(request);
    }
    Promise.all(data).then((res) => {
      setAvatars(
        res.map((obj) => {
          const buffer = new Buffer(obj.data);
          return buffer.toString("base64");
        })
      );
      setIsLoading(false);
    });
  };
  useEffect(() => {
    loadProfilePic();
  }, []);
  return (
    <>
      <AvatarStyle>
        <div className="title">
          <h1>Select Your Profile Pic</h1>
        </div>

        <div className="avatars">
          {avatars.map((avatar, index) => {
            return (
              <div
                key={index}
                className={`avatar ${
                  seletedAvatar === index ? "selected" : ""
                }`}
              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`}
                  alt="avatar"
                  key={avatar}
                  onClick={() => setselectedAvatar(index)}
                />
              </div>
            );
          })}
        </div>
        <div className="profile-button">
          <button className="glow-on-hover" onClick={setProfilepic}>
            Set as Profile pic
          </button>
          <button className="glow-on-hover" onClick={loadProfilePic}>
            Reload Pic
          </button>
        </div>
      </AvatarStyle>
      <ToastContainer />
    </>
  );
}

export default Avatar;
