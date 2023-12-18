// Import the component and the CSS file
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import './App.css'
import pic from './assets/pic.jpg'

function Game() {
  
  // Define the image URL, the rows, and the columns
  const imageSrc = pic;
  const rows = 3;
  const columns = 2;
  
  // Define a function to handle the puzzle solved event
  const handleSolved = () => {
    alert("You solved the puzzle!");
  };
  return (
    <div>
      <JigsawPuzzle
        imageSrc={imageSrc}
        rows={rows}
        columns={columns}
        onSolved={handleSolved}
      />
    </div>
  )
}

export default Game
