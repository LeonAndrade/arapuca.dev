import { useState, useEffect, useRef } from 'react';

import Canvas from './Canvas';
import PVector from '../helpers/PVector';
import BaseVector from '../helpers/BaseVector';

import '../App.css';

const canvasHeight = 400;
const canvasWidth = 400;

const randSeedX = Math.random() * canvasWidth;
const randSeedY = Math.random() * canvasHeight;

const gravity_and_wind = new BaseVector(.004, .01);

function VectorBall() {
  
  const [X, setX] = useState(randSeedX);
  const [Y, setY] = useState(randSeedY);

  const canvas = useRef();
  const ctx = useRef();
  
  let P = new PVector(X, Y, 20);
  P.acc.add(gravity_and_wind);
  
  useEffect(() => {

    if (!canvas.current) {
      return;
    } else {
      ctx.current = canvas.current.getContext("2d");
    }

    canvas.current.width = canvasWidth;
    canvas.current.height = canvasHeight;

    setInterval(() => {
      console.log(P.pos);
      ctx.current.reset();

      let Xto = 0;
      let Yto = 0;
        
      for (let i=0; i<20; i++) {
          
        ctx.current.beginPath();
        ctx.current.moveTo(0, Yto)
        ctx.current.lineTo(400, Yto);
        ctx.current.lineWidth = 2;
        ctx.current.strokeStyle = 'rgb(50,50,50,.8)';
        ctx.current.stroke();
        ctx.current.closePath();
        
        ctx.current.beginPath();
        ctx.current.moveTo(Xto, 0)
        ctx.current.lineTo(Xto, 400);
        ctx.current.lineWidth = 2;
        ctx.current.strokeStyle = 'rgb(50,50,50,.8)';
        ctx.current.stroke();
        ctx.current.closePath();
  
        Xto += 20;
        Yto += 20;
        
      }

      ctx.current.fillStyle = 'rgb(255,255,255)'
      ctx.current.font = '20px sans-serif'
      ctx.current.fillText(
        `{x: ${Math.round(P.pos.x)}, y: ${Math.round(P.pos.y)} }`,
        P.pos.x - 40, 
        P.pos.y - 40
      )
      P.move(canvas.current);
      P.show(ctx.current);
    }, 32);

  }, [])

  return (
    <div className="canvasContainer">
      <Canvas canvasRef={canvas} witdh={canvasWidth} height={canvasHeight}/>
    </div>
  )
}

export default VectorBall