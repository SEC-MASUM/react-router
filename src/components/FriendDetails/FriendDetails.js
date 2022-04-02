import React from "react";
import { useParams } from "react-router-dom";

const FriendDetails = () => {
  //   const param = useParams();
  const { friendId } = useParams();

  return (
    <div>
      {/* <h1 className="font-bold text-2xl">
        This is details of friend: {param.friendId}
      </h1> */}
      <h1 className="font-bold text-2xl">
        This is details of friend: {friendId}
      </h1>
    </div>
  );
};

export default FriendDetails;
