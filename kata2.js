const conditionalSum = function(values, condition) {

  let even = [];
  let odd = [];

  for (let i = 0; i  < values.length; i++) {
    if (values[i] % 2 === 0) {
      even.push(values[i]);
    } else {
      odd.push(values[i]);
    }
  }

  let sum = 0
  if (condition === 'even') {
    for (let j = 0; j < even.length; j++) {
      sum = sum + even[j];

    }

    return sum;

  } else if (condition === 'odd') {
    for (let k = 0; k < odd.length; k++) {
      sum += odd[k];

    }

    return sum;

  }
}

console.log(conditionalSum([4, 6, 2, 8, 1], 'even'));