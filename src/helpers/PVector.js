import BaseVector from './BaseVector';
import {drawLine} from './utils';

class PVector {
  constructor(x, y, r) {
    this.pos = new BaseVector(x, y);
    this.vel = new BaseVector(0, 0);
    this.acc = new BaseVector(0, 0);
    
    this.r = r;
    this.mass = 0;
    this.topspeed = 4;
  }

  show(ctx)  {
    ctx.beginPath();
    ctx.ellipse(this.pos.x, this.pos.y, this.r, this.r, Math.PI, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgb(100,150,100,.8)';
    ctx.fill();
    
    drawLine(
      ctx,
      this.pos.x,
      this.pos.y,
      (this.pos.x + this.vel.x * 2.8),
      (this.pos.y + this.vel.y * 2.8)
    );
    ctx.stroke();
  }

  bounce(canvas) {
    if (this.pos.x < 0 + this.r) {
      this.pos.x = 0 + this.r;
      this.vel.x *= -1;
    }
    if (this.pos.x > canvas.width - this.r) {
      this.pos.x = canvas.width - this.r;
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 + this.r) {
      this.pos.y = 0 + this.r;
      this.vel.y *= -1;
    }
    if (this.pos.y > canvas.height - this.r ) {
      this.pos.y = canvas.height - this.r;
      this.vel.y *= -1;
    }
  }

  static sub(v1, v2) {
    let v = new BaseVector(v1.x, v1.y);
    v.sub(v2);
    return v;
  }

  move(canvas) {
    this.vel.add(this.acc);
    this.vel.limit(this.topspeed);
    this.pos.add(this.vel);
    this.bounce(canvas);
  } 

  resetForces() {
    this.acc.vel.normalize()
  }

  applyForce(force) {
    this.acc.add(force);
  }

  removeForce(force) {
    this.acc.sub(force);
  }
}

export default PVector;