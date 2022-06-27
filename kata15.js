const organizeInstructors = function(instructors) {

  let courses = {};

  for (let instructor of instructors) {
    if (!courses[instructor.course]) {
      courses[instructor.course] = [];
    }
    courses[instructor.course].push(instructor.name);
  }
  return courses;
};

console.log(organizeInstructors([
  {name: 'Samuel', course: 'iOS'},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));