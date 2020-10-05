 import { createBox } from "./utils.js";
 import { DIV_RED_BOX } from "./html.constants.js"
 import * as moment from "./node_modules/moment/dist/moment.js"
 import { DIV_RED_BOX } from "./html.constants.js";


 function onSidebarToggle() {
     const sidebarRef = document.querySelector("#sidebar-container");
     sidebarRef.classList.toggle("sidebar--open");
 }

 const boxes = document.querySelectorAll(".box"); // boxes je lista html elemenata

 boxes.forEach((box) => box.addEventListener("click", onBoxClick));

 function onBoxClick(event) {
     const boxRef = event.currentTarget; // u boxRef je spremljen: document.getElementById("blue-box")

     onDuplicateBox(boxRef.id);
 }

 function onDuplicateBox(id) {
     const elementRef = document.getElementById(id);
     const newBox = elementRef.cloneNode();

     newBox.addEventListener("click", onBoxClick);
     document.getElementById("box-container").append(newBox);
 }

 function onSubmit(event) {
     event.preventDefault(); // Izbjeći automatsko refreshanje stranice

     const emailValue = document.getElementById("mail").value;
     alert(emailValue);
 }

 boxes.forEach(box => box.addEventListener("click", onBoxClick));