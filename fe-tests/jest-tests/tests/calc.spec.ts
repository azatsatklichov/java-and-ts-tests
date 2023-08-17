import calc from '../src/calc';

describe('calc', function() {
    
  it('factorial', function() {
    const result = calc.factorial(5);
    expect(result).toBe(120);
  });

  it('fibonacci', function() {
    const result = calc.fibonacci(4);
    expect(result).toBe(5);
  });

  it('displaySum', function() {
    const result = calc.displaySum(5,10);
    expect(result).toBe(15);

    const result2 = calc.displaySum(-10,5);
    expect(result2).toBe(-5);

    //const result3 = calc.displaySum(-10,10);
    //expect(result3).toBe(0);
  
  });

  it('calcSum', function() {
    const result = calc.calcSum(5, 5);
    expect(result).toBe(12);

    const result2 = calc.calcSum(-5, -5);
    expect(result2).toBe(-4);

    const result3 = calc.calcSum(0, 5);
    expect(result3).toBe(Infinity);
  }); 
  
});
