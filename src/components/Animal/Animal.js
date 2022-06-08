import React from 'react';


export default function Animal({ name, type, says }) {
  return (<>
    <p> {name}</p>
    <p> {type}</p>
    <p> {says} </p>
  </>);
}
