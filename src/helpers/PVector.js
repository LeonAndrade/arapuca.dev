import BaseVector from './BaseVector';

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

    // Background Lines
    ctx.beginPath();
    ctx.moveTo(this.pos.x, 0)
    ctx.lineTo(this.pos.x, 400);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(100,100,100,.4)';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, this.pos.y)
    ctx.lineTo(400, this.pos.y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(100,100,100,.4)';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(this.pos.x, this.pos.y, this.r, this.r, Math.PI, 0, 2 * Math.PI);
    ctx.fillStyle = '#618C0A77';
    ctx.fill();
    ctx.closePath();

    // Vel X
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y)
    ctx.lineTo(
      (this.pos.x),
      (this.pos.y + this.acc.y * 6000)
      );
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#E53D00';
      ctx.stroke();
      ctx.closePath();

      // Vel Y
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y)
      ctx.lineTo(
        (this.pos.x + this.acc.x * 6000),
        (this.pos.y)
        );
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#E53D00';
      ctx.stroke();
      ctx.closePath();

      // V magnitude
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y)
      ctx.lineTo(
        (this.pos.x + this.acc.x * 4000),
        (this.pos.y + this.acc.y * 4000)
      );
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#38A5EE';
      ctx.stroke();
      ctx.closePath();

      // Acc
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y)
      ctx.lineTo(
        (this.pos.x + this.vel.x * 50),
        (this.pos.y + this.vel.y * 50)
      );
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#FFE900';
      ctx.stroke();
      ctx.closePath();
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
