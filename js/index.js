// MENU BURGUER FUNCTIONS


const triggerMenuBurger = document.getElementById('menuBurger')
const showBurguerItems = document.getElementById('burgerItems')

triggerMenuBurger.addEventListener('click', function() {
triggerMenuBurger.classList.toggle('is-active')
showBurguerItems.classList.toggle('is-active')
});


// MODAL CONFIG


const switchTheme = document.getElementById("switchTheme")
const modal = document.querySelector("dialog")
const buttonClose = document.getElementById("cancelModal")
const saveTheme = document.getElementById("saveThemeBtn")

switchTheme.onclick = function() {
  modal.show()
}
buttonClose.onclick = function() {
  modal.close()
}
saveTheme.onclick = function() {
  modal.close()
}


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


// Função para aplicar o tema atualmente armazenado no LocalStorage
function applyStoredTheme() {
  const selectedTheme = localStorage.getItem('selectedTheme');

  // Se o tema estiver armazenado, aplicá-lo ao corpo do documento
  if (selectedTheme) {
    theme.classList.remove('palette-fire');
    theme.classList.remove('palette-grass');
    theme.classList.remove('palette-water');
    theme.classList.remove('palette-dark');
    theme.classList.remove('palette-electric');
    theme.classList.remove('palette-steel');
    theme.classList.add(selectedTheme);
  }
}
