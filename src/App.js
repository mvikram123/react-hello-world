import React from "react";
//import  ReactDOM from "react-dom";
import Button from './Components/Button';

const App=()=>{
    
    return (
        <div className="hello">
            <h1>Hello World</h1>

         <Button text="Apple" color="red"/>
         <Button text="Orange" color="Orange"/>
         <Button text="banana" color="yellow"/>
         
        </div>
    )
  }

export default App;
