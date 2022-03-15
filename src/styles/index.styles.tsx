import styled from 'styled-components';

export default styled.div`
  display: grid;
  width: 20rem;
  row-gap: 1rem;

  .cell {
    box-sizing: border-box;
    border: 1px solid black;
    height: 100px;
    width: 100px;

    &:hover {
      border: 2px solid black;
      cursor: pointer;
    }
  }

  .cell-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  svg {
    height: 100%;
    width: 100%;
  }
`;
