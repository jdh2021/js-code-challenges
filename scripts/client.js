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


console.log('1/12/23 JavaScript code challenges practice');

/**
From Codewars:
Make a function that can take any non-negative integer as an argument.
Return it with its digits in descending order. 
 */

function descendingDigits(number) {
    let digitArray = number.toString().split('');
    digitArray.sort(function (a, b) {
        return b - a;
    })
    return Number(digitArray.join(''));
}

console.log('Descending digits from input number 355012 are:', descendingDigits(355012));
console.log('Descending digits from input number 90148 are:', descendingDigits(90148));

/**
From Codewars:
Function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.
*/

function reverseWords(string) {
    let stringArray = string.split(' ');
    let reversedArray = [];
    for (let i = 0; i < stringArray.length; i += 1) {
        let reversedWord = stringArray[i].split('').reverse().join('');
        reversedArray.push(reversedWord);
    }
    let fullString = reversedArray.join(' ');
    return fullString;
}

console.log('String with reversed words (including spaces) from \'Fuzzy wuzzy was a bear.\':', reverseWords('Fuzzy wuzzy was a bear.'));

/**
From Edabit
Stanislav Mozolevskiy in JavaScript
Function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
f the input tries to divide by 0, return: "Can't divide by 0!"
*/

function calculator(num1, operator, num2) {
    let answer;
    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                return "Can't divide by 0!";
            } else {
                answer = num1 / num2;
            }
            break;
    }
    return answer;
}

console.log('5 divided by 0 is:', calculator(5, '/', 0));
console.log('10 times 3.5 is:', calculator(10, '*', 3.5));

console.log('1/15/23 JavaScript code challenges practice');

/**
 Given a string of words, return the length of the shortest word.
 */

// using reduce 
function findShortestLength(string) {
    let stringArray = string.split(" ");
    let shortestWord = stringArray.reduce((shortest, current) => {
        return current.length < shortest.length ? current : shortest;
    }, stringArray[0]);
    return shortestWord.length;
}

console.log('Using the reduce method, the length of the shortest word from string \'cat dog horse cow\' is:', findShortestLength("Cat dog horse cow"));

// using for loop
function findShortestWordLength(string) {
    let stringArray = string.split(" ");
    let shortestWordLength = stringArray[0].length;
    for (let i = 0; i < stringArray.length; i += 1) {
        if (stringArray[i].length < shortestWordLength) {
            shortestWordLength = stringArray[i].length;
        }
    }
    return shortestWordLength;
}

console.log('Using a for loop, the length of the shortest word from string \'A quick brown fox\' is:', findShortestWordLength(('A quick brown fox')));


/**
Convert a number to a reversed array of digits.
*/

function reverseNumber(number) {
    const numberArray = number.toString().split('').reverse().map(number => {
        return Number(number);
    })
    return numberArray;
}

console.log('Converting number 313456 to a reversed array of digits is:', reverseNumber(313456));

/**
 Given a string of numbers, return the highest and lowest number as a string with a space between the numbers.
*/

function highestLowest(numbers) {
    let numberArray = numbers.split(" ");
    numberArray.sort((a, b) => {
        // ascending order
        return a - b;
    })
    return `${numberArray[numberArray.length - 1]} ${numberArray[0]}`;
}

console.log('The highest number and lowest number from this string of numbers \'45 0 90 122 3 -1\' is:', highestLowest("45 0 90 122 3 -1"));


console.log('1/16/23 JavaScript code challenges practice');

/**
From Codewars:
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
*/

function binaryToDecimal(binaryArray) {
    let decimal = 0;
    let x;
    let y;
    for (x = binaryArray.length - 1, y = 0; x >= 0, y < binaryArray.length; x -= 1, y += 1) {
        // value at first index of array (ascending) multiplied by two to the power of ending value of array (descending)
        decimal += (binaryArray[y] * (2 ** [x]));
    }
    return decimal;
}

