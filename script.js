"use strict";

window.addEventListener("load", start);

async function start() {
  const characters = await getCharacter("data/allCharacters.json")
  characters.forEach(showCharacter);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}


function showCharacter(character) {
  const HTML =
    /*html*/
    `
    <article class="grid-item">
    <img src="${character.image}">
    <h1><span>${character.name}</span></h1>
    <p><strong>Alias: </strong><span>${character.nickname}</span></span></p>
    </article>`;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", HTML);
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);


  function characterClicked() {
    document.querySelector("#dialog-image").src = character.image;
    document.querySelector("#dialog-name").textContent = character.name;
    document.querySelector("#dialog-nickname").textContent = character.nickname;
    document.querySelector("#dialog-occupation").textContent = character.occupation;
    document.querySelector("#dialog-age").textContent = character.age;
    document.querySelector("#dialog-voicedBy").textContent = character.voicedBy;
    document.querySelector("#dialog-gender").textContent = character.gender;
    document.querySelector("#dialog-religion").textContent = character.religion;
    document.querySelector("#dialog-hairColor").textContent = character.hairColor;
    document.querySelector("#dialog-catchPhrase").textContent = character.catchPhrase;
    document.querySelector("#dialog-schoolGrade").textContent = character.schoolGrade;
    document.querySelector("#dialog-episodes").textContent = character.episodes;
    document.querySelector("#dialog-appearances").textContent = character.appearances;
    document.querySelector("#dialog-firstAppearance").textContent = character.firstAppearance;
    document.querySelector("#dialog").showModal();
  }
}



function showDialog(character) {}

function closeDialog() {}

// function showAllCharacters(character) {
//   showCharacter(character);
// }


// const towelie = await getCharacter("Data/towelie.json");
  // const jack = await getCharacter("https://raw.githubusercontent.com/YawHB/South_Park_Project/main/data/jack.json")
  // const TolkienBlack = await getCharacter("https://raw.githubusercontent.com/Abdiox/South-park1/main/Data/southPark.json")
  // const BarackObama = await getCharacter("https://raw.githubusercontent.com/AliHMohammad/Data-Ali/main/obamaChar.json")
  // const Butters = await getCharacter("https://raw.githubusercontent.com/Asbjoernemil/data-assignment/main/data/characters.json")
  // const heather = await getCharacter("https://raw.githubusercontent.com/Benjamin-Harris1/Data-app/main/data/heather.json");
  // const Jimmy = await getCharacter("https://raw.githubusercontent.com/Forkeh/South-Park-App/main/data/jimmy.json")
  // const Eric = await getCharacter("https://raw.githubusercontent.com/Bindholt/Data-Projekt/main/data/cartman.json")
  // const Tuong = await getCharacter("https://raw.githubusercontent.com/TheDanishMexican/object-south-park/main/data/app.json")
  // const Jerome = await getCharacter("https://raw.githubusercontent.com/emilvn/data-fetch-assignment/main/data/southpark.json")
  // const Kyle = await getCharacter("https://raw.githubusercontent.com/fili0727/Data-opgave/main/kyle.json")

  // showCharacter(towelie);
  // showCharacter(Kyle);
  // showCharacter(Butters);
  // showCharacter(TolkienBlack);
  // showCharacter(Tuong);
  // showCharacter(Jerome);
  // showCharacter(jack);
  // showCharacter(BarackObama);
  // showCharacter(Jimmy);
  // showCharacter(Eric);
  // showCharacter(heather);