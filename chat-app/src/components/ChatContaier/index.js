import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { getMessageRoute, sendMessageRoute } from "../../utils/APIRoutes";
import ChatInput from "../ChatInput";
import FormContainer from "./style";
import { v4 as uuidv4 } from "uuid";
function ChatContainer({ currentchat, currentUser, socket }) {
  const [messages, setmessages] = useState([]);
  const [arivalmessage, setarivalmessage] = useState(null);
  const scrollRef = useRef();
  useEffect(() => {
    (async () => {
      if (currentchat) {
        const response = await axios.post(getMessageRoute, {
          from: currentUser._id,
          to: currentchat._id,
        });
        setmessages(response.data);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentchat]);

  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentchat._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      to: currentchat._id,
      from: currentUser._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setmessages(msgs);
  };
  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recived", (msg) => {
        console.log(msg);
        setarivalmessage({ fromSelf: false, message: msg });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    arivalmessage && setmessages((prev) => [...prev, arivalmessage]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arivalmessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);
  return (
    <>
      {currentchat && (
        <FormContainer className="pt-4 h overflow-hidden gap-1 ">
          <div className="header flex justify-between items-center pt-14 pb-0 px-8 ">
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
            </div>
          </div>
          <div className="chat-messages scrollbar pb-6 pt-20 px-8 flex flex-col overflow-auto gap-4 ">
            {messages.map((message) => {
              return (
                <div ref={scrollRef} key={uuidv4()}>
                  <div
                    className={`message flex items-center ${
                      message.fromSelf
                        ? "sended justify-end "
                        : "recived justify-start"
                    }`}
                  >
                    <div
                      className="content max-w-40 break-words p-2 text-lg border border-none  rounded-xl"
                      style={{
                        backgroundColor: message.fromSelf
                          ? "rgb(255 255 255 / 13%)"
                          : "rgb(235 229 229 / 48%) ",
                      }}
                    >
                      <p>{message.message}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <ChatInput handleSendMsg={handleSendMsg} />
        </FormContainer>
      )}
    </>
  );
}

export default ChatContainer;
