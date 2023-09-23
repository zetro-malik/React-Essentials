import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const FavoriteColorUseState = () => {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1 style={{color:`${color}`}}>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("yellow")}
            >yellow</button>
            <button
                type="button"
                onClick={() => setColor("red")}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button>
        </>
    );

}


export default FavoriteColorUseState;