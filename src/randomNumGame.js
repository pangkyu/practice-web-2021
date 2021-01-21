// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const rangeText = document.querySelector(".rangeText");
const rangeBar = document.querySelector("#rangeBar");
const inputNum = document.querySelector("#inputNum");
const playButton = document.querySelector(".playButton");
const compare = document.querySelector(".compare");
const result = document.querySelector(".result");




function handleClick(event) {
  event.preventDefault();
  const rangeValue = rangeBar.value;
  const currentValue = parseInt(inputNum.value);
  const randomValue = Math.floor(Math.random() * rangeValue);

  compare.innerText = `You choose : ${currentValue}, machine choose : ${randomValue}`;
  if (currentValue === randomValue) {
    result.innerText = "You Win";
  } else {
    result.innerText = "You Lose";
  }
}

function handleChange(event) {
    const slider = event.target.value;
    rangeText.innerText = `Generate a number between 0 and ${slider}`;
}

function init() {
  rangeBar.addEventListener("change", handleChange);
  playButton.addEventListener("click", handleClick);
}
init();
