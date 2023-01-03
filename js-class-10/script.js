// !Class && Id Add By Js
const addClass = document.createElement("h1");
addClass.setAttribute("class", "class1");
document.body.appendChild(addClass);

const addId = document.createElement("div");
addId.setAttribute("id", "id1");
document.body.appendChild(addId);
// !!!!!!!!!

// !Heading Add By JS
const textAdd = document.getElementById("text-add");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const h3 = document.createElement("h3");
const h4 = document.createElement("h4");
const h5 = document.createElement("h5");
const h6 = document.createElement("h6");

h1.textContent = "(Js)This is heading one";
h2.textContent = "This is heading two";
h3.textContent = "This is heading three";
h4.textContent = "This is heading four";
h5.textContent = "This is heading five";
h6.textContent = "This is heading six(Js)";

textAdd.append(h1, h2, h3, h4, h5, h6);

// document.getElementById("text-add").style.color = "red";
// document.getElementById("text-add").style.textAlign = "center";
// !! Google search
document.getElementById("text-add").style.cssText = `
  color: red;
  text-align:center;
`;
// .setAttribute("style", "text-Align:center; color : red");
// !!!!!
document.getElementById("new-text").style.cssText = `
  color: red;
  text-align:center;
  font-size:50px;
`;
