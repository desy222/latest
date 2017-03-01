/**Write a method that returns the index of an element in array that is largest than its neighbours compared 
than the rest of the numbers */
var array = [];/**array generator */
while(array.length < 30){ 
    var randomNumber = Math.ceil((Math.random() - 0.5)*400)
    if(array.indexOf(randomNumber) > -1) continue;
        array[array.length] = randomNumber;
}

function solve (randomNumber) {
console.log('All the random numbers the program compares : ',array);

    let currentLargestNum = 0;    
    var newArray = [];    /**array where we will put the biggest numbers and their distance */
    let distance = 0; /**sum of the distancies between the currentlargest number and its neighbours */
    var theBiggestNum ;


    for(let i=1; i< array.length; i+=1) {
        if(array[i] > array[i-1] && array[i] > array[i+1]){
        currentLargestNum = array[i];  
        distance = Math.abs(currentLargestNum-array[i-1]) + Math.abs(currentLargestNum-array[i+1]); 

        var result = new Object;
        result.dist = distance; /**result.dist and result.num are the new prop of object result */
        result.num = currentLargestNum;
        newArray.push(result); 
                
        }  
                     
    }

    theBiggestNum = newArray[0]; /**Here we say that theBiggestNum is taking the value of newArr index  */

    for (var i = 0; i < newArray.length; i++) {   /**Starts a loop which checks for the largst distance in every object that we have in newArray */
        if (Math.abs(newArray[i].dist) > Math.abs(theBiggestNum.dist)) {
            theBiggestNum = newArray[i];   /**Initialize the maximum distance with the object that contains it */
        }
    }

        
console.log(`This is the array that contains all the objects that we compare`,newArray); 

console.log(`This is the object that contains number bigger than its neighbours and compared to the other largest nums it has the biggest 
difference 
        with its neighbours `, theBiggestNum);
};

solve(randomNumber);
