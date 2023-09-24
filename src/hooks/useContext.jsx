import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

export default function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <UserContext.Provider value={{
        state:user,
        setState:setUser,
        data:"<<random>>"
      }}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
    const obj = useContext(UserContext);
  return (
    <>
      <h3 style={{color:"lightblue"}}  onClick={()=>obj.setState('zeeshan')}>Component 3  click me to change state</h3>

      <Component4 />
    </>
  );
}

function Component4() {
    const obj = useContext(UserContext);
  return (
    <>
      <h3>Component 4 this is data from component-1 {obj.data}</h3>
      <Component5 />
    </>
  );
}

function Component5() {
  const obj = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${obj.state} again!`}</h2>
    </>
  );
}
