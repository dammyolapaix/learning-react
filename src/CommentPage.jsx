import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CommentPage() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const responseComments = await response.json();

      setComments(responseComments);
    };
    fetchComments();
  }, []);
  return (
    <>
      <div>
        <Link to={"/"}>Home Page</Link>
        <Link to={"/about"}>About page</Link>
        <Link to={"/posts"}>Post page</Link>
        <Link to={"/comments"}>Comments Page</Link>
      </div>

      {comments.map((comment) => (
        <div>
          <Link to={`/comments/${comment.id}`}>{comment.body}</Link>
        </div>
      ))}
    </>
  );
}

export default CommentPage;
