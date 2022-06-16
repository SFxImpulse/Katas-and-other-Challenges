const sumLargestNumbers = function(data) {

  let highest = 0;
  let secondHighest = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > highest) {
      highest = data[i];
    }
  }

  for (let j = 0; j < data.length; j++) {
    if (data[j] > secondHighest && data[j] < highest) {
      secondHighest = data[j];
    }
  }

  return highest + secondHighest;

};
console.log(sumLargestNumbers([1, 10]));