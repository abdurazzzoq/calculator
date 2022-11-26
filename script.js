let elInput = document.querySelector("#number");
let elAc = document.querySelector(".ac");

let numBtn0 = document.querySelector("#b0");
let numBtn1 = document.querySelector("#b1");
let numBtn2 = document.querySelector("#b2");
let numBtn3 = document.querySelector("#b3");
let numBtn4 = document.querySelector("#b4");
let numBtn5 = document.querySelector("#b5");
let numBtn6 = document.querySelector("#b6");
let numBtn7 = document.querySelector("#b7");
let numBtn8 = document.querySelector("#b8");
let numBtn9 = document.querySelector("#b9");

let mathSign0 = document.querySelector("#multiply");
let mathSign1 = document.querySelector("#division");
let mathSign2 = document.querySelector("#dot");
let mathSign3 = document.querySelector("#minus");
let mathSign4 = document.querySelector("#equal");
let mathSign5 = document.querySelector("#plus");

mathSign0.addEventListener("click", function () {
  elInput.value = mathSign1.value;
  console.log(mathSign1.value);
});

mathSign1.addEventListener("click", function (e) {
  elInput.value = mathSign1.value;
});

mathSign2.addEventListener("click", function () {
  elInput.value += ".0";
});
mathSign3.addEventListener("click", function () {
  elInput.value = mathSign3.value;
});
mathSign4.addEventListener("click", function () {
  elInput.value = mathSign4.value;
});
mathSign5.addEventListener("click", function () {
  elInput.value = mathSign5.value;
});

numBtn0.addEventListener("click", function () {
  elInput.value += numBtn0.value;
});

numBtn1.addEventListener("click", function () {
  elInput.value += numBtn1.value;
});
numBtn2.addEventListener("click", function () {
  elInput.value += numBtn2.value;
});
numBtn3.addEventListener("click", function () {
  elInput.value += numBtn3.value;
});
numBtn4.addEventListener("click", function () {
  elInput.value += numBtn4.value;
});
numBtn5.addEventListener("click", function () {
  elInput.value += numBtn5.value;
});
numBtn6.addEventListener("click", function () {
  elInput.value += numBtn6.value;
});
numBtn7.addEventListener("click", function () {
  elInput.value += numBtn7.value;
});
numBtn8.addEventListener("click", function () {
  elInput.value += numBtn8.value;
});
numBtn9.addEventListener("click", function () {
  elInput.value += numBtn9.value;
});

elAc.addEventListener("click", function () {
  elInput.value = elAc.value;
});
