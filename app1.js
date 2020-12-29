"use strict";  

class countButton {
  constructor(button) {    
    this.tmp=document.querySelector(button);
    this.n=this.tmp.innerHTML;
  }
  doit() {
    this.n=this.n*1+1;  
    this.tmp.style.backgroundColor = "yellow";
    this.tmp.innerText = this.n;
  }
};     

var b1 = new countButton('BUTTON');
document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   b1.doit();
   /* console.log("Clicked", event.target.textContent); */ /* Debug */
 }
});
