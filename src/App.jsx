import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import InputForm from "./components/InputForm";

const userData = {
  id: 1,
  name: "Henri Miensan",
  email: "henri@gmail.com",
  age: 20,
  occupation: "Farmer",
  role: "ADJUTANT", // The role should either be Adjutant or RSM
  fuelState: "250 litres",
  troopsMovement: "300 pers",
};

function App() {
  const [userInfo, setUserInfo] = useState(null);


  const userLoggIn = () => {
    setUserInfo(userData); //    userInfo = userData
  };

  // Function to log out the user
  const logOutUser = () => {
    setUserInfo(null);
  };

  return (
    <div>
      <InputForm />
      {userInfo !== null && userInfo.role === "RSM" ? (
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
      )}
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
