let a=document.getElementsByTagName('input')[0];
let b=document.getElementsByTagName('input')[1];
let c=document.getElementsByTagName('input')[2];
let agree=document.getElementsByTagName('input')[3];
let submit=document.getElementsByTagName('input')[4];

submit.style.visibility='hidden';

function show(){
  if (a.value !="" && b.value !="" && c.value !="") {
    submit.style.visibility='visible';
  }
}

agree.addEventListener("click",show);
