import React, { useState, useEffect, useRef } from "react";

// export default function NotRerenderUseRef() { // Updated component name
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   }); 

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }




// export default function AccessingDomElements () {
//     const inputElement = useRef();
  
//     const focusInput = () => {
//       inputElement.current.focus();
//     };
  
//     return (
//       <>
//         <input type="text" ref={inputElement} />
//         <button onClick={focusInput}>Focus Input</button>
//       </>
//     );
//   }




  export default function TrackingStateChanges() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");
  
    useEffect(() => {
      previousInputValue.current = inputValue;
    }, [inputValue]);
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
      </>
    );
  }