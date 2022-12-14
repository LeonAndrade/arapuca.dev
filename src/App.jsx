import { useEffect, useRef } from 'react';
import Canvas from './components/Canvas';
import './App.css';
import PVector from './helpers/PVector';
import BaseVector from './helpers/BaseVector';

function App() {

  const canvas = useRef();
  const ctx = useRef();

  const canvasHeight = 400;
  const canvasWidth = 400;
  
  let P = new PVector(200, 200, 20);
  P.vel.add(new BaseVector(1, 3));
  
  useEffect(() => {

    if (!canvas.current) {
      return;
    } else {
      ctx.current = canvas.current.getContext("2d");
    }
  
    let currentCanvas = canvas.current;
    let currentCtx = ctx.current;

    currentCanvas.width = canvasWidth;
    currentCanvas.height = canvasHeight;

    setInterval(() => {
      console.log(P.pos);
      currentCtx.reset();
      P.move(currentCanvas);
      P.show(currentCtx);
    },64);

  }, [])

  return (
    <div className="App">
      <h1>Arapuca.dev</h1>
      <Canvas canvasRef={canvas} witdh={canvasWidth} height={canvasHeight}/>
    </div>
  )
}

export default App
