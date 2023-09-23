import React from "react";


function Car2(props) {

    const shoot = (arg,evnt) => {
        // tell what event it was
        console.log(evnt);
        alert(`Great Shot! ${arg}`);
      }

    return (
        <div>
            <h2>Hi, I am {props.dataX}</h2>
            <button onClick={(event)=>shoot("zetro",event)}>click me</button>
        </div>
    );
  }

export default Car2;