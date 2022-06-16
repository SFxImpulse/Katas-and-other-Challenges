const numberOfVowels = function(data) {
  
  sum = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      sum++;
    }
  }

  return sum;

};

console.log(numberOfVowels('aeiou'));
console.log(numberOfVowels('David'));
console.log(numberOfVowels('Gorp'));