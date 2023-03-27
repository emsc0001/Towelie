"use strict";

window.addEventListener("load", initApp);

async function initApp() {
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

  const showAllCharacters = await getCharacter("data/towelie.json")
  showAllCharacters.forEach(showCharacter);
}

async function getCharacter(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showAllCharacters(list) {
  showCharacter(person);
}

function showCharacter(person) {
  const HTML =
    /*html*/
    `
    <article class="grid-item">
    <img src="${person.image}">
    <h1><span>${person.name}</span></h1>
    <p><strong>Aka: </strong><span>${person.nickname}</span></span></p>
    </article>
      `;
  document.querySelector("#characters").insertAdjacentHTML("beforeend", HTML);
  document.querySelector("#characters article:last-child").addEventListener("click", characterClicked);

  function characterClicked() {
    document.querySelector("#dialog-image").textContent = person.image;
    document.querySelector("#dialog-name").textContent = person.name;
    document.querySelector("#dialog-nickname").textContent = person.nickname;
    document.querySelector("#dialog-occupation").textContent = person.occupation;
    document.querySelector("#dialog-age").textContent = person.age;
    document.querySelector("#dialog-voicedBy").textContent = person.voicedBy;
    document.querySelector("#dialog-gender").textContent = person.gender;
    document.querySelector("#dialog-religion").textContent = person.religion;
    document.querySelector("#dialog-hairColor").textContent = person.hairColor;
    document.querySelector("#dialog-catchPhrase").textContent = person.catchPhrase;
    document.querySelector("#dialog-schoolGrade").textContent = person.schoolGrade;
    document.querySelector("#dialog-episodes").textContent = person.episodes;
    document.querySelector("#dialog-appearances").textContent = person.appearances;
    document.querySelector("#dialog-firstAppearance").textContent = person.firstAppearance;
    document.querySelector("#dialog").showModal();
  }
}

function showDialog(person) {}

function closeDialog() {}





// function addCharacter(characters) {
//   const html = /*html*/ `
//     <li>
//     <p><strong>Name:</strong> ${characters.name}</p>
//     <img src="${characters.image}" alt = "" style="width: 10%" image>
//     <p><strong>Nickname:</strong> ${characters.nickname}</p> 
//     <p><strong>Occupation:</strong> ${characters.occupation}</p> 
//     <p><strong>Age:</strong> ${characters.age}</p> 
//     <p><strong>VoiceBy:</strong> ${characters.voiceBy}</p> 
//     <p><strong>Gender:</strong> ${characters.gender}</p> 
//     <p><strong>Religion:</strong> ${characters.religion}</p> 
//     <p><strong>CatchPhrase:</strong> ${characters.catchPhrase}</p> 
//     <p><strong>HairColor:</strong> ${characters.hairColor}</p> 
//     <p><strong>Schoolgrade:</strong> ${characters.schoolgrade}</p> 
//     <p><strong>Episode:</strong> ${characters.episode}</p> 
//     <p><strong>Apperances:</strong> ${characters.apperances}</p> 
//     <p><strong>FirstAppearence:</strong> ${characters.firstAppearence}</p> 
//     </li>`;

//   list.insertAdjacentHTML("beforeend", html);
// }

// // function start() {
//   const data = getData();
//   showAllCharacters(data)
// }

// // function getData(){
//   const data = [];
//   return data;
// }

// // function showAllCharacters (list) {
//   showCharacter(character);
// }

// // function showCharacter (character) {
//   const html = ``;
// }

// function showDialog() {}

// function closeDialog () {}
