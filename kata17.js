const urlDecode = function (text) {

  let decodedUrl = {};
  let urlArr = text.split('&');

  for (let i = 0; i < urlArr.length; i++) {
    urlArr[i] = urlArr[i].split('=');
    for (let j = 0; j < urlArr[i].length; j++) {
      urlArr[i][j] = urlArr[i][j].replace(/%20/g, ' ');
      decodedUrl[urlArr[i][0]] = urlArr[i][j];
    }
  }

  return decodedUrl;
  
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);