import axios from "axios";
import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((data) => setFriends(data.data));
  }, []);
  return (
    <div>
      <h2>How are you?</h2>
      <p>
        <small>Parle kicu tk dhar dish...:{friends.length}</small>
      </p>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend}></Friend>
      ))}
    </div>
  );
};

export default Friends;
