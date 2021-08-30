import React from "react";
import './Main.css'

import Rectangle from './Rectangle'

const Main = () => {
  
    return(
        <React.Fragment>
            <div className="headingtxt">
                <h2>Hello</h2>
                <h2>Hello Hello </h2>
                <h2>Hello Hello Hello</h2>
                <h2>Hello Hello Hello Hello</h2>
            </div>
            <Rectangle/>
        </React.Fragment>
    )
}

export default Main;