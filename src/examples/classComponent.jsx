import React from "react";

class Car extends React.Component {
    componentDidMount (){
        console.log("opened")
    }

    render() {
      return <h2>Hi, I am a Car!</h2>;
    }
  }

export default Car;