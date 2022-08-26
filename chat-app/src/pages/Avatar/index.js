import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AvatarStyle from "./style";
import { Buffer } from "buffer";
import { SkeletonLoader } from "../../components/Skeleton/Index";
import { avatarRoute } from "../../utils/APIRoutes";

function Avatar() {
  const api = "https://api.multiavatar.com/45678945";
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setselectedAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    }
  }, []);

  const setProfilepic = async () => {
    if (selectedAvatar === undefined) {
      toast.error("please select the avatar", toastOptions);
    } else {
      console.log(avatars[selectedAvatar]);
      const user = await JSON.parse(localStorage.getItem("chat-app-user"));
      const { data } = await axios.post(`${avatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });
      console.log(data);
      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem("chat-app-user", JSON.stringify(user));
        navigate("/");
      } else {
        toast.error("Please try again", toastOptions);
      }
    }
  };
  const loadProfilePic = () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
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
      {isLoading ? (
        <AvatarStyle className="flex justify-center items-center flex-col gap-12  bg-gradient-to-r from-slate-600 to-black w-screen h-screen">
          <SkeletonLoader />
        </AvatarStyle>
      ) : (
        <AvatarStyle className="flex justify-center items-center flex-col gap-12  bg-gradient-to-r from-slate-600 to-black w-screen h-screen">
          <div className="decoration-zinc-900 text-2xl ">
            <h1>Select Your Profile Pic</h1>
          </div>

          <div className="gap-8 border-transparent rounded-3xl p-2 flex justify-center items-center ">
            {avatars.map((avatar, index) => {
              return (
                <div
                  key={index}
                  className={`avatar ease-in-out duration-500 hover:scale-125 rounded-full border-4 border-transparent ${
                    selectedAvatar === index
                      ? " border-[rgb(21,255,0)]  "
                      : ""
                  }`}
                >
                  <img
                    className="h-28"
                    src={`data:image/svg+xml;base64,${avatar}`}
                    alt="avatar"
                    key={avatar}
                    onClick={() => setselectedAvatar(index)}
                  />
                </div>
              );
            })}
          </div>
          <div className="w-80 flex justify-between">
            <button className="glow-on-hover" onClick={setProfilepic}>
              Set as Profile pic
            </button>
            <button className="glow-on-hover " onClick={loadProfilePic}>
              Reload Pic
            </button>
          </div>
        </AvatarStyle>
      )}
      <ToastContainer />
    </>
  );
}

export default Avatar;
