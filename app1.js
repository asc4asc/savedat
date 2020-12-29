"use strict";  

function putdat(wert) {
  // Check browser support
  //if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", wert);
  //} else {
    // document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  //}
}
 
function getdat() {
 // if (typeof(Storage) !== "undefined") {
    // Retrieve
  //  return localStorage.getItem("lastname");
  //} else {
    // document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  //
}

class countButton {
  constructor(button) {    
    this.tmp=document.querySelector(button);
    this.n=this.tmp.innerHTML;
    // this.n=getdat();
  }
  doit() {
    this.n=this.n*1+1;  
    this.tmp.style.backgroundColor = "yellow";
    this.tmp.innerText = this.n;
    // savedat(this.n);
  }
};     

var b1 = new countButton('BUTTON');
document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   b1.doit();
   /* console.log("Clicked", event.target.textContent); */ /* Debug */
 }
});
