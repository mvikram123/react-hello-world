import React from "react";
import  ReactDOM from "react-dom";
//import Button from "./Components/Button";

const App=()=>{
    let a=100;
    let style2={textAlign:"center", color:"red", backgroundColor:"yellow"}
    return (
            <div className="hello">
              <h1>value of a is {a}</h1>
              <h2 style={style2}>Hello world</h2>
              <p>hello, how are you !!!</p>
              </div>
    )
  }

export default App;
