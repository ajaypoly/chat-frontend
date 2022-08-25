import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contacts from "../../components/Contact";
import { alluserRoute } from "../../utils/APIRoutes";
import ChatContainer from "./style";

function Chat() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState(undefined);

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
  }, []);
  return (
    <>
      <ChatContainer>
        <div className="chat-box">
          <Contacts contacts={contacts} currentUser={currentUser}/>
        </div>
      </ChatContainer>
    </>
  );
}

export default Chat;
