import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import { userInfo } from "./data/userInfo";

function App() {
  const [userRole, setUserRole] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const logInAsRSM = () => {
    setUserRole("RSM");
  };

  const logInAsAdjutant = () => {
    setUserRole("ADJUTANT");
  };

  const logOut = () => {
    setUserRole(null);
  };

  return (
    <div>
      {userInfo !== null ? (
        <>
          <h1>you are logged in</h1>
          <div className="">
            <p>id: {userInfo.id}</p>
            <p>Name: {userInfo.name}</p>
            <p>email: {userInfo.email}</p>
            <p>age: {userInfo.age}</p>
            <p>occupation: {userInfo.occupation}</p>
            <p>role: {userInfo.role}</p>
            {userInfo.role === "Adjutant" ? (
              <>
                <p>State of Fuel is {userInfo.fuelState} </p>
                <p>Movement of troops: {userInfo.troopsMovement} </p>
              </>
            ) : (
              <p></p>
            )}
          </div>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <>
          <h1>you are not logged in, please log in </h1>
          <button onClick={logInAsRSM}>Log in as RSM</button>
          <button onClick={logInAsAdjutant}>Log in as ADJUTANT</button>
        </>
      )}

      {userRole === "RSM" && (
        <div>
          <h1>Sorry, you can't access this information.</h1>
          <button onClick={logOut}>Log out</button>
        </div>
      )}

      {userRole === "ADJUTANT" && (
        <div>
          <h1>You are logged in as ADJUTANT</h1>
          <p>Admin-Only Content:</p>
          <p>This content is visible only to ADJUTANT.</p>
          <p>stateOfPol: "250ltrs"</p>
          <p>MvmtOfTps: "Accra,Tema"</p>
          <p>unitAccommodation: "250 units"</p>
          <button onClick={logOut}>Log out</button>
        </div>
      )}
      {userRole === null && (
        <div>
          <h1>You are not logged in, please log in</h1>
          <button onClick={logInAsRSM}>Log in as RSM</button>
          <button onClick={logInAsAdjutant}>Log in as ADJUTANT</button>
        </div>
      )}
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
