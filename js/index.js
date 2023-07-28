// MODAL CONFIG


const switchTheme = document.getElementById("switchTheme")
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById("cancelModal")
const saveTheme = document.getElementById("saveThemeBtn")


switchTheme.onclick = function() {
  modal.showModal()
  dialogPolyfill.registerDialog(dialog);
}
buttonClose.onclick = function() {
  modal.close()
}
saveTheme.onclick = function() {
  modal.close()
}




// document.getElementById('switchTheme').onclick = function() {
//   alert("Você clicou no botão!");
// };



// THEME SWITCH FUNCTIONS

const switchFire = document.getElementsByClassName('fireTheme')[0];
const switchGrass = document.getElementsByClassName('grassTheme')[0];
const switchWater = document.getElementsByClassName('waterTheme')[0];
const switchDark = document.getElementsByClassName('darkTheme')[0];
const switchElectric = document.getElementsByClassName('electricTheme')[0];
const switchSteel = document.getElementsByClassName('steelTheme')[0];
const theme = document.getElementsByTagName('body')[0];

switchFire.addEventListener('click', function() {
  theme.classList.remove('palette-fire')
  theme.classList.remove('palette-grass')
  theme.classList.remove('palette-water')
  theme.classList.remove('palette-dark')
  theme.classList.remove('palette-electric')
  theme.classList.remove('palette-steel')
  theme.classList.add('palette-fire')
});
switchGrass.addEventListener('click', function() {
  theme.classList.remove('palette-fire')
  theme.classList.remove('palette-grass')
  theme.classList.remove('palette-water')
  theme.classList.remove('palette-dark')
  theme.classList.remove('palette-electric')
  theme.classList.remove('palette-steel')
  theme.classList.add('palette-grass')
});
switchWater.addEventListener('click', function() {
  theme.classList.remove('palette-fire')
  theme.classList.remove('palette-grass')
  theme.classList.remove('palette-water')
  theme.classList.remove('palette-dark')
  theme.classList.remove('palette-electric')
  theme.classList.remove('palette-steel')
  theme.classList.add('palette-water')
});
switchDark.addEventListener('click', function() {
  theme.classList.remove('palette-fire')
  theme.classList.remove('palette-grass')
  theme.classList.remove('palette-water')
  theme.classList.remove('palette-dark')
  theme.classList.remove('palette-electric')
  theme.classList.remove('palette-steel')
  theme.classList.add('palette-dark')
});
switchElectric.addEventListener('click', function() {
  theme.classList.remove('palette-fire')
  theme.classList.remove('palette-grass')
  theme.classList.remove('palette-water')
  theme.classList.remove('palette-dark')
  theme.classList.remove('palette-electric')
  theme.classList.remove('palette-steel')
  theme.classList.add('palette-electric')
});
switchSteel.addEventListener('click', function() {
  theme.classList.remove('palette-fire')
  theme.classList.remove('palette-grass')
  theme.classList.remove('palette-water')
  theme.classList.remove('palette-dark')
  theme.classList.remove('palette-electric')
  theme.classList.remove('palette-steel')
  theme.classList.add('palette-steel')
});
