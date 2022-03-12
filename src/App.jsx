import logo from './logo.svg';
import './App.css';
import { Display } from './componants/Display';
import { Button } from './componants/Button';
import { useState } from 'react';

function App() {

  return (
    <div id='mainDiv'>
      <h1> Stopwatch</h1>
      <Button/>
    </div>
  );
}

export default App;
