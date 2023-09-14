import React, { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

function App() {
  const [userRole, setUserRole] = useState(null);

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
