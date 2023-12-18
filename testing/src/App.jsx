import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Puzzle from './Puzzle';
import './App.css';
import picture from './assets/picture.jpg';

function App() {
  const imageUrl = picture;
  const numRows = 4; // For a 4x4 puzzle

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>Puzzle Game</h1>
        <Puzzle numRows={numRows} imageUrl={imageUrl} />
      </div>
    </DndProvider>
  );
}

export default App;