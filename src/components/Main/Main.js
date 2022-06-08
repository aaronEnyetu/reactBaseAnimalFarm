import React from 'react';
import './Main.css';
import background from '../../background.png';
import AnimalList from '../AnimalList/AnimalList';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <AnimalList animals={animals} />
    </main>
  );}