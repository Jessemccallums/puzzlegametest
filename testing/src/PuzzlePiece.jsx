import { useDrag } from 'react-dnd';

const PuzzlePiece = ({ id, imageUrl, position, isCorrect, onDropPiece }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'piece',
    item: { id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onDropPiece(dropResult.id, item.id);
      }
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  if (isCorrect) {
    return null; // Don't render the piece if it's correctly placed
  }

  return (
    <div
      ref={drag}
      className="piece"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: `-${position.x}px -${position.y}px`,
        opacity: isDragging ? 0.5 : 1,
        top: position.y,
        left: position.x
      }}
    />
  );
};

export default PuzzlePiece;
