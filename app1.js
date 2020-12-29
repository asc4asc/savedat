"use strict";  

function putdat(wert) {
  // Check browser support
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("counter", wert);
  } else {
    console.log("Sorry, your browser does not support Web Storage..."); 
  }
}
 
function getdat() {
  if (typeof(Storage) !== "undefined") {
    // Retrieve
    return localStorage.getItem("counter");
  } else {
    console.log("Sorry, your browser does not support Web Storage..."); 
  }
  return 0;
}

class countButton {
  constructor(button) {    
    this.tmp=document.querySelector(button);
    // this.n=this.tmp.innerHTML;
    let n=getdat()*1;
    if ( Number.isFinite(n) ) {
      this.n=n;
    } else { 
      n=0;
      putdat(n); 
    }
    this.tmp.innerText = n;
    this.n=n;
  }
  doit() {
    this.n=this.n*1+1;  
    this.tmp.style.backgroundColor = "yellow";
    this.tmp.innerText = this.n;
    putdat(this.n);
  }
};     

var b1 = new countButton('BUTTON');
document.body.addEventListener("click", event => {
 if (event.target.nodeName == "BUTTON") {
   b1.doit();
   /* console.log("Clicked", event.target.textContent); */ /* Debug */
 }
});
