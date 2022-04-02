import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});

  useEffect(() => {
    const url = `http://jsonplaceholder.typicode.com/users/${friendId}`;
    axios.get(url).then((data) => setFriend(data.data));
  }, [friendId]);

  return (
    <div>
      <h1 className="font-bold text-2xl">
        This is details of friend: {friendId}
      </h1>
      <h2>Name: {friend.name}</h2>
      <h4>Email: {friend.email}</h4>
      <h6>Website: {friend.website}</h6>
      <p><small>City: {friend.address?.city}</small></p>
      <p><small>Lat: {friend.address?.geo.lat}</small></p>
    </div>
  );
};

export default FriendDetails;
