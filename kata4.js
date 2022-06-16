const instructorWithLongestName = function(instructors) {

  let longestName = {name: '', course: ''};

  for (let i = 0; i < instructors.length; i++) {
    if (longestName.name.length < instructors[i].name.length) {
      longestName = instructors[i];
    }
  }
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuelaaaa", course: "iOS"},
  {name: "Donaldino", course: 'Web'},
  {name: "David", course: 'Student'}
]));

// We want to pick out the object with the name property holding the largest string.