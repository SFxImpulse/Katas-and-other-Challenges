const urlEncode = function(text) {

  let whiteSpace = ' ';
  let string = '';
  let percent = '%20'

  for (let i = 0; i < text.length; i++) {
    if (text[i] === whiteSpace) {
      string += percent;
    } else {
      string += text[i];
    }
  }
  for (let j = 0; j < text.length; j++) {
    if ((text.charAt(0) || text.length - 1) === ' ') {
      let removeSpace = string.slice(3);
      return removeSpace.slice(0, -3);
    } else {
      return string;
    }
  }
  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// spaces should be removed entirely, and replaced with '%20'.

