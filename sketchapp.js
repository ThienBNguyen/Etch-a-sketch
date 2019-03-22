//create element for html
let mainDiv = document.createElement("div");
let divLeft = document.createElement("div");
let paraSize = document.createElement("p");
let divSmall = document.createElement("div");
let divMedium = document.createElement("div");
let divDefault = document.createElement("div");
let divLarge = document.createElement("div");
let paraEtch = document.createElement("p");
let divColor = document.createElement("div");
let divFallback = document.createElement("div");
let divShader = document.createElement("div");
let divTrail = document.createElement("div");
let divClear = document.createElement("div");
let divRight = document.createElement("div");
let etchPanel = document.createElement("div");
let paraInfo = document.createElement("p");
let divWrapper = document.createElement("div");
let divGrid = document.createElement("div");
let nobs = document.createElement("div");
let rightNob = document.createElement("div");
let leftNob = document.createElement("div");

//append div into anchor element
let small = document.createElement("a");
let smallText = document.createTextNode("Small");
small.appendChild(smallText);
small.href = "#";
divSmall.appendChild(small);

let medium = document.createElement("a");
let mediumText = document.createTextNode("Medium");
medium.appendChild(mediumText);
medium.href = "#";
divMedium.appendChild(medium);

let large = document.createElement("a");
let largeText = document.createTextNode("Large");
large.appendChild(largeText);
large.href = "#";
divLarge.appendChild(large);

let defaultSize = document.createElement("a");
let defaultSizeText = document.createTextNode("Default");
defaultSize.appendChild(defaultSizeText);
defaultSize.href = "#";
divDefault.appendChild(defaultSize);

let color = document.createElement("a");
let colorText = document.createTextNode("color");
color.appendChild(colorText);
color.href = "#";
divColor.appendChild(color);

let fallBack = document.createElement("a");
let fallBackText = document.createTextNode("Default");
fallBack.appendChild(fallBackText);
fallBack.href = "#";
divFallback.appendChild(fallBack);

let shader = document.createElement("a");
let shaderText = document.createTextNode("Shader");
shader.appendChild(shaderText);
shader.href = "#";
divShader.appendChild(shader);

let trail = document.createElement("a");
let trailText = document.createTextNode("Trail");
trail.appendChild(trailText);
trail.href = "#";
divTrail.appendChild(trail);

let clear = document.createElement("a");
let clearText = document.createTextNode("Clear");
clear.appendChild(clearText);
clear.href = "#";
divClear.appendChild(clear);
// create text to para
let paraText = document.createTextNode("Pixel Size");
let paraOptions = document.createTextNode("Etch Options");

let paraGameInfo = document.createTextNode("Etch-A-Sketch -copy");

//apprend text into para

paraSize.appendChild(paraText);
paraEtch.appendChild(paraOptions);
paraInfo.appendChild(paraGameInfo);

//append child option into left div
divLeft.appendChild(paraSize);
divLeft.appendChild(divSmall);
divLeft.appendChild(divMedium);
divLeft.appendChild(divLarge);
divLeft.appendChild(divDefault);
divLeft.appendChild(paraEtch);
divLeft.appendChild(divColor);
divLeft.appendChild(divFallback);
divLeft.appendChild(divClear);
divLeft.appendChild(divShader);
divLeft.appendChild(divTrail);

// append child game into right div
divRight.appendChild(etchPanel);
divWrapper.appendChild(divGrid);
etchPanel.appendChild(paraInfo);
etchPanel.appendChild(divWrapper);
etchPanel.appendChild(nobs);
etchPanel.appendChild(rightNob);
etchPanel.appendChild(leftNob);

//append child to the main div
let body = document.querySelector("body");
body.appendChild(mainDiv);
mainDiv.appendChild(divLeft);
mainDiv.appendChild(divRight);
// create id to to left div

mainDiv.setAttribute("id", "wrapper");
divLeft.setAttribute("id", "leftpanel");
divSmall.setAttribute("id", "small");
divMedium.setAttribute("id", "medium");
divDefault.setAttribute("id", "defaultsize");
divLarge.setAttribute("id", "large");
divColor.setAttribute("id", "color");
divFallback.setAttribute("id", "Default");
divShader.setAttribute("id", "gradient");
divTrail.setAttribute("id", "trail");
divClear.setAttribute("id", "clear");

//set atribute to the right div

divRight.setAttribute("id", "rightpanel");
etchPanel.setAttribute("id", "etchmachine");
divWrapper.setAttribute("id", "gridwrapper");
divGrid.setAttribute("id", "grid");
nobs.setAttribute("id", "nobs");
leftNob.setAttribute("id", "leftnob");
rightNob.setAttribute("id", "rightnob");

