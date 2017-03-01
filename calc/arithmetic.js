import {Calculator} from './calculator';

export class ArithmeticCalculator extends Calculator {
    constructor(result) {
        super(result);
    }
    increment(a,b) {
        return a +b;
    }
    decrement(a,b) {
        return a - b; 
    }
     divide(a,b) {
      return a/b;
    }
     multiply(a,b) {
        return a * b;
    }
    square(a) {
        return  Math.sqrt(a);
    }
}

