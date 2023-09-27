import React, { useState } from "react";

const InputForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const formInput = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    console.log(formInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)} // Change the first name to whatever the user typed in the form
          />
        </div>
        <div className="">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <button type="submit">Submit form</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
