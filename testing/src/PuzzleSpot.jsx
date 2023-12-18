

import { useDrop } from 'react-dnd';

const PuzzleSpot = ({ id, isCorrect, imageUrl, spotPosition }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'piece',
    drop: () => ({ id }),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const spotStyle = isCorrect ? {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: `-${spotPosition.x}px -${spotPosition.y}px`,
    backgroundSize: '400px 400px',
    border: 'none'
  } : {};

  return (
    <div
      ref={drop}
      className={`spot ${isOver ? 'over' : ''}`}
      style={spotStyle}
    />
  );
};

export default PuzzleSpot;
