let a=document.getElementsByTagName('input')[0];
let b=document.getElementsByTagName('input')[1];
let c=document.getElementsByTagName('input')[2];
let d=document.getElementsByTagName('input')[3];
let terms=document.getElementsByTagName('input')[4];
let submit=document.getElementsByTagName('input')[5];
submit.style.visibility='hidden';
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(terms);
console.log(submit);
function show(){
  if (a.value !="" && b.value !="" && c.value !="" && d.value !="") {
    submit.style.visibility='visible';
  }
}
function thank(){
document.getElementsByTagName('h1')[0].innerHTML="Merci pour votre don!";
document.getElementsByTagName('form')[0].style.visibility='hidden';
  }
terms.addEventListener("click",show);
submit.addEventListener("click",thank);
