import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import { userData } from "./data/user";

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userRole, setUserRole] = useState(null);

  // Function to log in the user
  const userLoggIn = (role) => {
    // set user information and role based on the role
    if (role === "RSM") {
      setUserInfo(null); // clear user info
      setUserRole("RSM");
    } else if (role === "ADJUTANT") {
      setUserInfo(userInfo); // set user info (assuming userInfo is an object)
      setUserRole("ADJUTANT");
    }
    setUserIsLoggedIn(true);
  };

  // Function to log out the user
  const logOutUser = () => {
    setUserInfo(null);
    setUserRole(null);
    setUserIsLoggedIn(false);
  };

  return (
    <div>
      {userIsLoggedIn && userRole === "RSM" ? (
        <div>
          <p>Sorry, you can't access this page.</p>
          <button onClick={logOutUser}>Log out</button>
        </div>
      ) : userIsLoggedIn && userRole === "ADJUTANT" ? (
        <div>
          <p>Welcome Sir</p>
          <p>id: {userData.id}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>age: {userData.age}</p>
          <p>occupation: {userData.occupation}</p>
          <button onClick={logOutUser}>Log out</button>
        </div>
      ) : (
        <div>
          <h1>You are not logged in, please log in</h1>
          <button onClick={() => userLoggIn("RSM")}>Log in as RSM</button>
          <button onClick={() => userLoggIn("ADJUTANT")}>
            Log in as Adjutant
          </button>
        </div>
      )}
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
