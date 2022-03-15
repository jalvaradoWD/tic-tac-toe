import { CircleOutlined, Close, RowingRounded } from '@mui/icons-material';
import { FC, useEffect, useState } from 'react';
import IndexStyles from './styles/index.styles';

function App() {
  return (
    <>
      <Board />
    </>
  );
}

const CellRow: FC<{
  cellRow: number[];
  rowIndex: number;
  setBoardState: Function;
  boardState: number[][];
}> = ({ cellRow, rowIndex, setBoardState, boardState }) => {
  return (
    <div className="cell-row">
      {cellRow.map((cell, index) => (
        <Cell
          cell={cell}
          rowIndex={rowIndex}
          cellIndex={index}
          setBoardState={setBoardState}
          boardState={boardState}
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
}> = ({ cell, rowIndex, cellIndex, boardState, setBoardState }) => {
  const onClick = () => {
    console.log(rowIndex, cellIndex);
    const test = boardState;

    test[rowIndex][cellIndex] = 1;
    setBoardState(test);
  };

  return (
    <div onClick={onClick} className="cell">
      {cell === 0 ? <Close /> : <CircleOutlined />}
    </div>
  );
};

const Board: FC = () => {
  const [boardState, setBoardState] = useState<number[][]>([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ]);
  const [currentPlayer, setCurrentPlayer] = useState();

  return (
    <IndexStyles>
      {boardState.map((cellRow, index) => (
        <CellRow
          cellRow={cellRow}
          rowIndex={index}
          setBoardState={setBoardState}
          boardState={boardState}
        />
      ))}
    </IndexStyles>
  );
};

export default App;
