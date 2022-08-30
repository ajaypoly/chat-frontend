import axios from "axios";
import React from "react";
import { sendMessageRoute } from "../../utils/APIRoutes";
import ChatInput from "../ChatInput";
import LogOut from "../LogOut/Index";
import Message from "../Message/Index";


function ChatContainer({ currentchat,currentUser }) {
  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute,{
      from:currentUser._id,
      to:currentchat._id,
      message:msg,
    })

  };
  return (
    <>
      {currentchat && (
        <div className="pt-4">
          <div className="header flex justify-between items-center py-0 px-8 ">
            <div className="user-details flex justify-between w-full items-center gap-4">
              <div className="avatar ">
                <img
                  className="h-16 hover:scale-150 transition-all duration-1000 "
                  src={`data:image/svg+xml;base64,${currentchat.avatarImage}`}
                  alt="avatar"
                />
              <div className="username text-2xl text-white">
                <h3>{currentchat.username}</h3>
              </div>
              </div>
              <LogOut />
            </div>
          </div>
          <Message />
          <ChatInput handleSendMsg={handleSendMsg} />
        </div>
      )}
    </>
  );
}

export default ChatContainer;
