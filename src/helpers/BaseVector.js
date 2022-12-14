class BaseVector {
  constructor(x, y) {
    this.x = x,
    this.y = y
  }

  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
  
  sub(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  }

  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  }

  div(scalar) {
    this.x /= scalar;
    this.y /= scalar;
  }

  mag() {
    return Math.sqrt((this.x*this.x)+(this.y*this.y))
  }

  normalize() {
    let magnitude = this.mag();
    if (magnitude !== 0) {
      this.mult(1 / magnitude)
    }
  }

  limit(max) {
    let mSq = this.mag() * this.mag();
    if (mSq > max*max) {
      this.div(Math.sqrt(mSq));
      this.mult(max);
    }
  }
}

export default BaseVector;