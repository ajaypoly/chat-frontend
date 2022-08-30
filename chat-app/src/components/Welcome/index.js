import React from "react";

function Welcome({ currentUser }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-[rgb(168,149,149)] text-2xl">
        Welcome,<span className="text-[#00fff2]">{currentUser.username}</span>
      </h1>
      <h3 className="text-[rgb(168,149,149)] text-2xl">
        Select a User to start
      </h3>
    </div>
  );
}

export default Welcome;
