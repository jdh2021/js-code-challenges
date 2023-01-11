console.log('JavaScript sourced');

console.log('1/11/23 JavaScript code challenges practice');
/**
From Codewars:
Given an array of integers, return an array where the first element is the count of positives numbers.
The second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(input) {
    let positiveCount = 0;
    let negativeSum = 0;
    let newArray = [];
    if (input === null) {
        return newArray;
    } else if (input.length === 0) {
        return newArray;
    } else {
        for (let i = 0; i < input.length; i += 1) {
            if (input[i] > 0) {
                positiveCount += 1;
            } else if (input[i] <= 0) {
                negativeSum += input[i];
            }
        }
        newArray[0] = positiveCount;
        newArray[1] = negativeSum;
        return newArray;
    }
}

console.log('Count positives, sum negatives for array [2, 4, 6, -1, -2, -3] is:', countPositivesSumNegatives([2, 4, 6, -1, -2, -3]));
console.log('Count positives, sum negatives for array [0, 0, 1, 1, -1, -1.2] is:', countPositivesSumNegatives([0, 0, 1, 1, -1, -1.2]));

/**
From Codewars: 
A function that takes an array of numbers and returns the sum of the numbers. 
The numbers can be negative or non-integer. 
If the array does not contain any numbers, it should return 0.
*/

function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total;
};

console.log('Sum of empty array is:', sum([]));
console.log('Sum of array containing 1, -5, 1.2, 9 is', sum([1, -5, 1.2, 9]));

/**
From Codewars:
A function that calculates body mass index (bmi = weight / height2).
If bmi <= 18.5 return "Underweight", if bmi <= 25.0 return "Normal", if bmi <= 30.0 return "Overweight", if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    let bmi = weight / (height ** 2);
    if (bmi <= 18.5) {
        return "Underweight";
    } else if (bmi <= 25.0) {
        return "Normal";
    } else if (bmi <= 30.0) {
        return "Overweight";
    } else if (bmi > 30) {
        return "Obese";
    }
}

console.log('BMI for a weight of 77kg and height of 1.7m indicates you are:', bmi(77, 1.7));
console.log('BMI for a weight of 54.4kg and height of 1.29m indicates you are', bmi(54.4, 70));

/**
From Codewars:
X team's results are recorded in a collection of strings. Each match is represented by a string in the format "x:y".
E.g., ["3:1", "2:2", "0:1", ...]

Points are awarded for each match:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)

A function that takes in the collection and returns the number of points Team X received. 
*/

function points(games) {
    let x_points = 0;
    for (let i = 0; i < games.length; i += 1) {
        // splits on ':' and returns the array
        let gameScore = games[i].split(':');
        // console.log(gameScore);
        let xScore = gameScore[0];
        let yScore = gameScore[1];
        if (xScore > yScore) {
            x_points += 3;
        } else if (xScore < yScore) {
            x_points += 0;
        } else {
            x_points += 1;
        }
    }
    return x_points;
}
console.log('Points for Team X are:', points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
console.log('Points for Team X are:', points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]));