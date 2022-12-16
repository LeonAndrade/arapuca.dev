import {
  CanvasContainer,
  StyledCanvas
} from './styles'

function Canvas({canvasRef, witdh, height}) {
  return(
    <CanvasContainer>
      <StyledCanvas ref={canvasRef} width={witdh} height={height}/>
    </CanvasContainer>
  )
}

export default Canvas;
