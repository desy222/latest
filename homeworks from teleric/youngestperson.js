/**Write a function that finds the youngest person in a given array of people and prints his/hers full name. 
Each person has properties firstname, lastname and age. */

var people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'Peshkata', lastname: 'Georgiev', age: 42 },
    { firstname: 'Gosho2', lastname: 'Petrov', age: 2 }
    
];

function youngest(people) {
    var currentAge = 0;
    var minAge = people[0].age;
    var youngestPerson = people[0];

    for (var person of people) { /**startsto loop throuth every object in the array 
        and initialize the currentAge to this object property*/
        currentAge = person.age;
        if (currentAge < minAge) { /**if the age of the current person is smaler than any other age prop 
            we initialize the minAge to this value */
            minAge = currentAge;
            youngestPerson = person; /**initialize youngestPerson to the person */
        }
    }
     
    console.log("YoungestPerson is ", youngestPerson.firstname) /**YoungestPerson is  Gosho2 */
} 

youngest(people);