import { CircleOutlined, Close } from '@mui/icons-material';
import { FC, useState } from 'react';
import IndexStyles from './styles/index.styles';

function App() {
  return <Board />;
}

const initState = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const CellRow: FC<{
  cellRow: number[];
  rowIndex: number;
  setBoardState: Function;
  boardState: number[][];
  currentPlayer: string | null;
  setCurrentPlayer: Function;
}> = ({
  cellRow,
  rowIndex,
  setBoardState,
  boardState,
  currentPlayer,
  setCurrentPlayer,
}) => {
  return (
    <div className="cell-row">
      {cellRow.map((cell, index) => (
        <Cell
          key={`row${rowIndex}-cell${index}`}
          cell={cell}
          rowIndex={rowIndex}
          cellIndex={index}
          setBoardState={setBoardState}
          boardState={boardState}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />
      ))}
    </div>
  );
};

const Cell: FC<{
  cell: number;
  rowIndex: number;
  cellIndex: number;
  setBoardState: Function;
  boardState: number[][];
  currentPlayer: string | null;
  setCurrentPlayer: Function;
}> = ({
  cell,
  rowIndex,
  cellIndex,
  boardState,
  setBoardState,
  currentPlayer,
  setCurrentPlayer,
}) => {
  const onClick = () => {
    // Return an array
    if (boardState[rowIndex][cellIndex] > 0) return null;

    let setValue = currentPlayer === 'X' ? 1 : 2;

    setBoardState(
      boardState.map((row, index) =>
        index === rowIndex
          ? row.map((cell, index) => (index === cellIndex ? setValue : cell))
          : row
      )
    );

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const renderIcon = (value: number) => {
    switch (value) {
      case 1: {
        return <Close />;
      }
      case 2: {
        return <CircleOutlined />;
      }
      default:
        return null;
    }
  };

  return (
    <div onClick={onClick} className="cell">
      {renderIcon(cell)}
    </div>
  );
};

const Board: FC = () => {
  const [boardState, setBoardState] = useState<number[][]>(initState);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState<string | null>(null);

  return (
    <IndexStyles>
      {boardState.map((cellRow, index) => (
        <CellRow
          key={`row${index}`}
          cellRow={cellRow}
          rowIndex={index}
          setBoardState={setBoardState}
          boardState={boardState}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />
      ))}
      <button
        onClick={(): void => {
          setIsGameStarted(false);
          setBoardState(initState);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setIsGameStarted(true);
          setCurrentPlayer('O');
        }}
      >
        Start
      </button>
    </IndexStyles>
  );
};

export default App;
