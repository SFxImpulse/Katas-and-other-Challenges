const camel = function (input) {

  // Converts a regular string into Camel Case (camelCase).

  let string = '';
  let stringArr = input.split(' ')

  for (let i = 0; i < stringArr.length; i++) { 
    if (i !== 0) {
      string += stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
    } else {
      string += stringArr[i].toLowerCase();
    }
  }

  return string;

};

const pascal = function (input) {
  
  // Converts a regular string into Pascal Case (PascalCase).

  let string = '';
  let stringArr = input.split(' ')

  for (let j = 0; j < stringArr.length; j++) {
    if (j !== -1) {
      string += stringArr[j].charAt(0).toUpperCase() + stringArr[j].slice(1);
    } else {
      string += stringArr[j].toLowerCase();
    }
  }

  return string;

};

const snake = function (input) {

  // Converts a regular string into Snake Case (snake_case).

  let string = '';
  let snakes = '_'

  for (let k = 0; k < input.length; k++) {
    if (input[k] === ' ') {
      string += snakes;
    } else {
      string += input[k];
    }
  }

  return string;

};

const kebab = function (input) {

  // Converts a regular string into Kebab Case (kebab-case).

  let string = '';
  let kebabs = '-';

  for (let l = 0; l < input.length; l++) {
    if (input[l] === ' ') {
      string += kebabs;
    } else {
      string += input[l];
    }
  }

  return string;

};

const title = function (input) {

  // Converts a regular string into Title Case (Title Case).

  let capitalizeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

  let string = input.split(' ').map(capitalizeString);
  let capitalizedSentence = string.join(' ');

  return capitalizedSentence;

};

const vowel = function (input) {

  // Converts a regular string into a string with capitalized vowels (vOwEl cAsE).

  let string = ''

  for (let m = 0; m < input.length; m++) {

    switch (input[m]) {
      case 'a':
      string += input[m].toUpperCase();
      break;
      case 'e':
      string += input[m].toUpperCase();
      break;
      case 'i':
      string += input[m].toUpperCase();
      break;
      case 'o':
      string += input[m].toUpperCase();
      break;
      case 'u':
      string += input[m].toUpperCase();
      break;
      default:
      string += input[m].toLowerCase();
      break;
    }
  }

  return string;

};

const consonant = function (input) {

  // Converts a regular string into a string with capitalized consonants (CoNSoNaNT CaSe).

  let string = ''

  for (let n = 0; n < input.length; n++) {

    switch (input[n]) {
      case 'b':
      string += input[n].toUpperCase();
      break;
      case 'c':
      string += input[n].toUpperCase();
      break;
      case 'd':
      string += input[n].toUpperCase();
      break;
      case 'f':
      string += input[n].toUpperCase();
      break;
      case 'g':
      string += input[n].toUpperCase();
      break;
      case 'h':
      string += input[n].toUpperCase();
      break;
      case 'j':
      string += input[n].toUpperCase();
      break;
      case 'k':
      string += input[n].toUpperCase();
      break;
      case 'l':
      string += input[n].toUpperCase();
      break;
      case 'm':
      string += input[n].toUpperCase();
      break;
      case 'n':
      string += input[n].toUpperCase();
      break;
      case 'p':
      string += input[n].toUpperCase();
      break;
      case 'q':
      string += input[n].toUpperCase();
      break;
      case 'r':
      string += input[n].toUpperCase();
      break;
      case 's':
      string += input[n].toUpperCase();
      break;
      case 't':
      string += input[n].toUpperCase();
      break;
      case 'v':
      string += input[n].toUpperCase();
      break;
      case 'w':
      string += input[n].toUpperCase();
      break;
      case 'x':
      string += input[n].toUpperCase();
      break;
      case 'y':
      string += input[n].toUpperCase();
      break;
      case 'z':
      string += input[n].toUpperCase();
      break;
      default:
      string += input[n].toLowerCase();
      break;
    }
  }

  return string;

}

const upper = function (input) {

  // Converts a regular string into a string with all of its letters capitalized (UPPER CASE).
  let string = '';

  for (let o = 0; o < input.length; o++) {
    string += input[o].toUpperCase();
  }

  return string;

};

const lower = function (input) {

  // Converts a regular string into a string with all of its letters lowercase (lower case).
  let string = '';

  for (let p = 0; p < input.length; p++) {
    string += input[p].toLowerCase();
  }

  return string;

};

const makeCase = function (input, caseType) {

  let output = '';
  let caseTypes = [];
  
  if (typeof caseType === 'string') {
      caseTypes.push(caseType);
    }

  for (let q = 0; q < caseType.length; q++) {
    if (typeof caseType === 'object') {
      caseTypes.push(caseType[q]);
    }
  }

  for (let cas of caseTypes) {
    switch (cas) {
      case 'camel':
      input = camel(input);
      output += input;
      break;
      case 'pascal':
      input = pascal(input);
      output += input;
      break;
      case 'snake':
      input = snake(input);
      output += input;
      break;
      case 'kebab':
      input = kebab(input);
      output += input;
      break;
      case 'title':
      input = title(input);
      output += input;
      break;
      case 'vowel':
      input = vowel(input);
      output += input;
      break;
      case 'consonant':
      input = consonant(input);
      output += input;
      break;
      case 'upper':
      input = upper(input);
      output += input;
      break;
      case 'lower':
      input = lower(input);
      output += input;
      break;
      default:
      return "That's not gonna work. Sorry...";
    }
  }

  return output = input;

};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));