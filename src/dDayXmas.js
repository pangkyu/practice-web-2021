
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const remainXmas = document.querySelector(".js-clock"),
   clockXmas = remainXmas.querySelector("h1");
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date();
  const dDay = xmasDay - today;

  const day = Math.floor(dDay / (1000 * 60 * 60 * 24)); 
  const hours = Math.floor((dDay / (1000 * 60 * 60 )) % 24);
  const mins = Math.floor((dDay / (1000 * 60)) % 60);
  const seconds = Math.floor((dDay / 1000) % 60);
  clockXmas.innerText = `${day < 10 ? `0${day}d` : day}d ${hours < 10 ? `0${hours}` : hours}h ${mins < 10 ? `0${mins}` : mins}m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();