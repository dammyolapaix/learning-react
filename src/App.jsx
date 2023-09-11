import { useState } from "react";

import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import { userInfo } from "./data/user";

function App() {
  /**
   * The userIsLoggedIn is the main variable. Inreact, state is immutable, that is, we can't change the value of a state.
   *
   * This is where the other variable come in (setUserIsLoggedIn). You can use it to change the main variable. For example, if the main variable is false, you can set (change) it to true.
   */
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const [user, setUser] = useState(null);

  console.log(user);

  //function to log in the user
  const logginUser = () => {
    setUser(userInfo);
    // setUserIsLoggedIn(true);
  };

  // function to log out the user
  const logOutUser = () => {
    setUser(null);
    // setUserIsLoggedIn(false);
  };

  console.log(userIsLoggedIn);
  return (
    <>
      {user !== null ? (
        <>
          <h1>you are logged in</h1>
          <div className="">
            <p>id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>age: {user.age}</p>
            <p>occupation: {user.occupation}</p>
          </div>
          <button onClick={logOutUser}>Log out</button>
        </>
      ) : (
        <>
          <h1>you are not logged in,please log in </h1>
          <button onClick={logginUser}>Log in</button>
        </>
      )}
      <FirstComponent />
      <SecondComponent />
    </>
  );
}

export default App;