console.log('Array of binary values [1,0,0] to number is:', binaryToDecimal([1, 0, 0]));
console.log('Array of binary values [1,0,0] to number is:', binaryToDecimal([1, 1, 1, 1]));

/**
Write a function that takes in an array of strings and returns true if any string occurs twice, otherwise false.
*/

function findDuplicates(stringArray) {
    // create empty object
    let object = {};
    // for of to loop over array
    for (let string of stringArray) {
        // checks if key already exists at each iteration
        if (object[string]) {
            return true;
        } else {
            // if key doesn't exist, create a key-value pair
            object[string] = "key value added";
        }
    }
    return false;
}

console.log("Checking from array of strings [\"dog\", \"cat\", \"dog\", \"horse\"] whethere there\'s a duplicate:", findDuplicates(["dog", "cat", "dog", "horse"]));
console.log("Checking from array of strings [\"turtle\", \"fox\", \"beaver\", \"mouse\"] whethere there\'s a duplicate:", findDuplicates(["turtle", "fox", "beaver", "mouse"]));

console.log('1/19/23 JavaScript code challenges practice');

/**
Create a function that takes a list of integers and strings and returns a new list with the integers filtered out.
*/

function getStrings(array) {
    let stringArray = [];
    for(let i=0; i<array.length; i+=1) {
        if (typeof array[i] === 'string') {
            stringArray.push(array[i]);
        }
    }
    return stringArray;
}

function filterStrings(array) {
    return array.filter(item => typeof item === 'string');
}

console.log('For loop - Filtering out strings from an array of strings and integers [5, "hello", -3, "welcome", 2, 4] returns:', getStrings([5, "hello", -3, "welcome", 2, 4]));
console.log('Filter method - Filtering out strings from an array of strings and integers [5, "hello", -3, "welcome", 2, 4] returns:', filterStrings([5, "hello", -3, "welcome", 2, 4]));

/**
From Codewars:
Write a function to square every digit of a number and concatenate them. Return an integer.
*/

function squareNumber(input) {
    // convert number to string, split into array, map by element, square element
    const output = input.toString().split("").map( element => {
        return element ** 2;
    } )
    // join elements into string and return number
    return Number(output.join(""));
}

console.log('Squaring each digit in number 45123 and concatenating the digits to produce a new number returns:', squareNumber(45123));
console.log('Squaring each digit in number 127 and concatenating the digits to produce a new number returns:', squareNumber(127));

console.log('1/20/23 JavaScript code challenges practice');

/**
From Codewars:
Get the Middle Character
Return the middle character of a word. If the word's length is odd, return the middle character.
If the word's length is even, return the two middle characters.
 */

function returnMiddle(word) {
    let finalString="";
    if (word.length % 2 === 1 ) {
        finalString=word[(word.length/2)-.5];
    } else if (word.length % 2 === 0) {
        let firstCharacter=word[(word.length/2)-1];
        let secondCharacter=word[word.length/2];
        finalString = firstCharacter.concat("", secondCharacter);
    } else if (word.length === 0) {
        finalString=word[0];
    }
    return finalString;
}

console.log('The middle character from a word with a odd length like apple is:', returnMiddle('apple'));
console.log('The middle two characters from a word with an even length like meow is:', returnMiddle('meow'));

/**
From Edabit - Matt
Create a function that takes an object and returns the keys and values 
as separate arrays. Return the keys sorted alphabetically, 
and their corresponding values in the same order.
*/

function keyValue(object) {
    let keyArray = [];
    let valueArray = [];
    let finalArray =[];
    // for in loop to loop over properites of object
    for (let key in object) {
        keyArray.push(key);
        valueArray.push(object[key]);
    }
    keyArray.sort();
    console.log(keyArray);
    console.log(valueArray);
    finalArray[0] = keyArray;
    finalArray[1] = valueArray;
    return finalArray;
}

console.log('The object is { dog: 10, blueberry: 1, cat: 3} Returning the object keys in an array sorted alphabetically and the object values in an unchanged array returns:',
keyValue({dog: 10, blueberry: 1, cat: 3}));

