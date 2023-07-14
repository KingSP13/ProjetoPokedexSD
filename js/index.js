document.addEventListener('DOMContentLoaded', function() {
  const triggerMenuBurger = document.getElementById('menuBurguer')
  const showBurguerItems = document.getElementById('burguerItems')

  triggerMenuBurger.addEventListener('click', function() {
  triggerMenuBurger.classList.toggle('is-active')
  showBurguerItems.classList.toggle('is-active')
});

});