function Canvas({canvasRef, witdh, height}) {
  return(
    <canvas ref={canvasRef} width={witdh} height={height}/>
  )
}

export default Canvas;
