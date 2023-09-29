import React from "react";
import { useState } from "react";

const UserComponent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [role, setRole] = useState("");
  const [fuelState, setFuelState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUserInput = {
      name: name,
      email: email,
      age: age,
      occupation: occupation,
      role: role,
      fuelState: fuelState,
    };
    console.log(formUserInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">name</label>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="">email</label>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">age</label>
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />

        <label htmlFor="">Occupation</label>
        <input
          type="text"
          placeholder="Occupation"
          onChange={(e) => setOccupation(e.target.value)}
        />
        <label htmlFor="">Role</label>
        <input
          type="text"
          placeholder="Role"
          onChange={(e) => setRole(e.target.value)}
        />

        <label htmlFor="">Fuel state</label>
        <input
          type="number"
          placeholder="Fuel State"
          onChange={(e) => setFuelState(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserComponent;
