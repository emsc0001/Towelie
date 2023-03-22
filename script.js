"use strict";

// window.addEventListener("load", start);

const towelie = {
  name: "Towelie",
  nickname: "The Towel, McTowelie, Towelyey",
  image: "d151b319a305175b5ddca61e2833e355.jpg",
  occupation: "drug addict, relationship",
  age: 17,
  voiceBy: "Vernon Chatman",
  gender: "male",
  religion: "Atheist",
  catchPhrase: "Dont forget to bring the towell, You wanna get high",
  hairColor: "Blue",
  schoolgrade: "undefined",
  episode: "S05E08, S10E14, S14E15",
  apperances: 3,
  firstAppearence: "S05E08",
};

const list = document.querySelector("#characters");

function addCharacter(characters) {
  const html = /*html*/ `
    <li>
    <p><strong>Name:</strong> ${characters.name}</p>
    <img src="${characters.image}" alt = "" style="width: 10%" image>
    <p><strong>Nickname:</strong> ${characters.nickname}</p> 
    <p><strong>Occupation:</strong> ${characters.occupation}</p> 
    <p><strong>Age:</strong> ${characters.age}</p> 
    <p><strong>VoiceBy:</strong> ${characters.voiceBy}</p> 
    <p><strong>Gender:</strong> ${characters.gender}</p> 
    <p><strong>Religion:</strong> ${characters.religion}</p> 
    <p><strong>CatchPhrase:</strong> ${characters.catchPhrase}</p> 
    <p><strong>HairColor:</strong> ${characters.hairColor}</p> 
    <p><strong>Schoolgrade:</strong> ${characters.schoolgrade}</p> 
    <p><strong>Episode:</strong> ${characters.episode}</p> 
    <p><strong>Apperances:</strong> ${characters.apperances}</p> 
    <p><strong>FirstAppearence:</strong> ${characters.firstAppearence}</p> 
    </li>`;

  list.insertAdjacentHTML("beforeend", html);
}

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
