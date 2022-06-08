import React from 'react';
import './Animal.css';


export default function Animal({ name, type, says }) {
  return (
    <div className= "animal-div">
      <p> {name}</p>
      <img alt={name} src={`${process.env.PUBLIC_URL}/animals/${type}.svg`} />

      <p> {type}</p>
      <p> {says} </p>
      
    </div>);
}


