import { EmojiEmotions, Send } from "@mui/icons-material";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";
import FormContainer from "./style";

function ChatInput({ handleSendMsg }) {
  const [showEmoji, setshowEmoji] = useState(false);
  const [msg, setmsg] = useState("");

  const handleEmojiHideShow = () => {
    setshowEmoji(!showEmoji);
  };
  const handleEmojiClick = (event, emoji) => {
    let message = msg;
    message += emoji.emoji;
    setmsg(message);
  };
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setmsg("");
    }
  };
  return (
    <FormContainer>
      <div className="flex py-0 px-8 pb-1">
        <div className="button flex items-center text-white gap-4 ">
          <div className="emoji relative ">
            <EmojiEmotions
              className="text-2xl text-[#f2f202] cursor-pointer"
              onClick={handleEmojiHideShow}
            />
            <div className="absolute top-[-350px]">
              {showEmoji && <EmojiPicker onEmojiClick={handleEmojiClick} />}
            </div>
          </div>
        </div>
        <form
          className="w-full flex items-center gap-8 border border-black rounded-xl  bg-transparent  placeholder:text-white outline-none h-9 "
          onSubmit={(e) => sendChat(e)}
        >
          <input
            className="w-4/5 h-1/2 pl-4 text-lg focus:outline-none border border-black rounded-xl   bg-transparent border-none  placeholder:text-gray-900 outline-none max-h-96 "
            type="text"
            value={msg}
            onChange={(e) => setmsg(e.target.value)}
            placeholder="type message"
          />
          <button className="glow-on-hover ">
            <Send />
          </button>
        </form>
      </div>
    </FormContainer>
  );
}

export default ChatInput;
