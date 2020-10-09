let roll = document.querySelector("#rollbutton");
let showRolls = document.querySelector("#Showallrolls");
let total = document.querySelector("#Total");
let allRolls = document.querySelector("#Allrolls");
let inputBox = document.querySelector("#Diceroller");
let dieRolls = [];

roll.addEventListener("click", function () {
  let numOfDiceRoll = inputBox.value;
  console.log(numOfDiceRoll);
  let index = 0;
  while (index < numOfDiceRoll) {
    Math.floor(Math.random() * 6) + 1;
    dieRolls.push(Math.floor(Math.random() * 6) + 1);
    index = index + 1;
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(dieRolls.reduce(reducer));
  console.log(dieRolls);
  total.innerHTML += dieRolls.reduce(reducer);
});
showRolls.addEventListener("click", function () {
  count = 0;
  while (count < dieRolls.length) {
    const newDiceString = "<li>" + dieRolls[count] + "</li>";
    allRolls.innerHTML += newDiceString;
    count = count + 1;
  }
});
let reset = document.querySelector("#resetbutton");

reset.addEventListener("click", function () {});
