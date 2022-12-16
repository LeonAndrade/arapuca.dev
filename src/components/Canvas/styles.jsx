import styled from 'styled-components';

export const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`

export const StyledCanvas = styled.canvas `
  border-radius: 15px;
  background-color:rgb(150, 150, 150, .2);
  width: 400px;
  height: 400px;
  margin: 2rem 0;

  -webkit-box-shadow: 2px 2px 10px -3px #000000;
  box-shadow: 2px 2px 10px -3px #000000;
`