console.log('1/21/23 JavaScript code challenges practice');

/**
From Codewars:
Find the stray number. You are given an odd-length array of integers, 
in which all of them are the same, except for one single number.
Complete the method which accepts such an array, and returns that single different number. 
*/

function findStrayNumber(array) {
    return array.find(number => 
        array.indexOf(number) === array.lastIndexOf(number));
}

console.log('Finding the odd number out in array [7, 3, 7, 7, 7] returns:', findStrayNumber([7, 3, 7, 7, 7]));
console.log('Finding the odd number out in array [1, 4, 4, 4, 4, 4] returns:', findStrayNumber([1, 4, 4, 4, 4, 4]));

/**
 A function to determine if a word is a palindrome
 */

 function checkPalindrome(word) {
    let palindrome = true;
    for (let i=0, j=word.length-1; i<word.length, j>=0; i+=1, j-=1) {
        if (word[i] !== word[j]) {
            palindrome = false;
        }
    }
    return palindrome;
 }

 console.log('Checking if \'kayak\' is a palindrome:', checkPalindrome('kayak'));
 console.log('Checking if \'piano\' is a palindrome:', checkPalindrome('piano'));
 

console.log('1/23/23 JavaScript code challenges practice');

/** 
A function that takes an array of strings as an argument 
and returns them in order from longest to shortest.
*/

function longToShort(stringArray) {
    const sortedArray = stringArray.sort((a,b) => { 
        return b.length - a.length;
    })
    return sortedArray;
}

console.log('An array of strings [\'cat\', \'buffalo\', \'sheep\'] sorted longest to shortest length returns:', longToShort(['cat', 'buffalo', 'sheep']));

/**
A function that counts the divisors of a positive integer. 
*/

function countDivisors(number) {
    let divisorCount = 0;
    // for loop starting at number itself and decreasing each loop
    for (let i=number; i >0; i-=1) {
        if (number % i === 0) {
            divisorCount+=1;
        }
    }
    return divisorCount;
}

console.log('The number of divisors for 6 is:', countDivisors(6));
console.log('The number of divisors for 7 is:', countDivisors(7));

console.log('1/25/23 JavaScript code challenges practice');


/**
From Codewars:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.
*/

function returnUrl(url) {
    const urlArray = url.split("");
    let index;
    let spliceElements = false;
    console.log(urlArray);
    for(let i = 0; i<urlArray.length; i+=1) {
        if (urlArray[i] === '#') {
            index = urlArray.indexOf(urlArray[i]);
            spliceElements = true;
        }
    }
    if (spliceElements) {
        urlArray.splice(index);
        return urlArray.join("");
    } else {
        return urlArray.join("");
    }
}

console.log('URL \'https://www.ibdog.io/#/home\' with \'#\' and all following characters removed is:', returnUrl("https://ibdog.io/#/home"));
console.log('URL \'https://www.google.com\' with \'#\' and all following characters removed is:', returnUrl("https://www.google.com"));

/**
From Codewars:
Write a function that takes a single string (word) as argument. 
The function must return an ordered list containing the indexes of all capital letters in the string.
*/

function returnCapitalIndices(word) {
    const wordArray = word.split("");
    const capitalLetterArray = [];
    for(let letter of wordArray) {
        if (letter == letter.toUpperCase()) {
                capitalLetterArray.push(wordArray.indexOf(letter));
        }
    }
    return capitalLetterArray;
}

console.log('From word \'HeLlO\', an array with the indices of the capital letters is:', returnCapitalIndices('HeLlO'));
console.log('From word \'mEOw\', an array with the indices of the capital letters is:', returnCapitalIndices('mEOw'));

console.log('1/29/23 JavaScript code challenges practice');

/**
From Codewars:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
*/

function sumTwoLowest(array) {
    array.sort((a,b) => {
        return a-b
    })
    return array[0] + array[1];
}

