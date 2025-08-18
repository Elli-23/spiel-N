import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [board, setBoard] = useState<string[][]>([]);

  const [selectedColumn, setSelectedColumn] = useState(0);

  // Beim Rendern: Board mit leeren Strings befüllen
  useEffect(() => {
    const emptyBoard = Array.from({ length: 6 }, () => Array(7).fill(""));
    setBoard(emptyBoard);
  }, []);

  return (
    <div className="App">
      <div className="row_chooser">
        {Array(7)
          .fill(null)
          .map((_, colIndex) => (
            <div
              key={colIndex}
              className={`pointer ${
                selectedColumn == colIndex ? "active" : ""
              }`}
              onClick={() => setSelectedColumn(colIndex)}
            >
              ▼
            </div>
          ))}
      </div>

      <div className="game_board">
        {board.map((item, key) =>
          item.map((column, columnKey) => <div className="game_item"></div>)
        )}
      </div>
    </div>
  );
}
