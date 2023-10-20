import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleCommentPage() {
  const params = useParams();
  const [singleComent, setSingleComent] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${params.commentId}`
      );
      const commentResponse = await response.json();
      setSingleComent(commentResponse);
    };
    fetchComments();
  }, []);
  return (
    <>
      <Link to={"/comments"}>Go back</Link>
      {singleComent !== null && (
        <div>
          <div>postId:{singleComent.postId}</div>
          {/* <div>Id:{singleComent.Id}</div> */}
          <div>name:{singleComent.name}</div>
          <div>email:{singleComent.email}</div> 
          <div>body:{singleComent.body}</div>
        </div>
      )}
    </>
  );
}
export default SingleCommentPage;
