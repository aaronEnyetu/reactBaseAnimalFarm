import React from 'react';
import Animal from '../Animal/Animal.js';

export default function AnimalList({ animals }) {
  return <main> {
    animals.map((animal, i) => <Animal
      {...animal}
      key={animal.name + i} />)
  }

  </main>;
}


