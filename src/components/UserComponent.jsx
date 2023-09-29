import React from "react";

export default function UserComponent(props) {
  return (
    <div>
      <p>Your name is {props.myname}</p>
      <p>Your email is {props.email}</p>
      <p>Your age is {props.age}</p>
    </div>
  );
}
