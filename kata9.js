const camelCase = function(input) {
  
  let string = '';
  let stringArr = input.split(" ");
  
  for (let i = 0; i < stringArr.length; i++) { 
    if (i !== 0) {
      string += stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
    } else {
      string += stringArr[i].toLowerCase()
    }
  }
  return string;
};

console.log(camelCase("this is a string"));