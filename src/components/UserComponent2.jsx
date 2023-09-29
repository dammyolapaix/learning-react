import React from "react";

export default function UserComponent2({ userFormInput }) {
  return (
    <div>
      <p>Your name is {userFormInput.email}</p>
      <p>Your email is {userFormInput.email}</p>
      <p>Your age is {userFormInput.age}</p>
    </div>
  );
}
