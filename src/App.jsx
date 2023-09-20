import { useState } from "react";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import { userInfo } from "./data/user";

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [userRole, setUserRole] = useState(null);

  // Function to log in the user
  const userLoggIn = (role) => {
    // set user information and role base on role
    if (role === "RSM") {
      setUserInfo(null); //clear user info
      setUserRole("RSM");
    } else if (role === "ADJUTANT") {
      setUserInfo(userInfo);
      setUserRole("ADJUTANT");
    }
    setUserIsLoggedIn(true);
  };

  // Function to log out the user
  const logOutUser = () => {
    setUser(null);
    setUserRole(null);
    setUserIsLoggedIn(false);
  };

  return (
    <>
      if(userRole ==="RSM")
      {
        <>
          <P>please you can acess this page </P>
          <button onClick={logOutUser}>Log out</button>
        </>
      }
      else (userRole === "ADJUTANT")
      {
        <>
          <p>Welcome Sir</p>
          <p>id: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>email: {user.email}</p>
          <p>age: {user.age}</p>
          <p>occupation: {user.occupation}</p>
        </>
      }
      <>
      <h1>You are not logged in, please log in</h1>
          <button onClick={() => userLoggIn("RSM")}>Log in as RSM</button>
          <button onClick={() => userLoggIn("ADJUTANT")}>Log in as Adjutant</button>
      </>
    </>
  );
}

export default App;
