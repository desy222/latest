/**A peak is a height that is larger than its direct neighbour. 
 * A valley is s sum of 3 or more heights between two peaks, incuding the peak.
 * Find the sum of the largest valley */

function solve(args) {

    let numbers = args[0].split(' ').map(Number); /**.map(Number) - returns strings into numbers */
    function isPeak(index) { // checks if it is peak
        if ( index === numbers[0] || index == numbers.length - 1) { 
            /**If its the first or the last index - it is peak. 
            It is given in the constraints */
            return true;
        }
        if (numbers[index] > numbers[index - 1] && numbers[index + 1]){ /**This is condition for peak */
            return true;
        }
        return false;
    }

    let peaks = []; 

    numbers.forEach(function(number, ind){ /**If the current index is peak we save it in the peaks array */
        if(isPeak(ind)){
            peaks.push(ind);
        }
    });

    let maxValleySum = 0;

    for(let i = 1; i < peaks.length; i += 1) { /**this loop goes trough the peaks array and search for the distance between two peaks */
        let startIndex = peaks[i - 1];
        let endIndex = peaks[i];
        let valleySum = 0;

        for(let j = startIndex; j<=endIndex; j += 1) {
            valleySum += numbers[j];
        }
        if(maxValleySum < valleySum) {
            maxValleySum = valleySum;
        }
    }
    console.log(maxValleySum);
}

solve (["5 1 7 4 8"]); /**19 */

//solve (["5 1 7 6 5 6 4 2 3 8"]);