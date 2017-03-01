import {Calculator} from './calculator';
import {ArithmeticCalculator} from './arithmetic';
import {GeometricCalculator} from './geometric';
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


export class CalculatorInterface {
    MainFunc() {
        rl.question(`Welcome to my calculator! Choose type of calculator :
            ar - Arithmethics;
            geo - Geometrics;
            `,function(type){
                    switch(type) {
                        case "ar" : {
                        let ArithmethicOperation = new ArithmeticCalculator();
                            rl.question(`number : `, function (result) {
                                function chooseMethod () {
                                    rl.question(`Choose Arithmetic function`,  
                                        function (answer){
                                                switch(answer) {
                                                    case "+" : {
                                                    rl.question('choose second number ', function(num2){
                                                        result = ArithmethicOperation.increment(+result, +num2);
                                                        console.log('result is ', result);
                                                        return chooseMethod ();
                                                    });
                                                    break;
                                                    }
                                                    case "-" : {
                                                    rl.question('number : ', function (num2) {
                                                        result = ArithmethicOperation.decrement(+result,+num2);
                                                        console.log('result is = ', result);
                                                        return chooseMethod ();
                                                    });
                                                    break;
                                                    }
                                                    case "/" : {
                                                    rl.question('number : ', (num2) => {
                                                        result = ArithmethicOperation.divide(+result,+num2);
                                                        console.log('result is = ', result);
                                                        return chooseMethod ();
                                                    });
                                                    break;
                                                    }
                                                    case "*" : {
                                                    rl.question('number : ', (num2) => {
                                                        result = ArithmethicOperation.multiply(+result,+num2);
                                                        console.log('result is = ', result);
                                                        return chooseMethod ();
                                                    });
                                                    break;
                                                    }
                                                    case "sqrt" : {
                                                        result = ArithmethicOperation.square(+result);
                                                        console.log('result is = ', result);
                                                        return chooseMethod ();
                                                        break;
                                                    }
                                                    default : {

                                                    }
                                                    return optionType(answer);
                                                }
                                        });
                                    }
                                    chooseMethod();
                                });
                        }
                        case "geo" : {
                        let GeometricOperation = new GeometricCalculator();
                            function chooseFigure () {
                                rl.question(`Choose geometric figure: 
                                triangle : for triangle 
                                rectangle : for rectangle
                                circle : for circle `, function (answer) {
                                switch (answer) {
                                    case "triangle" : {
                                        rl.question(`Related operations with triangles: 
                                        area : calculate triangle area ;
                                        centroid : calculate triangle area centroid;
                                        perimeter : calculate perimeter ; `, (option) => {
                                            switch(option) {
                                                case "area" : {
                                                    rl.question(`Side A : `, function (result) {
                                                        rl.question(`Side B : `, function (sideB) {
                                                            result = GeometricOperation.NewTriangle.calculateTriangleArea(+result, +sideB);
                                                            console.log(`The area of this triangle is `,result);
                                                            return chooseFigure();
                                                        });
                                                    });
                                                }
                                                case "centroid" : {
                                                     rl.question(`Side A : `, function (result) {
                                                         rl.question(`Side B : `, function (sideB) {
                                                            result = GeometricOperation.NewTriangle.calculateTriangleAreaCentroid(+result, +sideB);
                                                            console.log(`The area of triangle centroid is `,result);
                                                            return chooseFigure();

                                                        });
                                                     });
                                                }
                                                case "perimeter" : {
                                                    rl.question(`Side A : `, function (result) {
                                                         rl.question(`Side B : `, function (sideB) {
                                                             rl.question(`Side B : `, function (sideC) {
                                                                result = GeometricOperation.NewTriangle.calculatePerimeter(+result, +sideB, +sideC);
                                                                console.log(`The perimeter of this triangle is `,result);
                                                                return chooseFigure();

                                                             });
                                                        });
                                                     });
                                                }
                                            }
                                        });
                                        }
                                        case "rectangle" : {
                                         rl.question(`Diameter - d1 = : `, function (result) {
                                            rl.question(`Diameter - d2 =  : `, function (d2) {
                                                rl.question(`The angle between d1 and d2 : `, function (alpha) {
                                                    result = GeometricOperation.NewRectangle.areaOfrandomRectangle(+result, +d2, +alpha);
                                                        console.log(`The area of this rectangle is `,result);
                                                        return chooseFigure();
                                                        });
                                                });
                                            });
                                        }
                                        case "circle" : {
                                        rl.question(` The radius of the circle is : `, function (result) {
                                            result = GeometricOperation.NewCircle.areaOfCircle(+result);
                                            console.log(`The area of this circle is `,result);
                                            return chooseFigure();
                                            });
                                        }
                                    }
                                });
                            }
                            chooseFigure();
                        }
                }
            });
    }
}

let openInterface = new CalculatorInterface();
openInterface.MainFunc();









