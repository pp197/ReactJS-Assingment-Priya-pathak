import React, { useState } from "react";
import './Rectangle.css';

const Rectangle = () => {

    const [initialColor, setinitialColor] = useState('');
    const [clicked, setclicked] = useState('');

    const changeColor=()=>{
        setinitialColor(true)
        setclicked(true)
    }

    return(
        <React.Fragment>
            <div className="rectangle" style={{
            background: !initialColor ? 'red' : 'green'
          }}></div>
            <button className="button" onClick={changeColor} >Press</button>
           {clicked ?<p className="clickText">Button Clicked</p>: ""} 
        </React.Fragment>
    )
}

export default Rectangle;