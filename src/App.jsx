import React, { useState } from "react";
import UserComponent from "./components/UserComponent";
import UserComponent2 from "./components/UserComponent2";
import UserComponent3 from "./components/UserComponent3";
// import FirstComponent from "./components/FirstComponent";
// import SecondComponent from "./components/SecondComponent";
// import InputForm from "./components/InputForm";
// import UserInputComponent from "./components/UserInputComponent";

// const userData = {
//   id: 1,
//   name: "Henri Miensan",
//   email: "henri@gmail.com",
//   age: 20,
//   occupation: "Farmer",
//   role: "ADJUTANT", // The role should either be Adjutant or RSM
//   fuelState: "250 litres",
//   troopsMovement: "300 pers",
// };

function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [role, setRole] = useState("");
  const [fuelState, setFuelState] = useState("");
  // Add phone number and gender
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [formInput, setFormInput] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUserInput = {
      name: name,
      email: email,
      age: age,
      occupation: occupation,
      role: role,
      fuelState: fuelState,
      phoneNumber: phoneNumber,
      gender: gender,
    };
    setFormInput(formUserInput);
  };

  // const [userInfo, setUserInfo] = useState(null);

  // const userLoggIn = () => {
  //   setUserInfo(userData); //    userInfo = userData
  // };

  // // Function to log out the user
  // const logOutUser = () => {
  //   setUserInfo(null);
  // };

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
        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="">Gender</label>
        <select
          name=""
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <UserComponent myname={name} email={email} age={age} />

      <div className="">Second component</div>
      <UserComponent2 userFormInput={formInput} />
      <div className="">Third Component</div>
      <UserComponent3 userFormInput={formInput}/>
      {/* <UserInputComponent /> */}
      {/* <InputForm /> */}
      {/* {userInfo !== null && userInfo.role === "RSM" ? (
        <div>
          <p>Sorry, you can't access this page.</p>
          <button onClick={logOutUser}>Log out</button>
        </div>
      ) : userInfo !== null && userInfo.role === "ADJUTANT" ? (
        <div>
          <p>Welcome Sir</p>
          <p>id: {userData.id}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>age: {userData.age}</p>
          <p>occupation: {userData.occupation}</p>
          <button onClick={logOutUser}>Log out</button>
        </div>
      ) : userInfo !== null &&
        userInfo.role !== "ADJUTANT" &&
        userInfo.role !== "RSM" ? (
        <div>You are logged in, but not and RSM or an ADJUTANT</div>
      ) : (
        <div>
          <h1>You are not logged in, please log in</h1>
          <button onClick={userLoggIn}>Log in</button>
        </div>
      )} */}
      {/* <FirstComponent />
      <SecondComponent /> */}
    </div>
  );
}

export default App;
