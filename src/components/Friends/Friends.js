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
      <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto my-10 justify-center p-5">
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend}></Friend>
        ))}
      </div>
    </div>
  );
};

export default Friends;
