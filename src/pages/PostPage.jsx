import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // We are feching the users from the API
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const postResponse = await response.json();

      // We set the users in the useState to the users we fetched or get from the API
      setPosts(postResponse);
    };

    // We run the function to call or fetch the users from the API
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="">
        <Link to={`/`}>Home Page</Link>
        <Link to={`/about`}>About Page</Link>
        <Link to={`/posts`}>Post Page</Link>
      </div>
      {posts.map((post) => (
        <div>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
