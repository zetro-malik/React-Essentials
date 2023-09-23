import React from "react";

function MissedGoal() {
    return <h1>MISSED!</h1>;
  }
  
  function MadeGoal() {
    return <h1>Goal!</h1>;
  }


//   const Goal = (props)=> {
//     const isGoal = props.isGoal;
//     if (isGoal) {
//       return <MadeGoal/>;
//     }
//     return <MissedGoal/>;
//   }

  const Goal = (props)=> {
      const isGoal = props.isGoal;
      return (
        <>
          { isGoal ? <MadeGoal/> : <MissedGoal/> }
        </>
      );
    }

export default Goal;