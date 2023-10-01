import React from "react";

function UserComponent3({ userFormInput }) {
  return (
    <div>
      <p>Your number is {userFormInput.phoneNumber}</p>
      <p>your gender is {userFormInput.gender}</p>
    </div>
  );
}

export default UserComponent3;