console.log('The sum of the two lowest positive integers from [ 5, 1000, 100, 2, 1] is:', sumTwoLowest([5, 1000, 100, 2, 1]));
console.log('The sum of the two lowest positive integers from [ 1, 4000, 20, 1] is:', sumTwoLowest([1, 4000, 20, 1]));

/**
Create a function that takes in a number and returns it in expanded form as a string. 
*/

function expandedForm(number) {
    let stringNumber = number.toString();
    const expandedForm = [];
    for (let i=stringNumber.length, x=0; i >=0, x<stringNumber.length; i-=1, x+=1) {
        let expanded = stringNumber[x];
        console.log(expanded);
        let baseTen = 10 ** (i-1);
        let expandedNumber = expanded * baseTen;
        if (expandedNumber !== 0) {
            expandedForm.push(expandedNumber);
        }
    }
    return expandedForm.join(' + ');
}

console.log('The expanded form of 154032 as a string is:', expandedForm(154032));
console.log('The expanded form of 91 as a string is:', expandedForm(91));

console.log('3/19/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
 */

function invert(array) {
    const invertedArray = [];
    for(let i=0; i< array.length; i+=1) {
       array[i] *= -1;
       invertedArray.push(array[i]);
    }
    return invertedArray;
}

console.log('The inverted array of [0, 1, -3, 5, -6] is', invert([0, 1, -3, 5, -6]));
console.log('The inverted array of [-10, -2, 25] is', invert([10, -2, 25]));

/**
 * From Codewars:
 * Create a function that will break up camel casing, using a space between words.
 */

function splitCamel(string) {
    return string.replace(/([A-Z])/g, " $1").trim();
}

console.log('Splitting camel case string \'helloWorld\' returns', splitCamel('helloWorld'));
console.log('A string that isn\'t camel case like \'helloworld\' returns', splitCamel('helloworld'));

console.log('3/20/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Write a function that takes in a positive parameter num and returns its multiplicative persistence, the number of times you must multiply the digits in num until you reach a single digit.
 */

function timesToSingleDigit(number) {
    // if number is 1 digit, 0 times to multiply to reach a single digit
    if (number.toString().length === 1) {
        return 0;
    } else {
        let count = 0;
        // while the digits in the number are greater than one
        while (number.toString().length > 1) {
            // split the digits into an array and multiply accumulator by current value, and set as new number
            number = number.toString().split("").reduce((accumulator, currentValue) =>
                accumulator * currentValue);
            count+=1;
        }
        return count;
    }
}

console.log('The number of times it takes to multiply the digits in number 535 to until you reach a single digit is', 
timesToSingleDigit(535));
console.log('The number of times it takes to multiply the digits in number 45 to until you reach a single digit is', 
timesToSingleDigit(45));


console.log('3/25/23 JavaScript code challenges practice');
/**
 * From Codewars:
 * Write a function that takes a list of strings and returns each line prepended by the correct number.
Numbering starts at 1, and the format is n: string. 
 */

function orderStrings(stringArray) {
    let numberedArray = [];
    for (let i=0; i<stringArray.length; i+=1) {
        console.log(i);
        numberedArray.push(`${i+1}: ${stringArray[i]}`);
    }
    return numberedArray;
}

console.log('The array of strings ["apple", "bear", "cat"] returned in the format number: string is', orderStrings(["apple", "bear", "cat"]));

/**
 * From Codewars:
 * Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
 */

function buildPyramid(number) {
    const pyramid = [];
    let spaces = 0;
    while (number > 0) {
        let firstSpace = (" ").repeat(spaces);
        let asterisk = ("*").repeat(number+(number-1));
        let secondSpace = (" ").repeat(spaces);
        let floorString = firstSpace + asterisk + secondSpace;
        pyramid.push(floorString);
        number--;
        spaces++;
    }
    pyramid.reverse();
    return pyramid;
}

console.log('Building a pyramid of 5 floors with \'*\' returns', buildPyramid(5));
console.log('Building a pyramid of 3 floors with \'*\' returns', buildPyramid(3));

