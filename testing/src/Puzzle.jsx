
import React, { useState } from 'react';
import PuzzlePiece from './PuzzlePiece';
import PuzzleSpot from './PuzzleSpot';

const Puzzle = ({ numRows, imageUrl }) => {
  const pieceSize = 100; // Assuming each piece is 100x100 pixels
  const puzzleSize = numRows * pieceSize;
  const [pieces, setPieces] = useState(
    Array.from({ length: numRows * numRows }, (_, i) => ({
      id: i,
      position: calculateInitialPosition(i, numRows, puzzleSize),
      spotPosition: calculateSpotPosition(i, numRows),
      isCorrect: false
    }))
  );

  function calculateInitialPosition(index, numRows, puzzleSize) {
    const x = (index % numRows) * pieceSize;
    const y = puzzleSize + Math.floor(index / numRows) * pieceSize;
    return { x, y };
  }

  function calculateSpotPosition(index, numRows) {
    const x = (index % numRows) * pieceSize;
    const y = Math.floor(index / numRows) * pieceSize;
    return { x, y };
  }

  const handleDropPiece = (spotId, pieceId) => {
    setPieces(prevPieces =>
      prevPieces.map(piece => {
        if (piece.id === pieceId) {
          const isCorrectSpot = spotId === pieceId;
          return {
            ...piece,
            position: isCorrectSpot ? pieces[spotId].spotPosition : piece.position,
            isCorrect: isCorrectSpot
          };
        }
        return piece;
      })
    );
  };

  const isPuzzleComplete = pieces.every(piece => piece.isCorrect);

  return (
    <div className="puzzle">
      {pieces.map(piece => (
        <PuzzleSpot
          key={piece.id}
          id={piece.id}
          isCorrect={piece.isCorrect}
          imageUrl={imageUrl}
          spotPosition={piece.spotPosition}
        />
      ))}
      {pieces.map(piece => (
        <PuzzlePiece
          key={piece.id}
          id={piece.id}
          imageUrl={imageUrl}
          position={piece.position}
          isCorrect={piece.isCorrect}
          onDropPiece={handleDropPiece}
        />
      ))}
      {isPuzzleComplete && <div className="completion-message">Puzzle Completed!</div>}
    </div>
  );
};

export default Puzzle;
