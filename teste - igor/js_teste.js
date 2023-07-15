const switchTheme = document.getElementById("switchTheme")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog")

switchTheme.onclick = function() {
  modal.showModal()
}

buttonClose.onclick = function() {
  modal.close()
}