import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const url = `http://jsonplaceholder.typicode.com/posts/${postId}`;
    axios.get(url).then((data) => setPost(data.data));
  }, [postId]);
  return (
    <div>
      <h1 className="font-bold">Post Details {postId}</h1>
      <h3 className="font-semibold text-2xl">Title: {post.title} </h3>
      <h3>Body: {post.body} </h3>
    </div>
  );
};

export default PostDetails;
