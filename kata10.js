const multiplicationTable = function(maxValue) {

  let num = 0;
  let string = '';

  for (let row = 1; row <= maxValue; row++) {
    for (let col = 1; col <= maxValue; col++) {
      num = row * col;
      string = string + num + ' ';
    }

     string += '\n';

  }

  return string;

};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));