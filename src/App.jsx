import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import InputForm from "./components/InputForm";

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userRole, setUserRole] = useState(null);

  const userLoggIn = (role, userData) => { // Pass userData as a parameter
    if (role === "RSM") {
      setUserInfo(null);
      setUserRole("RSM");
    } else if (role === "ADJUTANT") {
      setUserInfo(userData); // Use the userData parameter
      setUserRole("ADJUTANT");
    }
    setUserIsLoggedIn(true);
  };

  const logOutUser = () => {
    setUserInfo(null);
    setUserRole(null);
    setUserIsLoggedIn(false);
  };

  return (
    <div>
      {userIsLoggedIn ? (
        userRole === "RSM" ? (
          <div>
            <p>Sorry, you can't access this page.</p>
            <button onClick={logOutUser}>Log out</button>
          </div>
        ) : (
          <div>
            <InputForm userData={userData} /> 
          </div>
        )
      ) : (
        <div>
          <h1>You are not logged in, please log in</h1>
          <button onClick={() => userLoggIn("ADJUTANT", userData)}>
            Log in as ADJUTANT
          </button>
          <button onClick={() => userLoggIn("RSM")}>Log in as RSM</button>
        </div>
      )}
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;


