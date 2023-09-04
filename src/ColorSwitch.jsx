import React, { useState } from "react"
import './ColorSwitch.css'

function ColorSwitch()
{
    const[color,setcolor]=useState("");
    const[userColor,setuserColor]=useState("");

    function handleUserInput(event)
    {
        setuserColor(event.target.value);
    }

    function handleUserColor(event)
    {
        event.preventDefault();
        setcolor(userColor.toLowerCase());
    }

    return(
        <div className="root">
            <p>This Is React Code To Switch Div Background Color</p>
            <div className="Highlight" style={{backgroundColor:color}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis voluptate natus aspernatur velit cum porro sunt nobis,
                deserunt ab quia.</p>
            </div>

            <form className="formDiv">
                <input type="text" placeholder="Enter Color" onChange={handleUserInput}/>
                <button onClick={handleUserColor}>Update</button>
            </form>
        </div>
    );
}

export default ColorSwitch