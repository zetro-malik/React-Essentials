import React from "react";
import { useSelector } from "react-redux";

const Contact = () => {
  const count = useSelector((c) => c.counter.value);
    return <h1>Contact Me {count}</h1>;
  };
  
  export default Contact;