let button = document.getElementById('button_donate');
let header = document.getElementById('topbackground');
let newsletter_button=document.querySelector('.newsletter');


function donate() {
  let donate_form = window.open('donate.html', 'height=600px', 'width=400px');
}

button.addEventListener('click', donate);

function newsletter(){
  let newsletter_form=window.open('newsletter-form.html','height=600px', 'width=400px');
}

newsletter_button.addEventListener('click',newsletter);

function ombreOn() {
  header.style.boxShadow = "0 0 20px 4px #666666";
}

header.addEventListener('mouseenter', ombreOn);


function ombreOff() {
  header.style.boxShadow = "none";
}

header.addEventListener('mouseout', ombreOff);

//  DEBUT BOUTON FLECHE VERS LE HAUT

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById('goTop').style.display = "block";
  } else {
    document.getElementById('goTop').style.display = "none";
  }
};

window.onscroll = function() {
  scrollFunction()
};

goTop.onclick = function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// FIN BOUTON FLECHE VERS LE HAUT
