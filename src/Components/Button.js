import React from "react";
//import  ReactDOM  from "react-dom";
const Button=(props)=>{
  //  props.text="guava";  // we can not do this because props is read only object/property

    return(
        <div>
            <button>{props.text}</button>
            <p>This is a {props.text} which is {props.color} in color</p>
        </div>
    )
}
export default Button;