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
