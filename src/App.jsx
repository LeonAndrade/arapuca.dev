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

  let randX = Math.random(100,380) * 400
  let randY = Math.random(100,380) * 400
  
  let P = new PVector(randX, randY, 20);
  P.acc.add(new BaseVector(.004, .01));
  
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
    }, 32);

  }, [])

  return (
    <div className="App">
      <h1 className='header'>Arapuca.dev</h1>
      <div className="main">
        <p className='subheader'>
          Arapucas Computacionais são artefatos digitais para captura e processamento de símbolos.
        </p>
        <p>
          Ideias sobre literacia tecnológica, cidadania digital e modos de navegação em espaços abstratos.
        </p>
        <Canvas canvasRef={canvas} witdh={canvasWidth} height={canvasHeight}/>
      </div>
      <p>Em Breve</p>
    </div>
  )
}

export default App
