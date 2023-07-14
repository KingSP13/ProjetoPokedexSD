const triggerMenuBurger = document.getElementById('menuBurger')
const showBurguerItems = document.getElementById('burgerItems')

triggerMenuBurger.addEventListener('click', function() {
triggerMenuBurger.classList.toggle('is-active')
showBurguerItems.classList.toggle('is-active')
});





const switchFire = document.getElementsByClassName('fireTheme')[0];
const switchGrass = document.getElementsByClassName('grassTheme')[0];
const switchWater = document.getElementsByClassName('waterTheme')[0];

switchFire.addEventListener('click', function() {
  switchFire.classList.toggle('fire')
});
switchGrass.addEventListener('click', function() {
  switchGrass.classList.toggle('grass')
});
switchWater.addEventListener('click', function() {
  switchWater.classList.toggle('water')
});


// fetch('../html/navbar.html')
// .then(response => response.text())
// .then(data => {
// document.getElementById('navbar-placeholder').innerHTML = data;
// });