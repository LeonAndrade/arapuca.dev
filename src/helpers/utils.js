import BaseVector from './BaseVector';

function getMousePosition({evt, canvas}) {
  console.log(canvas)
  const e = canvas.getBoundingClientRect();
  return new BaseVector(evt.x - e.left, evt.y - e.top);
}

function drawLine(ctx, x0, y0, x1, y1) {
  ctx.moveTo(x0, y0)
  ctx.lineTo(x1, y1);
  ctx.stroke();
}

export {
  getMousePosition,
  drawLine
}