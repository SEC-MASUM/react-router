import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, username, id } = friend;
  let navigate = useNavigate();

  const showFriendDetails = () => {
    const path = `/friend/${id}`;
    navigate(path);
  };

  return (
    <div className="bg-neutral-100 rounded shadow-md p-3">
      <h2 className="font-medium text-2xl">{name}</h2>
      <button
        onClick={showFriendDetails}
        className="bg-indigo-500 border-2 border-indigo-700 text-white rounded-md px-3 py-1 mt-3"
      >
        {username} id: {id}
      </button>
    </div>
  );
};

export default Friend;
