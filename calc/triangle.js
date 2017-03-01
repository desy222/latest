import {GeometricCalculator} from './geometric';

export class Triangle {
    constructor (a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calculateTriangleArea (a,b,c) {
        return (a * b ) / 2;
    }
    calculateTriangleAreaCentroid (a) {
        return Math.sqrt(3)/4 * (a*a);
    }

    calculatePerimeter(a,b,c) {
            return a + b + c;
    }
}