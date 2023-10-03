import React,{useState} from "react";
import { useEffect } from "react";

function UserPost() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
        // We are feching the users from the API
        const fetchUsers = async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"

          );
    
          const apiUsers = await response.json();
    
          // We set the users in the useState to the users we fetched or get from the API
          setUsers(apiUsers);
        };
    
        // We run the function to call or fetch the users from the API
        fetchUsers();
        console.log(users);
      }, []);

      return (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <div>Id: {user.id}</div>
              <div>Title: {user.title}</div>
              <div>Body: {user.body}</div>
            </div>
          ))}
        </div>
      );
    }
    
    export default UserPost;
 

