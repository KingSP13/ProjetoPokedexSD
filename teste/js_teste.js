const triggerMenuBurger = document.getElementById('menuBurger')
const showBurguerItems = document.getElementById('burgerItems')

triggerMenuBurger.addEventListener('click', function() {
triggerMenuBurger.classList.toggle('is-active')
showBurguerItems.classList.toggle('is-active')
});

const switchFire = document.getElementsByClassName('fireTheme')[0];
const switchGrass = document.getElementsByClassName('grassTheme')[0];
const switchWater = document.getElementsByClassName('waterTheme')[0];
const theme = document.getElementsByTagName('body')[0];

switchFire.addEventListener('click', function() {
  theme.classList.remove('fire')
  theme.classList.remove('grass')
  theme.classList.remove('water')
  theme.classList.add('fire')
});
switchGrass.addEventListener('click', function() {
  theme.classList.remove('fire')
  theme.classList.remove('grass')
  theme.classList.remove('water')
  theme.classList.add('grass')
});
switchWater.addEventListener('click', function() {
  theme.classList.remove('fire')
  theme.classList.remove('grass')
  theme.classList.remove('water')
  theme.classList.add('water')
});

const modalTrigger = document.getElementById(modalTrigger);
const modal = document.getElementsByTagName('dialog')[0];
const closeModal = document.getElementById(closeModal);

modalTrigger.onclick = function() {
    modal.showModal()
}


// Store
// localStorage.setItem ("theme", "fire");

// Retrieve
// document.getElementById("").inne = localStorage.theme


// fetch('../html/navbar.html')
// .then(response => response.text())
// .then(data => {
// document.getElementById('navbar-placeholder').innerHTML = data;
// });