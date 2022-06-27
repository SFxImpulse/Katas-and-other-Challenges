const repeatNumbers = function(data) {

  numArray = []
  let num = '';

  for (let i = 0; i < data.length; i++) {
    for (let repeat = 0; repeat < data[i][1]; repeat++) {
      num += data[i][0];
    }

    numArray.push(num);
    num = '';

  }

  return numArray.join(', ');
  
};

console.log(repeatNumbers([[1, 10], [31, 2], [54321, 5]]));