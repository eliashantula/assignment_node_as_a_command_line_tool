'use strict';
/*Capture command line arguments in array through argv.

Create a flag to test if function has run yet.

We will iterate through the values to determine whether the value is a string or integer.

Push string values into string array, push number values into number array.

unshift first value in string array and compare/match to four string/math function values.

Once it matches, unshift first two numbers in number array and return value of math function performed on the numbers.

Set flag to show calc has been run.

Set previous result as new value a.

Unshift next string from string array and compare to math strings.

Unshift next number from number array and return value of math function perfomed on the numbers.

Repeat.

If string === -v || --verson : return version string.

if string === -h || --help : return directions.*/


process.stdin.resume();
process.stdin.setEncoding('utf8');
let calcnums = process.argv.slice(2);
let calcStart = () => {

if (calcnums == "-v" || calcnums == "-version") {
  console.log("Version 1.0.0")

  process.exit()
} else if (calcnums == "-h" || calcnums == "-help"){
  console.log("enter either add, sub, mult, div plus the number(s) that you would like to calculate")
  process.exit()
} else {

}


}


let result = 0;


let calc = () => {
    
    let str = calcnums.shift();
    let a = parseInt(calcnums.shift());
    let b = parseInt(calcnums.shift());
    calculate(str,a,b)

  


  process.stdout.setEncoding('utf8');
  process.stdout.on('data', result => console.log(result));
};


function calculate(str,a,b) {
switch (str) {
    case 'add':
      result = a + b;
      
    
      break;
    case 'sub':
      result = a - b;
      counter += 1;
      break;
    case 'div':
      result = a / b;
      counter += 1;
      break;
    case 'mult':
      result = a * b;
      counter += 1;
    default:
      console.log(str, 'Invalid math input');
    }
    if (calcnums.length > 0 ) {
      nextone()
    } else { 
      console.log(result)}
  }

  function nextone() {
  let str = calcnums.shift();
  let b = parseInt(calcnums.shift())
  switch (str) {
    case 'add':
      result += b;
      break;
    case 'sub':
      result -= b;
      break;
    case 'div':
      result /= b;
      break;
    case 'mult':
      result *= b;
    default:
      console.log('Invalid math input');
  }
  if (calcnums.length > 0) {
    nextone()
  } else {
    console.log(result)
  }
}

calcStart();
