import {Calculator} from './calculator';
import {Triangle} from './triangle';
import {Circle} from './circle'
import {Rectangle} from './rectangle'

export class GeometricCalculator extends Calculator {

   constructor (triangle, circle, rectangle) {
       super();
       this.triangle = triangle;
       this.circle = circle;
   }
   get NewTriangle() {
       let triangle = new Triangle();
        return triangle;
    }
    get NewCircle () {
        let circle = new Circle();
        return circle;
    }

    get NewRectangle () {
        let rectangle = new Rectangle() ;
        return rectangle;
    }
}

