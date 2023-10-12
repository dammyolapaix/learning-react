import React, { useState } from "react";
import UserComponent from "./components/UserComponent";
import UserComponent2 from "./components/UserComponent2";
import UserComponent3 from "./components/UserComponent3";
import { useEffect } from "react";
import UserPost from "./components/UserPost";
import { Link } from "react-router-dom";
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
  const [users, setUsers] = useState([]);

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

  // The purpose of the useEffect is to prevent it from making multiple API request and run only once
  useEffect(() => {
    // We are feching the users from the API
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
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
      <div className="">
        <Link to={`/`}>Home Page</Link>
        <Link to={`/about`}>About Page</Link>
        <Link to={`/posts`}>Post Page</Link>
      </div>

      {users.map((user) => (
        <div>
          <div>Id: {user.id}</div>
          <div>Name: {user.name}</div>
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
          <div>Adress:{user.address.street}</div>
          <div>suite: {user.address.suite}</div>
          <div>city: {user.address.city}</div>
          <div>zipcode: {user.address.zipcode}</div>
          <div>lat: {user.address.geo.lat}</div>
          <div>lng: {user.address.geo.lng}</div>
          <div>phone: {user.phone}</div>
          <div>website: {user.website}</div>
          <div>compagny name: {user.company.name}</div>
          <div>compagny catchphrase: {user.company.catchPhrase}</div>
          <div>compagny bs: {user.company.bs}</div>
        </div>
      ))}

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
      <UserComponent3 userFormInput={formInput} />
      <UserPost />
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
