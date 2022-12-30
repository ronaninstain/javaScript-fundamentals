let a, b, c;

a = 7;

b = 9;

c = a + b;

var x = 5;
var y = 6;
var z = x + y;

const v = ["BMW", "AUDI", "TESLA", "TOYOTA"];

v[3] = "PORSCE";

v.push("ROLLSROYALS");

document.getElementById("Cars").innerHTML = v;

function varfun() {
  document.getElementById("varTst").innerHTML = z;
}

function varfun2() {
  document.getElementById("varTst").innerHTML = "Gone";
}

document.getElementById("checkState").innerHTML = c;
document.getElementById("seeingSystax").innerHTML = "Bekhama" + " " + "Dev";

function myFunction() {
  document.getElementById("Para1").innerHTML = "Hi Browers";
  document.getElementById("Para2").innerHTML = "the Person whos's writing js";
}

function myFunction2() {
  document.getElementById("Para1").innerHTML = "";
  document.getElementById("Para2").innerHTML = "";
}

if (true) {
  let P = 12;
  console.log(P);
}

// console.log(P);

let g = 5;
let h = "5" + 10;
let k = "Hello" + 5;

console.log(typeof g);
console.log(typeof h);
console.log(typeof k);

let myObject = { x: 4, y: 7, z: 12 };

console.log(typeof myObject);

console.log("His name is Rased");

function work(name, time) {
  console.log(name + " has been on duty from " + time);
}

work("Rased", "8:50");
work("Rubel", "9:12");
work("Mursed", "9:25");

let fMath = sFunction(4, 9);

function sFunction(a, b) {
  return a * b;
}

console.log(fMath);

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

document.getElementById("temp").innerHTML = toCelsius(77);

function tempOn() {
  document.getElementById("temp").style.display = "block";
}

function tempOff() {
  document.getElementById("temp").style.display = "none";
}

const vehicle = {
  name: "Fiat",
  model: 512,
  weight: "850",
  color: "white",
  start: function () {
    console.log("car has started");
  },
  drive: function () {
    this.start();
    console.log("car is being driven.");
  },
};

console.log(vehicle.weight);
console.log(vehicle["model"]);
vehicle.drive();

//let r = "Rahim";
let r = new String("Rahim");

console.log(r);

function getTime() {
  alert("Time will be displayed!");
  document.getElementById("time").innerHTML = Date();
}

let enght = "adqwjkhrwedfhijdhgjkdfhg[]kj";

console.log(enght.length);

const qtring = {
  name: "Bangladesh",
  districs: 64,
  slice: function () {},
  substring: function () {},
};

let xtr = "Apple, Dalim, Papaya";

let dalim = xtr.slice(7, 12);

console.log(dalim);

let reText = "Please visit Microsoft!";

let neText = reText.replace("Microsoft", "W3Schools");

console.log(neText);

let sText = "Hello Java";

console.log(sText.split(","));

let country = "Bangladesh";

let m = 8;
let w = 2;

let sentence = `I love ${country} and it's population is nearly ${m * w} Crore`;

console.log(sentence);

let myNum = 3;
let txt = "";

while (myNum != Infinity) {
  myNum = myNum * myNum;
  txt = txt + myNum + "<br>";
}

document.getElementById("infNum").innerHTML = txt;

const fols = ["Banana", "Orange", "Apple", "Mango"];

fols[4] = "Pineapples";

console.log(fols[fols.length - 1]);

fols.splice(2, 0, "lemon", "Kiwi");

console.log(fols);

const fewWomen = ["Erin", "Karen"];

const fewMen = ["Fred", "Toby", "Andy"];

const allGathered = fewMen.concat(fewWomen);

console.log(allGathered);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

console.log(points);

const randPoints = [22, 13, 4, 53, 8];

randPoints.sort(function (a, b) {
  return 0.5 - Math.random();
});

console.log(randPoints);

const forIterations = [12, 21, 11, 22, 34, 45, 656, 56];

function iterationFunc(value) {
  return value * 2;
}

forIterations.forEach(iterationFunc);

const newIterNum = forIterations.map(iterationFunc);

console.log(newIterNum);

function iterationFilter(value, index, array) {
  return value > 15;
}

const newFilterNum = forIterations.filter(iterationFilter);

console.log(newFilterNum);

function iterReduce(total, value, index, array) {
  console.log(total);
  console.log("----0----");
  return total + value;
}

const newReduceNum = forIterations.reduce(iterReduce, 10);

// Ludu

function getLuduNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getLuduNumbers(1, 6));

// Acending strings

const classStudents = ["Tina", "Mina", "Rika"];

console.log(classStudents.sort());

// Acending roll

const rollsShoive = [50, 62, 45, 12, 18, 30, 29, 26];

console.log(
  rollsShoive.sort(function (c, r) {
    return c - r;
  })
);

// Leap year

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year!`);
  } else {
    console.log(`${year} is not a leap year!`);
  }
}

isLeapYear(2024);

// Vowels count

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(sentence) {
  let count = 0;
  const letters = Array.from(sentence);

  letters.forEach(function (value) {
    if (vowels.includes(value)) {
      count++;
    }
  });

  return count;
}

console.log(
  countVowels("This is to know how many vowels are in these sentence?")
);

// filtering duplicates from arrays

const forDup = [1, 9, 1, 1, 1, 5, 1, 0, 0, 0, 8, 4, 0, 8, 8, 8, 9];

const duplicates = forDup.filter(function (value, index, array) {
  return array.indexOf(value) !== index;
});

console.log(duplicates);

// filtering uniques from arrays

const uniques = forDup.filter(function (value, index, array) {
  return array.indexOf(value) === index;
});

console.log(uniques);

const objectPerson = { fname: "John", lname: "Doe", age: 25 };

let objectTxt = "";
for (let x in objectPerson) {
  objectTxt += objectPerson[x];
}
console.log(objectTxt);

// constructor typeOf

function isArray(myArray) {
  console.log(myArray.constructor.toString().indexOf("Array") > -1);
}

isArray([5, 8, 1, 0]);

function regReplace() {
  let ragTxt = document.getElementById("regTxt").innerHTML;
  document.getElementById("regTxt").innerHTML = ragTxt.replace(
    /github/gi,
    "LinkedIn"
  );
}
