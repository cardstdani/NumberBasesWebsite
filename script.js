var inputBin;
var inputDec;
var inputHex;

window.onload = function () {
  inputBin = document.getElementById('inputBin');
  inputDec = document.getElementById('inputDec');
  inputHex = document.getElementById('inputHex');


  inputBin.onchange = function (e) {
    inputDec.value = binToDec(inputBin.value.toString());
    inputHex.value = decToHex(inputDec.value);
  };

  inputDec.onchange = function (e) {
    inputBin.value = decToBin(inputDec.value);
    inputHex.value = decToHex(inputDec.value);
  };

  inputHex.onchange = function (e) {
    inputDec.value = hexToDec(inputHex.value.toString());
    inputBin.value = decToBin(inputDec.value);
  };
};

function binToDec(n) {
  var r = 0;

  for(var i = 0; i < n.length; i++) {
    if(n[n.length - 1 - i] == '1') {
      r += Math.pow(2, i);
    }
  }

  return r;
}

function decToBin(n) {
  var r = "";

  while(n >= 1) {
    r = (n%2).toString() + r;
    n = Math.floor(n/2);
  }

  return r;
}

function decToHex(n) {
  var r = "";
  var map = {0 : 0, 1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9, 10 : "A", 11 : "B", 12 : "C", 13 : "D", 14 : "E", 15 : "F"};
  
  while(n >= 1) {
    r = (map[n%16]).toString() + r;
    n = Math.floor(n/16);
  }

  return r;
}

function hexToDec(n) {
  var r = 0;
  var map = {0 : 0, 1 : 1, 2 : 2, 3 : 3, 4 : 4, 5 : 5, 6 : 6, 7 : 7, 8 : 8, 9 : 9, 10 : "A", 11 : "B", 12 : "C", 13 : "D", 14 : "E", 15 : "F"};
  
  for(var i = 0; i < n.length; i++) {
    var c = n[n.length - 1 - i];
    console.log(c); 

    if(c.toLowerCase() != c.toUpperCase()) {
      r += parseInt(getKeyByValue(map, c)) * Math.pow(16, i);
      console.log(Math.pow(16, i));
    } else {
      r += parseInt(getKeyByValue(map, parseInt(c))) * Math.pow(16, i);
      console.log(Math.pow(16, i)); 
    }
  }

  return r;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}