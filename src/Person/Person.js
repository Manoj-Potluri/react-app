import React from 'react';
import './Person.css';
import Radium from 'radium';

const Person = (props) => {
    return (
        <div>
            <p onClick={props.click}>HI, I'm {props.name} and my age is {props.age}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )

}

export default Radium(Person);
