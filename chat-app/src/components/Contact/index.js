import React, { useEffect, useState } from "react";
import logo from "../../assets/chatbot-icon.svg";
import LogOut from "../LogOut/Index";
function Contacts({ contacts, currentUser, changeChat }) {
  const [currentuserName, setCurrentuserName] = useState(undefined);
  const [currentuserImage, setCurrentuserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentuserImage(currentUser.avatarImage);
      setCurrentuserName(currentUser.username);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      {currentuserImage && currentuserName && (
        <div className="w-72 flex flex-col h-full overflow-hidden border rounded-lg border-none bg-gradient-to-r from-slate-600 to-black">
          <div className="flex h-1/6 justify-center items-center gap-8  ">
            <img className="h-28" src={logo} alt="logo" />
            <h1 className="text-black py-5 text-lg hover:text-[#b0b0b04d] hover:scale-150 transition-all duration-1000">
              Come On
            </h1>
          </div>
          <div className="flex h-4/6 flex-col items-center overflow-auto gap-3 scrollbar">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`bg-[#ffffff34] cursor-pointer w-11/12 border rounded p-2 gap-4 flex items-center ease-in-out duration-700  ${
                    index === currentSelected
                      ? "bg-gradient-to-r from-[#09203F] to-red-300 "
                      : ""
                  }`}
                  key={index}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      className="h-12"
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt="avatar"
                    />
                  </div>
                  <div>
                    <h3 className="text-yellow-50">{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-1/6 bg-transparent flex justify-center items-center gap-8">
            <div>
              <img
                className="h-16 hover:scale-150 transition-all duration-1000 "
                src={`data:image/svg+xml;base64,${currentuserImage}`}
                alt="avatar"
              />
            </div>
            <div>
              <h2 className="text-lg text-yellow-50 hover:text-[#b0b0b04d] hover:scale-150 transition-all duration-1000">
                {currentuserName}
              </h2>
            </div>
          </div>
          <LogOut />
        </div>
      )}
    </>
  );
}

export default Contacts;
