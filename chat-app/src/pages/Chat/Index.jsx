import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contacts from "../../components/Contact";
import { alluserRoute } from "../../utils/APIRoutes";


function Chat() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentchat, setCurrentChat] = useState();

  useEffect(() => {
    (async () => {
      if (!localStorage.getItem("chat-app-user")) {
        navigate("/login");
      } else {
        setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")));
      }
    })();
  }, []);
  useEffect(() => {
    (async()=>{
      if (currentUser) {
        if(currentUser.isAvatarImageSet){
          const  data = await axios.get(`${alluserRoute}/${currentUser._id}`)
          setContacts(data.data)
        }else{navigate("/avatar ")}
      }
    })()
  }, [currentUser]);
  const handleChatChange=(chat)=>{
    setCurrentChat(chat)
  }
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-black to-slate-600">
        <div className="h-75 w-75">
          <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange}/>
        </div>
      </div>
    </>
  );
}

export default Chat;
