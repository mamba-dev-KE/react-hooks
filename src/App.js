import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [name, setName] = useState('');

  //On every render
  useEffect(() => {
    console.log('I re-rendered');
  });

  //On the first render/mount only because of array dependency
  useEffect(() => {
    console.log('I mounted');
  }, []);

  //On the first render and whenever the dependency changes
  useEffect(() => {
    console.log(`The name changed: ${name}`);
  }, [name]);

  //unmounts component
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div className="app">
      <center>
        <h1>The useEffect Hook</h1>
        <h2>The window width is {windowWidth}</h2>
        <input
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
          placeholder={'Enter name'}
        />
      </center>
    </div>
  );
}
