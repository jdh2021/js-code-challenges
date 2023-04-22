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