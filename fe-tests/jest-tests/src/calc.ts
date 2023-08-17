export default class calc {
  static factorial(n: number): number {
    if (n === 0 || n === 1) return 1;
    return n * this.factorial(n - 1);
  }

  static fibonacci(n: number): number {
    if (n === 0 || n === 1) return 1;
    return this.fibonacci(n - 2) + this.fibonacci(n - 1);
  }

  static foo(x: number, y: number): number {
    let z: number = 0;
    if (x > 0 && y > 0) {
      z = x;
    }
    return z;
  }

  static displaySum(a: number, b: number): number {
    let sum = a + b;
    if (sum > 0) {
      console.log("Psotive sum = " + sum);
    } else if (sum < 0) {
      console.log("Negative sum = " + sum);
    }
    //		else {
    //			console.log(("Zero");
    //		}
    return sum;
  }

  static calcSum(x: number, y: number): number {
    if (x == 0 || y < 0) {
      y = y / x;
    } else {
      x = y + 2;
    }
    return x + y;
  }
}
