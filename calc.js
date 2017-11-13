process.stdin.resume();
process.stdin.setEncoding('utf8');
let bob = process.argv[2];
console.log(parseInt(bob));



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

if string === -h || --help : return directions.
