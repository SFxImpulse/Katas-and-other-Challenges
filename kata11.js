const sphereVolume = function (radius) {
  return V = (4 / 3) * Math.PI * (radius * radius * radius);
};

const coneVolume = function (radius, height) {
  return V = (1 / 3) * Math.PI * (radius * radius) * height;
};

const prismVolume = function (height, width, depth) {
  return V = height * width * depth;
};

const totalVolume = function (solids) {

  let total = 0;

  for (const solid of solids) {
    if (solid.type === 'sphere') {
      total += sphereVolume(solid.radius);
    } else if (solid.type === 'cone') {
      total += coneVolume(solid.radius, solid.height);
    } else if (solid.type === 'prism') {
      total += prismVolume(solid.height, solid.length, solid.length);
    }
  }

  return total;

};