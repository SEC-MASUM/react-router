import React from "react";

const Friend = ({ friend }) => {
  const { name, username } = friend;
  return (
    <div>
      <h2>Name: {name}</h2>
      <button>{username}</button>
    </div>
  );
};

export default Friend;
