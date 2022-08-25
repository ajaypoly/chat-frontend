import React, { useEffect, useState } from "react";
import ContactContainer from "./styles";
import logo from "../../assets/chatbot-icon.svg";

function Contacts({ contacts, currentUser }) {
  const [currentuserName, setCurrentuserName] = useState(undefined);
  const [currentuserImage, setCurrentuserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);

  useEffect(() => {
    if (currentUser) {
      setCurrentuserImage(currentUser.avatarImage);
      setCurrentuserName(currentUser.username);
    }
  }, []);
  const changeCurrentChat = (index, contact) => {};
  return <>{currentuserImage && currentuserName &&(<ContactContainer>
<div className="containers">
<img  className="robo" src={logo} />
<h1>Come On</h1>
</div>
<div className="contacts">
{
  contacts.map((contact,index)=>{
    return(
  <div  className={`contact ${index === currentSelected?"selected":""}`} key={index}>
    <div className="avatar" >
      <img
      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
      alt="avatar"
      />
    </div>
    <div className="username">
      <h3>{contact.username}</h3>
    </div>
  </div>
    )   
  })
}
</div>
<div className="current-user">
<div className="avatar" >
      <img
      src={`data:image/svg+xml;base64,${currentuserImage}`}
      alt="avatar"
      />
    </div>
    <div className="username">
      <h2>{currentuserName}</h2>
    </div>
</div>

  </ContactContainer>)}</>;
}

export default Contacts;
