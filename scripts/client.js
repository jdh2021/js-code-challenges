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

console.log('3/26/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Create a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
 */

 function isTriangle(numA, numB, numC) {
    // length of any two sides must be greater than third side
    if(numA !== undefined && numB !==undefined && numC !== undefined) {
        if(numA + numB > numC) {
            if (numA + numC > numB) {
                if (numB + numC > numA) {
                    // only if all combinations are true, return true
                    return true;
                }
            }
        }
    } return false;
 }

 console.log('Given side lengths of 5, 6, and 11, can a triangle be built?', isTriangle(5, 6, 11));
 console.log('Given side lengths of 5, 4, and 3, can a triangle be built?', isTriangle(5, 4, 3));


 console.log('3/29/23 JavaScript code challenges practice');
 /**
 * From Codewars:
 * Create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements. 
 * The input to the function will be an array of three distinct numbers.
 */

 function indexWedge(numberArray) {
    // sort the original array by value with spread operator to return shallow copy
    const sortedArray = [...numberArray].sort((a, b) => (a-b))
    // sortedArray at index 1 is middle element in array of three numbers
    return numberArray.indexOf(sortedArray[1]);
 }

 console.log('The index of the number whose value lies between the other two in array [5, 8, 6] is', indexWedge([5,8,6]));
 console.log('The index of the number whose value lies between the other two in array [1, 0, 12] is', indexWedge([1,0,12]));

 console.log('4/1/23 JavaScript code challenges practice');

 /**
  * From Codewars:
  * Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet:
  * You need to return the highest scoring word as a string. 
 */

 function wordScore(string) {
    const scoreArray = [];
    const stringArray = string.split(" ");
    // loop over words
    for (let i=0; i<stringArray.length; i+=1) {
        const word = stringArray[i];
        // set word score back to zero once pushd to the scoreArray
        let wordScore = 0;
        // loop over letters
        for(let j=0; j< word.length; j+=1) {
            const letter = word[j]
            const alphabet = 'abcdefghijklmnopqrstuvwxyz';
            // index of letter +1 to get alphabet score
            let letterScore = alphabet.indexOf(letter) + 1;
            wordScore+=letterScore;
        }
        // push score for given word into scoreArray
        scoreArray.push(wordScore)
    }
    // get the max score in the array using reduce and Math.max
    const maxScore = scoreArray.reduce((a,b) => Math.max(a,b));
    // return string with highest value by matching the index of the max score to the index of the word in the array
    return stringArray[scoreArray.indexOf(maxScore)];
 }

 console.log('The word with the highest score from string \'dogs cats ant owl\' is', wordScore('dogs cat ant owl'));
 console.log('The word with the highest score from string \'emu antelope cow ferret\' is', wordScore('emu antelope cow ferret'));

 console.log('4/2/23 JavaScript code challenges practice');

 /**
  * From Codewars:
  * Return the number (count) of vowels in the given string.
  * The input string will only consist of lower case letters and/or spaces.
 */

 function vowelCount(string) {
    const stringArray = string.split("");
    let count = 0;
    for(let i=0; i<stringArray.length; i+=1) {
        switch(stringArray[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                count+=1;
            break;      
        }
    }
    return count;
 }

 console.log('The count of the vowels in word \'zebra\' is', vowelCount('zebra'));
 console.log('The count of the vowels in word \'antelope\' is', vowelCount('antelope'));

 console.log('4/4/23 JavaScript code challenges practice');

/**
  * From Codewars:
  * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
  * If the function is passed a valid PIN, return true, else return false.
 */

function pinValidate(pin) {
    let regexPattern = /^(\d{4}|\d{6})$/;
    return result = regexPattern.test(pin);
}

console.log('Is 432 a 4- or 6-digit pin?', pinValidate(432));
console.log('Is 3444 a 4- or 6-digit pin?', pinValidate(3444));
console.log('Is 98882 a 4- or 6-digit pin?', pinValidate(98882));

console.log('4/8/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Create a function that checks to see if a string has the same amount of 'x's and 'o's. 
 * It must return a boolean and be case insensitive. The string can contain any character.
 */

function checkXo(string) {
    let stringArray=string.toLowerCase().split("");
    console.log(stringArray);
    let oCount = 0;
    let xCount = 0;
    for (let i=0; i<stringArray.length; i+=1) {;
        if (stringArray[i] === 'o') {
            oCount+=1;
        }
        if (stringArray[i] === 'x') {
            xCount+=1;
        }
    }
    return oCount === xCount;
}

console.log('Does string \'xOxxxo\' have the same number of x\'s and o\'s?', checkXo('xOxxxo'));
console.log('Does string \'XXoo\' have the same number of x\'s and o\'s?', checkXo('XXoo'));

console.log('4/9/23 JavaScript code challenges practice');

/**
 * From Codewars: 
 * Given an array and limit value, create a function that checks that all values in the array are below or equal to the limit value. 
 * If they are, return true. If not, return false.
 */

function belowLimit(array, limit) {
    // set belowLimit to default to true
    let belowLimit = true;
    for(let i = 0; i<array.length; i+=1) {
        console.log(array[i]);
        // if any one of the array items if greater than the limit, set belowLimit to false
        if (array[i] > limit) {
            belowLimit=false;
        }
    }
    return belowLimit;
}

console.log('Are all the numbers in array [5, 12.2, 4, -1] below the limit 15?', belowLimit([5, 12.2, 4, -1], 15));
console.log('Are all the numbers in array [-5, 0, -3, -1.2] below the limit -1?', belowLimit([-5, 0, -3, -1.2], -1));

/**
 * From Codewars:
 * Write a function from the following examples:
 * Examples:
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 * 
 * The parameter is a string which includes only letters from a..z and A..Z.
 * 
 */

function convertString(string) {
    // split string into array
    const stringArray = string.split('');
    const letterRepeat = [];
    // duplicate each element in array by index value + 1
    for(let i=0; i<stringArray.length; i+=1) {
        let letter = stringArray[i];
        let newString = letter.repeat(i+1);
        letterRepeat.push(newString)
    }
    // map over each item in array to capitalize first letter
    const capitalizedArray = letterRepeat.map((string) => {
        let capitalizeFirst = string.charAt().toUpperCase();
        let lowerCase = string.slice(1).toLowerCase();
        return capitalizeFirst + lowerCase;
    });
    // join elements of array together with '-' as new string
    let finalString = capitalizedArray.join('-');
    return finalString;
}   

console.log('Convert string \'xyz\' to \'X-Yy-Zzz\'', convertString('xyz'));
console.log('Convert string \'aDea\' to \'A-Dd-Eee-Aaaa\'', convertString('aDea'));

console.log('4/12/23 JavaScript code challenges practice');

/**
* From Codewars:
* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
* If the two numbers are equal return a or b.
*/

function sumIntegers(a, b) {
    let total = 0;
    if (a === b) {
        total = a;
    }
    if (a > b) {
        // start loop at smaller value b, increase by one up to and including larger value a
        for (let i=b; i<=a; i+=1) {
            total+=i;
        }
    }
    if (b > a) {
        // start loop at smaller value a, increase by one up to and including larger value b
        for (let i=a; i<=b; i+=1) {
            total+=i;
        }
    }
    return total;
}

console.log('The sum of the integers between 5 and 2 inclusive is', sumIntegers(5, 2));
console.log('The sum of the integers between -1 and 4 inclusive is', sumIntegers(-1, 4));

console.log('4/15/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Write a function that takes a sequence of numbers as single parameter. 
 * The function must return the sum of the even values of this sequence.
 * Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.
 */

function sumEvenNumbers(numberArray) {
    let total = 0;
    for(let i=0; i<numberArray.length; i+=1) {
        if (numberArray[i] % 1 === 0 && numberArray[i] % 2 === 0) {
            total+=numberArray[i]
        }
    }
    return total;
}

console.log('The sum of the even numbers in [4, 6.0, 7, 2.2] is', sumEvenNumbers([4, 6.0, 7, 2.2]));
console.log('The sum of the even numbers in [3, 5, 8.8, 4] is', sumEvenNumbers([3, 5, 8.8, 4] ));

/**
 * From Codewars:
 * The test fixture:
 * describe("Tests", () => {
 * it("test", () => {
 * var lucky_number = Math.floor(Math.random() * 100 + 1);
 * Test.assertEquals(guess, lucky_number, "Sorry. Unlucky this time.");
 * });
 * });
 * It will compare your guess to a random number generated using:
 * Math.floor(Math.random() * 100 + 1)
 * You can pass by relying on luck or skill but try not to rely on luck.
 * "The power to define the situation is the ultimate power." - Jerry Rubin
 */

// redefine Math.floor as a function that returns 10 and set variable guess to 10
// when lucky_number is set within test, both lucky_number and guess are equal
Math.floor = function() {
    return 10;
}
let guess = 10;


console.log('4/16/23 JavaScript code challenges practice');

/**
 * Create a function that returns the index of the third instance of a letter in a string.
 * If the letter doesn't exist in the string or occurs less than three times, return -1.
 */

function returnThirdIndex(string, letter) {
    let count = 0;
    // set index to -1 by default if there are not 3 instances of letter in string
    let index = -1;
    const stringArray = string.split("");
    for(let i=0; i<stringArray.length; i+=1) {
        if (stringArray[i] === letter && count < 3) {
            count +=1;
        }
        if(stringArray[i] === letter && count === 3) {
            // pull out the index value when encountering the third instance of the letter and then break out of the loop
            index = i;
            break;
        }
    }
    return index;
}

console.log('The index of the third occurence of letter \'a\' in string \'baracudas are ferocious\' is', returnThirdIndex('baracudas are ferocious', 'a'));
console.log('The index of the third occurence of letter \'w\' in string \'werewolves\' is', returnThirdIndex('werewolves', 'w'));

console.log('4/19/23 JavaScript code challenges practice');

/**
*
* From Codewars:
* Create a function returns that true if the first argument (string) passed in ends with the second argument (also a string).
*
*/

function endsWithString (string, endString) {
    // default for letterMatch is true
    let letterMatch = true;
    // looking for matches at end of string. reverse both strings to start comparing at index 0 
    const stringArray = string.split("").reverse()
    const endStringArray = endString.split("").reverse()
    // loop over endStringArray - those are the only characters that need to match
    for (let i = 0; i < endStringArray.length; i+=1) {
        // if characters in endStringArray don't match with characters in stringArray at same index, immediately return false
        if(endStringArray[i] !== stringArray[i]) {
            return letterMatch = false;
        } 
    }
    return letterMatch;
}

console.log('Does string \'meow\' end with \'eow\'?', endsWithString('meow', 'eow'));
console.log('Does string \'otter\' end with \'trr\'?', endsWithString('otter', 'trr'))

console.log('4/22/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * 
 * Create a function to return true if two arguments are anagrements of each other
 * Note: anagrams are case insensitive
 
 */

function anagramCheck(firstInput, secondInput) {
    let isAnagram = true;
    // check stringth length first and return false if not equal
    if (firstInput.length !== secondInput.length) {
        return isAnagram = false;
    }
    // convert characters all to lower case, create array by character and sort
    const firstInputArray = firstInput.toLowerCase().split("").sort()
    const secondInputArray = secondInput.toLowerCase().split("").sort()
    // loop over each element in first array and compare to element in second array at same index
    for (let i=0; i<firstInputArray.length; i+=1) {
        if (firstInputArray[i] !== secondInputArray[i]) {
            return isAnagram = false;
        }
    }
    return isAnagram;
}

console.log('Are \'angered\' and \'Enraged\' anagrams?', anagramCheck('angered', 'Enraged'));
console.log('Are \'apple\' and \'app\' anagrams?', anagramCheck('apple', 'app'));


console.log('4/23/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Take 2 strings s1 and s2 including only letters from a to z. 
 * Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
 */

function sortString(stringOne, stringTwo) {
    // concatenate strings, split into array and sort
    let concatArray = stringOne.concat(stringTwo).toLowerCase().split("").sort();
    // loop over array, compare first index to last index. 
    for(let i=0; i<concatArray.length; i+=1) {
        // if first index is not equal to last index, remove duplicates
        if(concatArray.indexOf(concatArray[i]) !== concatArray.lastIndexOf(concatArray[i])) {
            // splice starting at index, number of items to splice is last index less starting index
            concatArray.splice(i, ((concatArray.lastIndexOf(concatArray[i]))-i));
        } 
    }
    // join elements in array as string and return final string
    return concatArray.join("");
}    

console.log('Alphabetically sort and combine string \'cabb\' and string \'zzxyc\' into one string containing unique lettters:', sortString('cabb', 'zzxyc'));
console.log('Alphabetically sort and combine string \'zoff\' and string \'lrka\' into one string containing unique lettters:', sortString('Zoff', 'lrKa'));

console.log('4/29/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * For a list of integers, create a function to determine whether the sum of its elements is odd or even.
 * Return a string for 'odd' or 'even'
 */

function checkOddEven(numberArray) {
    let sum = 0;
    for (let i=0; i<numberArray.length; i+=1) {
        sum+=numberArray[i];
    }
    if (sum % 2 === 0) {
        return 'even';
    }
    return 'odd';
}    

console.log('Is the sum of [4, 5, 8, 2] odd or even:', checkOddEven([4, 5, 8, 2]));
console.log('Is the sum of [0] odd or even:', checkOddEven([]));

console.log('4/30/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Create a function that finds the next perfecet integral square after passed a perfect square as a parameter.
 * If the parameter passed is not a perfect square, return -1. 
 * 
 */

function nextSquare(number) {
    if (Number.isInteger(Math.sqrt(number))) {
        let nextInteger =  Math.sqrt(number) + 1;
        return nextInteger * nextInteger;
    }
    return -1;
}    

console.log('The next perfect square from 144 is:', nextSquare(144));
console.log('Return -1 when the number 18 is not a perfect square:', nextSquare(18));

console.log('5/6/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Create a function that takes in an integer as an input and returns the closest multiple of 5.
 * 
 */

function multipleFive(integer) {
    if(integer % 5 === 0) {
        return integer;
    } else if (integer > 0) {
        return (Math.trunc(integer/5) * 5 + 5);
    } else {
        return (Math.trunc(integer/5) * 5);
    }
}

console.log('The closest multiple of 5 from integer 5 is', multipleFive(5));
console.log('The closest multiple of 5 from integer 1 is', multipleFive(1));
console.log('The closest multiple of 5 from integer 12 is', multipleFive(12));
console.log('The closest multiple of 5 from integer -23 is', multipleFive(-23));

console.log('5/7/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Create a function that takes in an empty string and checks whether it's an isogram (it has no repeating letters, consecutive or non-consecutiv). 
 * 
 */

function checkIsogram(string) {
    const letterArray = string.toLowerCase().split("");
    for (let i=0; i<letterArray.length; i+=1) {
        // checking for consecutive repeats
        if (letterArray[i] === letterArray[i + 1]) {
            return false;
        }
        // checking for non-consecutive repeats
        if (letterArray.indexOf(letterArray[i]) !== letterArray.lastIndexOf(letterArray[i])) {
            console.log(letterArray.indexOf(i));
            return false;
        }
    }
    return true;
}

console.log('Is \'caRrot\' an isogram?', checkIsogram('carrot'));
console.log('Is \'zebra\' an isogram?', checkIsogram('zebra'));

console.log('5/13/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Write a function that takes in an array that has a single unique number and returns the unique number.
 * 
 */

function findUnique(array) {
    // order items in array
    array.sort();
    // if the first two numbers are equal, the unique number is the last
    if(array[0] === array[1]) {
        return array[array.length-1];
    } else {
        // if the first two numbers are not equal, the unique number is the first
        return array[0];
    }
}

console.log('The unique number in array [ 1, 1, 1, 2, 1, 1 ] is', findUnique([ 1, 1, 1, 2, 1, 1 ]));
console.log('The unique number in array [ 0.25, 8, 8, 8, 8, 8 ] is', findUnique([ 0.25, 8, 8, 8, 8, 8 ]));

console.log('5/14/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Given a string of digits, write a function to replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the string.
 */

function replaceDigit(string) {
    const array = [];
    for (let digit of string) {
        digit >= '5' ? array.push(1) : array.push(0);
    }
    return array.join("");
}

console.log('String \'098216\' converted to \'0\' for any digit below 5 and \'1\' for any digit 5 and above is:', replaceDigit('098216'));
console.log('String \'562201\' converted to \'0\' for any digit below 5 and \'1\' for any digit 5 and above is:', replaceDigit('562201'));

console.log('5/20/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Create a function that takes two integers in the form of a string and outputs the sum as a string.
 * 
 */

function sumStrings(stringOne, stringTwo) {
    let sum = Number(stringOne) + Number(stringTwo);
    return sum.toString();
}

console.log('The sum of \'5\' and \'-1\' is', sumStrings('5', '-1'));
console.log('The sum of \'120\' and \'4.8\' is', sumStrings('120', '4.8'));

console.log('5/21/23 JavaScript code challenges practice');

function countCharacters(string) {
    let object = {};
    const array = string.split("");
    for (let i = 0; i < array.length; i +=1 ) {
        // each character in string will start with count of 1
        let count = 1;
        // nested loop to check each character against all other characters in string for equality
        for(let j = 0; j < array.length; j +=1) {
            //conditional that checks that indexes are not the same so duplicate count is avoided
            if (array[i] === array[j] && (i !== j)) {
                count +=1;
            }
            // setting the key of object as character at index and value as count 
            object[array[i]] = count;
        }
    }
    return object;    
}

console.log('The count of characters in string \'summer\' is', countCharacters('summer'));
console.log('The count of characters in string \'zzzz\' is', countCharacters('zzzz'));
console.log('The count of characters in string \'\'\ is', countCharacters(''));


console.log('5/27/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Create a function that takes two integers (a, b, where a < b).
 * Return an array of all integers between the input parameters, including them.
 * 
 */

function inBetween(a, b) {
    const array = [];
    array.push
    while(a <= b) {
        array.push(a);
        a+=1;
    }
    return array;
}

console.log('An array of integers between 3 and 7 inclusive is', inBetween(3,7));
console.log('An array of integers between -1 and 10 inclusive is', inBetween(-1,10));

console.log('5/28/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Create a function that takes in a string and returns the string with all vowels removed.
 * 
 */

function removeVowels(string) {
    const array = string.split("");
    const newArray = [];
    for(let i=0; i<array.length; i+=1) {
        switch (array[i].toLowerCase()) {
            case 'a': case 'e': case 'i': case 'o': case 'u': 
                newArray.push("")
                break;
            default:
                newArray.push(array[i])
                break;    
        }
    }
    return newArray.join("")
}    

console.log('String \'Hello, it\'s me\' with all the vowels removed is', removeVowels("Hello, it's me!"))
console.log('String \'the lion is ROAMING?\' with all the vowels removed is', removeVowels("the Lion is ROAMING?"))


console.log('6/3/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Create a function that takes in a string and returns the string where each character is repeated once.
 * 
 */

function doubleCharacters(string) {
    let finalString = '';
    for (let i=0; i<string.length; i+=1) {
        finalString+=string[i] + string[i];
    }
    return finalString;
}

console.log('String \'vehicles\' with all the characters doubled is', doubleCharacters('vehicles'));
console.log('String \'zebra\' with all the characters doubled is', doubleCharacters('zebra'));

console.log('6/4/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Write a function which calculates the average of the numbers in a given list.
 */

function findAverage(numberArray) {
    let count=0;
    let sum=0;
    if (numberArray.length > 0) {
        for(let i=0; i<numberArray.length; i+=1) {
            sum+=numberArray[i];
            count+=1;
        }
        return sum/count;
    } else {
        return 0;
    } 
}

console.log('The average of numbers [5, 6, 1, 4] is',  findAverage([5, 6, 1, 4]));
console.log('The avearge of numbers [0, 3, -11] is', findAverage([0, 3, -11]));

console.log('6/24/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Given a string, reverse it and omit all non-alphabetic characters.
 */

function reverseOmit(string) {
    // match returns array from regex pattern, array is reversed and joined again as string 
    return string.match(/[a-zA-Z]/g).reverse().join("");
}

console.log('String \'ab1!cdef\' reversed with non-alphabet characters removed is:', reverseOmit('ab1!cdef'));
console.log('String \'Z*e$bRa\' reversed with non-alphabet characters removed is:', reverseOmit('Z*e$bRa'));

console.log('6/25/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Given a word, return the middle character of the word. If the word's length is odd, return the middle character. 
 * If the word's length is even, return the middle two characters. 
 */

function getMiddleCharacter(word) {
    if (word.length % 2 === 0) {
        return word.charAt((word.length/2)-1).concat(word.charAt((word.length/2)));
    } else {
        return word.charAt((word.length/2));
    }
}

console.log('The middle character in word \'car\' is:', getMiddleCharacter('car'));
console.log('The middle character in word \'alligators\' is:', getMiddleCharacter('alligators'));

console.log('7/1/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Create a function that takes an integer as input and returns the sum of the absolute value of each of the integer's digits.
 */

function sumDigits(integer) {
    let array = integer.toString().split("");
    let sum = 0;
    for(let i = 0; i<array.length; i+=1) {
        if(array[i] != '-') {
            sum+=Number(array[i]);
        }
    }
    return sum;
}

console.log('The sum of the absolute value of the digits in -345 is:', sumDigits(-345));
console.log('The sum of the absolute value of the digits in 101 is:', sumDigits(101));

console.log('7/2/23 JavaScript code challenges practice');

/**
 * Create a function that determines whether a given year is a leap year.
 */

function checkLeapYear(year) {
    // check most specific condition first - divisible by 100 but not by 400
    if((year % 100) === 0 && (year % 400) !== 0) {
        return false;
    }
    if(year % 4 === 0) {
        return true;
    }
    return false;
}

console.log('Is 2020 a leap year?', checkLeapYear(2020));
console.log('Is 1800 a leap year?', checkLeapYear(1800));

console.log('7/7/23 JavaScript code challenges practice');

/** 
* Given an array of arrays, flatten them into a single array.
*/

function flattenArray(array) {
    return flattenedArray = array.reduce(
        // initialValue not set - accumulator is first value in array. callback executes on second value as currentValue
        (accumulator, currentValue) => accumulator.concat(currentValue)
    );
}

console.log('Array [[0, true], [\'dog\', \'cat\'], [9, 8, 3]] flattened into a single array is:', flattenArray([[0, true], ['dog', 'cat'], [9, 8, 3]]));

console.log('7/8/23 JavaScript code challenges practice');

/**
 * Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.
 */

function filterArray(array) {
    return array.filter(string => string.length <= 5);
}

console.log('Array of strings [\'hello\', \'goodbye\', \'dogs\', \'cat\'] returned with values that only include 5 characters or fewer is', filterArray(['hello', 'goodbye', 'dogs', 'cat']));

console.log('7/15/23 JavaScript code challenges practice');

/**
 * Create a function that takes in two objects, completes a shallow merge, and returns the new object.
 */

const objectOne = {
    garage: true,
    car: { 
        color: 'green', 
        year: 2013 
    },
    bicycle: { 
        year: 2019 
    }
}

const objectTwo = {
    garage: false,
    car: { 
        transmission: 'manual', 
        make: 'Kia' 
    }, 
    bicycle: { 
        make: 'Schwinn'
    }
} 

function shallowMerge(objectOne, objectTwo) {
    return {...objectOne, ...objectTwo}
}

console.log('Shallow merging objectOne = {garage: true, car: {color: \'green\', year: 2013}, bicycle: {year: 2019}} with objectTwo = {garage: false, car: {transmission: \'manual\', make: \'Kia\'}, bicycle: {make: \'Schwinn\'}} is', shallowMerge(objectOne, objectTwo))

console.log('7/16/23 JavaScript code challenges practice');

/**
 * Write a function that takes in an array of names and returns the array with the first letter of each name capitalized.
 * 
 */

function capitalize(array) {
    let finalArray = array.map(name => 
        name[0].toUpperCase() + name.substring(1)
    )
    return finalArray;
}

console.log('Array of names [\'mike\', \'jessica\', \'aaron\', \'dana\'] returned with the first letter capitalized is:', capitalize(['mike', 'jessica', 'aaron', 'dana']))

console.log('7/22/23 JavaScript code challenges practice');

/**
 * Write a function that takes in an object and returns an array of key-value pairs.
 * 
 */

const person = {
    name: 'Alex',
    cities: ['London', 'Rome', 'Tampa'],
    age: 41
}

function convertObject(person) {
    return Object.entries(person);
}

console.log('Object { name: \'Alex\', cities: [\'London\', \'Rome\', \'Tampa\'], age: 41 } converted to an array is', convertObject(person));


console.log('7/23/23 JavaScript code challenges practice');

/**
 * From Codewars: 
 * Your task is to write a function which returns the sum of a sequence of integers.
 * The sequence is defined by 3 non-negative values: begin, end, step.
 * If begin value is greater than the end, your function should return 0. 
 * If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below
 */


function sumIntegers(begin, end, step) {
    let sum = 0;
    for (let i=begin; i<=end; i+=step) {
        sum+=i;
    }
    return sum;
}

console.log('The sum of the sequence of integers 5 (begin), 7 (end), 3 (increment)', sumIntegers(5, 7, 3));
console.log('The sum of the sequence of integers 4 (begin), 6 (end), 1 (increment)', sumIntegers(4, 6, 1));

/**
 * From Codewars:
 * Implement a function that returns the minimal and the maximal value of a list (in this order).
 * 
 */

console.log('7/29/23 JavaScript code challenges practice');

function minValMaxVal(numberArray) {
    let minVal = numberArray.reduce((prevVal, currentVal) => 
        Math.min(prevVal, currentVal) 
    );
    let maxVal = numberArray.reduce((prevVal, currentVal) => 
        Math.max(prevVal, currentVal) 
    );
    return [minVal, maxVal];
}

console.log('The minimum and maximum values from array [-1, 8, 1000, 0] are', minValMaxVal([-1, 8, 1000, 0]));
console.log('The minimum and maximum values from array [12, -15.2, 40000, 0.5] are', minValMaxVal([12, -15.2, 40000, 0.5]));


console.log('7/30/23 JavaScript code challenges practice');

/**
 * From Codewars: 
 * Build a function that returns an array of integers from n to 1 where n > 0.
 */

function countDown(numberStart) {
    // length creates a placeholder array with length of numberStart
    // integer, index is map function, sets value of each item in numberArray as index plus 1 (0+1, 1+1, 2+1, etc.)
    // reverse reverses the order of the items in numberArray
    return numberArray = Array.from({length: numberStart}, (integer, index) => integer = index + 1).reverse();
}

console.log('Array of integers counting down from 8 to 1 is', countDown(8));
console.log('Array of integers counting down from 1 to 1 is', countDown(1));


console.log('8/5/23 JavaScript code challenges practice');

/**
 * From Codewars: 
 * Given a string, replace every letter with its position in the alphabet and return as a string.
 * If anything in the text isn't a letter, ignore it and don't return it.
 */


function alphabetPosition(string) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const positionArray = [];
    for(let character of string) {
        for(let letter of alphabet) {
            if(character.toLowerCase() === letter) {
                positionArray.push(alphabet.indexOf(letter)+1);
            }
        }
    }    
    return positionArray.join(' ');
}

console.log('String \'A summer day!\' with each letter returned as its position in the alphabet is:', alphabetPosition('A summer day!'));


console.log('8/6/23 JavaScript code challenges practice');

/**
 * From Codewars: 
 * Sum all the numbers of a given array, except the highest and lowest elements.
 * 
*/

function removeLowHigh(array) {
    let sum = 0;
    if(array) {
        // sort ascending
        array.sort(function(a,b) {
            return a-b;
        });
        // start at index that is one greater than lowest value, end at element that is one less than highest vlaue
        for(let i=1; i<array.length-1; i+=1) {
            sum+=array[i];
        }
    }   
   return sum;
}

console.log('For array [10, 0, 5, 20], the sum of the numbers except the highest and lowest values is', removeLowHigh([10, 0, 5, 20]));
console.log('For array [-3.2, 8.2], the sum of the numbers except the highest and lowest values is', removeLowHigh([-3.2, 8.2]));

console.log('8/12/23 JavaScript code challenges practice')

/**
 * From Codewars: 
 * A pangram is a sentence that contains every single letter of the alphabet at least once. 
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // convert string to lower case array
    const characterArray = string.toLowerCase().split("");
    for (let character of characterArray) {
        if (alphabet.indexOf(character) != -1) {
            // remove letter from alphabet array if index of is not -1
            alphabet.splice(alphabet.indexOf(character), 1);
        }
    }
    // if length of alphabet array is 0, all letters were removed, and sentence is pangram
    return alphabet.length === 0 ? true : false;
}    

  
console.log('Is the sentence \'Sixty zippers were quickly picked from the woven jute bag.\' a pangram?:', isPangram('Sixty zippers were quickly picked from the woven jute bag.'));
console.log('Is the sentence \'How are you today?\' a pangram?:', isPangram('How are you today?'));

console.log('8/13/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Given an array of integers, return a new array with each value doubled.
*/

function mapIntegers(array) {
    return array.map(integer => 
        integer * 2
    );
}

console.log('Array of integers [0, -1, 2] returned with each value doubled is', mapIntegers([0, -1, 2]));
console.log('Array of integers [4, 3, 10] returned with each value doubled is', mapIntegers([4, 3, 10]));

console.log('8/19/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
 * 
*/

function countDistinct(string) {
    let arrayToSearch = string.toLowerCase().split("");
    const matchFound = [];
    for (let i=0; i<arrayToSearch.length; i+=1) {
        for (let j=0; j<arrayToSearch.length; j+=1) {
            // check values are equal, not in same position, and not already added to matchFound array
            if (arrayToSearch[i] === arrayToSearch[j] && i !== j && !matchFound.includes(arrayToSearch[i])) {
                matchFound.push(arrayToSearch[i]);
            }
        } 
    }
    return matchFound.length;
}

console.log('The count of distinct, case-insensitive characters or digits that occur more than once in string \'1amAa1\' is', countDistinct('1amAa1'));
console.log('The count of distinct, case-insensitive characters or digits that occur more than once in string \'bBzz44o\' is', countDistinct('bBzz44o'));

console.log('8/20/23 JavaScript code challenges practice');

/**
* From Codewars:
* Create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
* The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/

function middleIndex(array) {
    // spread operator to copy array without mutating it
    const sortedArray = [...array].sort((a,b) => {
        return a - b;
    });
    return array.indexOf(sortedArray[1]);
}

console.log('The index of the element whose value lies between the other two elements in [5, 0, 3] is', middleIndex([5, 0, 3]));
console.log('The index of the element whose value lies between the other two elements in [6, 8.2, 5.9] is', middleIndex([6, 8.2, 5.9]));


console.log('8/26/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
 * 
*/

function multiplyIntegers(array) {
    return result = array.reduce((accumulator, currentValue) =>
        accumulator * currentValue);
}

console.log('The result of multiplying the values in [5, 2, 3, 11] is', multiplyIntegers([5,2,3,11]));
console.log('The result of multiplying the values in [1, 0, 8, 34] is', multiplyIntegers([1,0,8,34]));

console.log('8/27/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Write a function that takes a negative or positive integer, which represents the number of minutes before (-) or after (+) Sunday midnight, 
 * and returns the current day of the week and the current time in 24hr format ('hh:mm') as a string.
 * 
*/

function calculateDateTime(n) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[0];
    let dayCount = n / 1440;
    let dayCountIndex = Math.abs(Math.trunc(n/1440));
    let hourCount = 0;
    let minuteCount = 0;

    if (dayCount >= 1) {
        day = days[(dayCountIndex % 7)];
    }

    if (dayCount < 0 && n % 1440 !== 0 ) {
        day = days[(7 - (dayCountIndex % 7))-1];
    }

    if (dayCount < 0 && n % 1440 === 0 ) {
        day = days[(7 - (dayCountIndex % 7))];
    }

    // when day is Sunday 
    if (dayCount === 0) {
        let remainingMinuteCount = n;
        if (remainingMinuteCount > 60) {
            hourCount = Math.trunc(remainingMinuteCount / 60);
            if (hourCount < 10) {
                hourCount = '0' + hourCount.toString();
            }
            minuteCount = remainingMinuteCount % 60;
            if (minuteCount < 30) {
                minuteCount = '0' + minuteCount.toString();
            }
        } else {
            hourCount = '0' + hourCount.toString();
            if (remainingMinuteCount < 10) {
                minuteCount = '0' + minuteCount.toString();
            } else {
                minuteCount = remainingMinuteCount.toString();
            }
        }
    }
  
    // when adding time
    if (dayCount > 0) {
        let remainingMinuteCount = n % 1440;
        if (remainingMinuteCount > 60) {
            hourCount = Math.trunc(remainingMinuteCount / 60);
            if (hourCount < 10) {
                hourCount = '0' + hourCount.toString();
            }
            minuteCount = remainingMinuteCount % 60;
            if (minuteCount < 10) {
                minuteCount = '0' + minuteCount.toString();
            }
        } else {
            hourCount = '0' + hourCount.toString();
            if (remainingMinuteCount < 10) {
                minuteCount = '0' + remainingMinuteCount.toString();
            } else {
                minuteCount = remainingMinuteCount;
            }
        }
    }
  
    // when subtracting time
    if (dayCount < 0) {
        let remainingMinuteCount = Math.abs(n % 1440);
        if (remainingMinuteCount === 0 ) {
            hourCount = '00';
            minuteCount = '00';
        }
        if (remainingMinuteCount > 60) {
            hourCount = Math.trunc(remainingMinuteCount / 60);
            if (hourCount > 14) {
                hourCount = 23 - hourCount;
                hourCount = '0' + hourCount.toString();
            } else {
                hourCount = 23 - hourCount;
            }
            minuteCount = remainingMinuteCount % 60;
            if (minuteCount > 50) {
                minuteCount = 60 - minuteCount;
                minuteCount = '0' + minuteCount.toString();
            } else {
                minuteCount = 60 - minuteCount;
            }
        } else if (remainingMinuteCount < 60 && remainingMinuteCount > 0) {
            hourCount = 23 - hourCount.toString();
            if (remainingMinuteCount > 50) {
                minuteCount = 60 - remainingMinuteCount;
                minuteCount = '0' + minuteCount.toString();
            } else {
                minuteCount = 60 - remainingMinuteCount;
            }    
        } 
    }
    let finalTime = hourCount.toString().concat(':', minuteCount.toString());
    return day.concat(' ', finalTime );
}

console.log('4356, which represents the number of minutes after Sunday midnight and returns the current day and time in 24-hour format is', calculateDateTime(4356));
console.log('1447, which represents the number of minutes after Sunday midnight and returns the current day and time in 24-hour format is', calculateDateTime(1447));
console.log('-3, which represents the number of minutes before Sunday midnight and returns the current day and time in 24-hour format is', calculateDateTime(-3));
console.log('-2890, which represents the number of minutes before Sunday midnight and returns the current day and time in 24-hour format is', calculateDateTime(-2890));
console.log('0, which represents the number of minutes after Sunday midnight and returns the current day and time in 24-hour format is', calculateDateTime(0));

console.log('9/2/23 JavaScript code challenges practice');

/**
 * From Codewars:
 * Given two numbers and an arithmetic operator (the name of it, as a string), 
 * write a function that returns the results of the two numbers having that operator used on them.
 * 
*/

function doArithmetic(firstNumber, secondNumber, operator) {
    switch(operator) {
        case 'add':
            return firstNumber + secondNumber;
        case 'subtract':
            return firstNumber - secondNumber;
        case 'multiply':
            return firstNumber * secondNumber;
        case 'divide':
            return firstNumber / secondNumber; 
        default:
            console.log('Error');
    }
}

console.log('Given numbers 0, 5 and operator \'add\', the result is', doArithmetic(0, 5, 'add'));
console.log('Given numbers 7, 1.2 and operator \'subtract\', the result is', doArithmetic(7, 1.2, 'subtract'));
console.log('Given numbers 100, 23 and operator \'divide\', the result is', doArithmetic(100, 23, 'divide'));
console.log('Given numbers -2, -2 and operator \'multiply\', the result is', doArithmetic(-2, -2, 'multiply'));