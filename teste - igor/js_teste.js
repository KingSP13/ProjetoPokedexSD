const switchFire = document.getElementsByClassName('fireTheme')[0];
const switchGrass = document.getElementsByClassName('grassTheme')[0];
const switchWater = document.getElementsByClassName('waterTheme')[0];
const themeDiv = document.getElementById('inputDiv');

switchFire.addEventListener('click', function() {
  themeDiv.dataset.tema = 'tema1';
});
switchGrass.addEventListener('click', function() {
  themeDiv.dataset.tema = 'tema2';
});
switchWater.addEventListener('click', function() {
  themeDiv.dataset.tema = 'tema3';
});

// Função para salvar o tema padrão no localStorage
function salvarTemaPadrao() {
  const radios = document.getElementsByName("tema");
  let temaSelecionado = null;

  for (const radio of radios) {
    if (radio.checked) {
      temaSelecionado = radio.value;
      break;
    }
  }

  if (temaSelecionado) {
    localStorage.setItem("temaPadrao", temaSelecionado);
    alert("Tema padrão salvo com sucesso!");
  } else {
    alert("Por favor, selecione um tema antes de salvar.");
  }
}

// Função para carregar o tema padrão salvo, se houver, ao carregar a página
window.onload = function () {
  const temaPadraoSalvo = localStorage.getItem("temaPadrao");

  if (temaPadraoSalvo) {
    const radios = document.getElementsByName("tema");

    for (const radio of radios) {
      if (radio.value === temaPadraoSalvo) {
        radio.checked = true;
        break;
      }
    }

    themeDiv.dataset.tema = temaPadraoSalvo;
  }
};
