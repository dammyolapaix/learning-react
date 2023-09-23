import React, { useState } from "react";

const InputForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //   const handleChange = (e) => {
  //     setFirstName(e.target.value);

  //     // console.log(firstName);

  //     console.log(e.target.value);
  //   };

  const handleSubmit = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    const formInput = {
      firstName: firstName,
      lastName: lastName,
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
            //   value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            //   value={firstName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="">
          <button type="submit">Submit form</button>
        </div>
      </form>
      {firstName} {lastName}
    </div>
  );
};

export default InputForm;
