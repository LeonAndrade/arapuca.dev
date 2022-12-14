function Canvas({canvasRef, witdh, height}) {
  return(
    <div className="canvasContainer">
      <canvas ref={canvasRef} width={600} height={600}/>
    </div>
  )
}

export default Canvas;