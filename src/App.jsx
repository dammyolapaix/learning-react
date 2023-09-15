import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import { userInfo } from "./data/user";

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
      {user !== null ? (
        <>
          <h1>you are logged in</h1>
          <div className="">
            <p>id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>age: {user.age}</p>
            <p>occupation: {user.occupation}</p>
            <p>role: {user.role}</p>
            {user.role === Adjutant ? (
              <>
                <p>State of Fuel is {user.fuelState} </p>
                <p>Movement of troops{user.troopsMovement} </p>
              </>
            ) : (
              <p></p>
            )}
          </div>
          <button onClick={logOutUser}>Log out</button>
        </>
      ) : (
        <>
          <h1>you are not logged in,please log in </h1>
          <button onClick={logginUser}>Log in</button>
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
