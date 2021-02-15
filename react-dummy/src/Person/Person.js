import React from "react";

import './Person.css';

const Person = (props)=>{

    return (
        <div className="Person">
             <p onClick ={props.click}>Im {props.name} and i'm {props.age} years old! </p>
             <input type='text' onChange={props.change} value={props.name}/>
             <p>{props.children}</p>
        </div>
    )
}

export default Person;