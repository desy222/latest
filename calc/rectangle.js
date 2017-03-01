import {GeometricCalculator} from './geometric';

export class Rectangle {
    constructor(d1,d2,alpha) {
        this.d1 = d1;
        this.d2 = d2;
        this.alpha = alpha;
    }

    areaOfrandomRectangle (d1,d2,alpha) {
        return 0.5 * (d1 * d2) * Math.sin(alpha);
    }
}
