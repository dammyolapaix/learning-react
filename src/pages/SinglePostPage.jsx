import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SinglePostPage() {
  const params = useParams();

  const [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    // We are feching the users from the API
    const fetchPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
      );

      const postResponse = await response.json();

      // We set the users in the useState to the users we fetched or get from the API
      setSinglePost(postResponse);
    };

    // We run the function to call or fetch the users from the API
    fetchPosts();
  }, []);

  return (
    <div>
      <Link to={`/posts`}>Go Back</Link>
      {singlePost !== null && (
        <div>
          <div>Post Id: {singlePost.id}</div>
          <div>User ID: {singlePost.userId}</div>
          <div>Post Title: {singlePost.title}</div>
          <div>Post body: {singlePost.body}</div>
        </div>
      )}
    </div>
  );
}
