import {GeometricCalculator} from './geometric';

export class Circle {
    constructor(r) {
        this.r = r;
    }
    areaOfCircle (r) {
        return Math.PI * (r*r);
    }
}