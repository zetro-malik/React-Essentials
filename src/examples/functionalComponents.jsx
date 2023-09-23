import React from "react";


function Car2(props) {

    const shoot = () => {
        alert("Great Shot!");
      }

    return (
        <div>
            <h2>Hi, I am {props.dataX}</h2>
            <button onClick={shoot}>click me</button>
        </div>
    );
  }

export default Car2;