import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "http://jsonplaceholder.typicode.com/posts";
    axios.get(url).then((data) => setPosts(data.data));
  }, []);
  return (
    <div>
      <h2>Every posts facebook ever had : {posts.length}</h2>
      {posts.map((post) => (
        <Link
          className="mx-2 underline text-blue-500"
          key={post.id}
          to={`/posts/${post.id}`}
        >
          P-{post.id}
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default Posts;