//create variable with an id
let wrapper = document.getElementById("wrapper");
let leftPanel = document.getElementById("leftpanel");

// create css with javascript
body.style.background = "#47b7ab";

leftPanel.setAttribute(
  "style",
  "width:120px; margin-top: 150px; margin-left: 450px; float:left; background-color:#fff; border: solid; border-width: 5px; border-radius: 5px; border-color:#97000b; text-align:center; background-color: #f80012;"
);

//create variable

let i = 0;
let container = document.getElementById("grid");
let num = 16;
let backColor = "black";
const gridSmall = document.getElementById("small");
const gridMedium = document.getElementById("medium");
const gridLarge = document.getElementById("large");
const gridColor = document.getElementById("color");
const gridDefault = document.getElementById("Default");
const gridClear = document.getElementById("clear");
const gridShader = document.getElementById("gradient");
const gridTrail = document.getElementById("trail");
const gridDefaultSize = document.getElementById("defaultsize");

// create eventlistener to grid size
gridDefaultSize.addEventListener("click", e => {
  console.log("Size button event");
  num = window.prompt("Enter desired of grid");
  if (isNaN(num) || num == null || num == "" || num.trim() == "") {
    alert("you did not enter a number. please enter number");
  } else {
    while (container.hasChildNodes())
      container.removeChild(container.firstChild);
    createBox(num);
    if (backColor == "black") changeColor("black");
    else changeRandomColor();
  }
});
gridSmall.addEventListener("click", e => {
  let num = 30;
  console.log("Small size button event");
  while (container.hasChildNodes()) container.removeChild(container.firstChild);
  createBox(num);
  if (backColor == "black") changeColor("black");
  else changeRandomColor();
});

gridMedium.addEventListener("click", e => {
  let num = 20;
  console.log("Small size button event");
  while (container.hasChildNodes()) container.removeChild(container.firstChild);
  createBox(num);
  if (backColor == "black") changeColor("black");
  else changeRandomColor();
});

gridLarge.addEventListener("click", e => {
  let num = 10;
  console.log("Small size button event");
  while (container.hasChildNodes()) container.removeChild(container.firstChild);
  createBox(num);
  if (backColor == "black") changeColor("black");
  else changeRandomColor();
});

gridColor.addEventListener("click", e => {
  console.log("Color button event");
  changeRandomColor();
});
//create a default button
gridDefault.addEventListener("click", e => {
  console.log("Default button event");
  num = 16;
  while (container.hasChildNodes()) container.removeChild(container.firstChild);
  createBox(num);
  changeColor("black");
});

gridShader.addEventListener("click", e => {
  console.log("darken button event");
  darken();
});
//create a event on the clear
gridClear.addEventListener("click", e => {
  console.log("erase the etch-a-sketch");
  erase();
});
// create a trail event
gridTrail.addEventListener("click", e => {
  console.log("trail the etch - a - sketch");
  track();
});
//create boxes function
function createBox(num) {
  for (i = 0; i < num * num; i++) {
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    const div = document.createElement("div");
    const height = 500 / num;
    const width = 500 / num;
    div.style.height = `${height}px`;
    div.style.width = `${width}px`;
    // div.style.display = "inline-block";
    container.appendChild(div);
  }
}
//create function change color
function changeColor(color) {
  backColor = "black";
  let divs = document.querySelectorAll("#grid div");
  divs.forEach(div =>
    div.addEventListener("mouseover", e => {
      console.log(e.currentTarget);
      e.currentTarget.style.background = color;
    })
  );
}
//create a function change random color

function changeRandomColor() {
  backColor = "blue";
  let divs = document.querySelectorAll("#grid div");
  divs.forEach(div =>
    div.addEventListener("mouseover", e => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      e.currentTarget.style.background = `#${randomColor}`;
    })
  );
}
function darken() {
  let divs = document.querySelectorAll("#grid div");
  divs.forEach(div =>
    div.addEventListener("mouseover", e => {
      e.currentTarget.style.opacity =
        (parseFloat(e.target.style.opacity) || 0) + 0.1;
    })
  );
}
function erase() {
  let divs = document.querySelectorAll("#grid div");
  divs.forEach(div =>
    div.addEventListener("mouseover", e => {
      e.currentTarget.style.background = "none";
    })
  );
}

function track() {
  let divs = document.querySelectorAll("#grid div");
  divs.forEach(div =>
    div.addEventListener("mouseover", e => {
      e.currentTarget.style.transition = "background-color 2s ease-out";
    })
  );
}
createBox(num);
changeColor(backColor);
