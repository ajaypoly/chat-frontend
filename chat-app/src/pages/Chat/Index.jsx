import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatContainer from "../../components/ChatContaier";
import Contacts from "../../components/Contact";
import Welcome from "../../components/Welcome";
import { alluserRoute } from "../../utils/APIRoutes";

function Chat() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentchat, setCurrentChat] = useState();
  const [isloader, setisLoader] = useState(false);

  useEffect(() => {
    (async () => {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
        setisLoader(true);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (currentUser) {
        if (currentUser.isAvatarImageSet) {
          const data = await axios.get(`${alluserRoute}/${currentUser._id}`);
          setContacts(data.data);
        } else {
          navigate("/avatar ");
        }
      }
    })();
  }, [currentUser]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center gap-4 items-center bg-gradient-to-r from-black to-slate-600">
        <div className=" bg-[#00000076] flex border rounded-xl border-none h-5/6 min-w-[35%] ">
          <Contacts
            contacts={contacts}
            currentUser={currentUser}
            changeChat={handleChatChange}
          />
          {isloader && currentchat === undefined ? (
            <Welcome currentUser={currentUser} />
          ) : (
            <ChatContainer currentchat={currentchat} currentUser={currentUser} />
          )}
        </div>
      </div>
    </>
  );
}

export default Chat;
