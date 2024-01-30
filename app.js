/*******************************************************************************
 *  Code für die Navigationsbar
 *******************************************************************************/
let menu = document.querySelector("#mobile-menu");
let menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

/*******************************************************************************
 *  Code für den Parallax-Effekt
 *******************************************************************************/
//let parallaxBackgrounds = document.querySelectorAll(".parallax__background");
let parallaxSections = document.querySelectorAll(".parallax");
let fisch1 = document.getElementById("fisch1");
let fisch2 = document.getElementById("fisch2");
let fisch3 = document.getElementById("fisch3");
let fisch4 = document.getElementById("fisch4");
let blasen1 = document.getElementById("blasen1");
let blasen2 = document.getElementById("blasen2");
let koralle1 = document.getElementById("koralle1");

let scaleFactor = 1;

window.addEventListener("scroll", () => {
  let exampleNumber = getExampleNumber();
  let offset = window.scrollY;
  let windowHeight = window.innerHeight * scaleFactor;
  let offsetSection = offset - exampleNumber * windowHeight;
  let offsetFisch = offset - exampleNumber * 2 * windowHeight;

  for (let index = 0; index < parallaxSections.length; index++) {
    if (index >= exampleNumber) {
      const element = parallaxSections[index];
      element.style.transform = "translateY(" + offsetSection + "px)";
    }
  }

  switch (exampleNumber) {
    case 0:
      fisch1.style.transform = "translateX(" + offsetFisch + "px)";
      break;

    case 1:
      fisch2.style.transform = "translateY(" + offsetFisch + "px)";
      break;

    case 2:
      fisch3.style.transform = "translateX(" + offsetFisch + "px)";
      
      let offsetBlasen1 = (offsetFisch - 100) * 0.2;
      let offsetBlasen2 = (offsetFisch - 300) * 0.2;
      if (offsetBlasen1 > 0) {
        blasen1.style.display = "inline";
        blasen1.style.transform = "translateY(" + (-1 * offsetBlasen1) + "px)";
      } else {
        blasen1.style.display = 'none';
      }
      if (offsetBlasen2 > 0) {
        blasen2.style.display = "inline";
        blasen2.style.transform = "translateY(" + (-1 * offsetBlasen2) + "px)";
      } else {
        blasen2.style.display = 'none';
      }
      break;

    case 3:
      if (offsetFisch < 250) {
        fisch4.style.transform = "translateX(" + offsetFisch + "px)";
      } else {
        koralle1.style.transform = "translateZ(" + offsetFisch + "px)";
      }
      break;

    default:
      break;
  }
});

/*******************************************************************************
 *  Funktion um zu ermitteln, welches Beispiel ausgeführt werden soll
 *******************************************************************************/
function getExampleNumber() {
  let scrollHeight = window.scrollY;
  let windowHeight = window.innerHeight * scaleFactor;
  let exampleNumber;
  if (scrollHeight < 1 * windowHeight) {
    exampleNumber = 0;
  } else if (scrollHeight < 2 * windowHeight) {
    exampleNumber = 10; // 0.5;
  } else if (scrollHeight < 3 * windowHeight) {
    exampleNumber = 1;
  } else if (scrollHeight < 4 * windowHeight) {
    exampleNumber = 10; // 1.5;
  } else if (scrollHeight < 5 * windowHeight) {
    exampleNumber = 2;
  } else if (scrollHeight < 6 * windowHeight) {
    exampleNumber = 10; // 2.5;
  } else if (scrollHeight < 7 * windowHeight) {
    exampleNumber = 3;
  } else {
    exampleNumber = 10;
  }

  return exampleNumber;
}

/*******************************************************************************
 * Funktion um die Code-Snippets der Beispieltabelle anzuzeigen
 *******************************************************************************/
function openExampleTab(exampleName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(exampleName).style.display = "block";
}
