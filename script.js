const botao = document.querySelector("#botao-calculo");
const qtdGemasInputField = document.querySelector("#quantidade-tiros");
const modal = document.querySelector("#modal");
const segundoModal = document.querySelector("#segundoModal");
const radioSim = document.querySelector("#radioSim");
const radioNao = document.querySelector("#radioNao");
let qtdTirosDisponiveis;
let qtdTirosDisponiveisInteger;
let qtdTirosNecessarios;
let radioValue;

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    botao.click();
    calculaTiros();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") {
    e.preventDefault();
  }
});

function calculaTiros() {
  qtdTirosDisponiveis = qtdGemasInputField.value / 160;
  qtdTirosDisponiveisInteger = parseInt(qtdTirosDisponiveis);

  if (qtdGemasInputField.value < 0) {
    alert("Digite um valor positivo!");
    qtdGemasInputField.value = "";
    return;
  }

  if (qtdGemasInputField.value > 28800) {
    limpaSegundoParagrafo(modal);
    let segundoParagrafo = document.createElement("p");
    segundoParagrafo.setAttribute("class", "segundoParagrafo");
    segundoParagrafo.innerHTML = `Parabéns, o teu 5⭐ está garantindo!`;
    modal.appendChild(segundoParagrafo);
    limpaPagina(modal);
    segundoModal.classList.add("hiden");
    return;
  }

  if (qtdGemasInputField.value) {
    limpaPagina(modal);
    calculaQuantidadeTiros();
    atualizaSegundoModal(qtdTirosNecessarios);

    let paragrafo = document.createElement("p");
    paragrafo.setAttribute("class", "paragrafo");
    paragrafo.innerHTML = `Você possuí <p>&nbsp${qtdTirosDisponiveisInteger} tiros disponíveis</p>`;
    modal.appendChild(paragrafo);
    segundoModal.classList.remove("hiden");
  }

  radioSim.addEventListener("change", (e) => {
    if (!e.target.checked) return;

    radioValue = true;
    radioNao.checked = false;
    limpaSegundoParagrafo(modal);
    limpaSegundoParagrafo(segundoModal);
    calculaQuantidadeTiros();
    criaSegundoParagrafo(qtdTirosNecessarios);
    console.log(qtdTirosNecessarios);
  });

  radioNao.addEventListener("change", (e) => {
    if (!e.target.checked) return;

    radioValue = false;
    radioSim.checked = false;
    limpaSegundoParagrafo(modal);
    limpaSegundoParagrafo(segundoModal);
    calculaQuantidadeTiros();
    criaSegundoParagrafoRadioNao(qtdTirosNecessarios);
  });
}

function limpaPagina(modal) {
  for (let element of modal.children) {
    if (element.classList.contains("paragrafo")) {
      modal.removeChild(element);
    }
  }
}

function limpaSegundoParagrafo(segundoModal) {
  for (let element of segundoModal.children) {
    if (element.classList.contains("segundoParagrafo")) {
      segundoModal.removeChild(element);
    }
  }
};

function criaSegundoParagrafo(qtdTirosNecessarios) {
  if (qtdTirosDisponiveisInteger < 90) {
    let segundoParagrafo = document.createElement("p");
    segundoParagrafo.setAttribute("class", "segundoParagrafo");
    segundoParagrafo.innerHTML = `Faltam apenas ${qtdTirosNecessarios} tiros para garantir o teu 5⭐`;
    segundoModal.appendChild(segundoParagrafo);
  } else {
    let segundoParagrafo = document.createElement("p");
    segundoParagrafo.setAttribute("class", "segundoParagrafo");
    segundoParagrafo.innerHTML = `Parabéns, o teu 5⭐ está garantindo!`;
    segundoModal.appendChild(segundoParagrafo);
  };
}

function criaSegundoParagrafoRadioNao(qtdTirosNecessarios) {
  if (qtdTirosDisponiveisInteger < 180) {
    let segundoParagrafo = document.createElement("p");
    segundoParagrafo.setAttribute("class", "segundoParagrafo");
    segundoParagrafo.innerHTML = `Faltam apenas ${qtdTirosNecessarios} tiros para garantir o teu 5⭐`;
    segundoModal.appendChild(segundoParagrafo);
  } else {
    let segundoParagrafo = document.createElement("p");
    segundoParagrafo.setAttribute("class", "segundoParagrafo");
    segundoParagrafo.innerHTML = `Parabéns, o teu 5⭐ está garantindo!`;
    segundoModal.appendChild(segundoParagrafo);
  }
}

function atualizaSegundoModal(qtdTirosNecessarios) {
  const segundoModal = document.querySelector('.segundoParagrafo');
  if (segundoModal && qtdTirosDisponiveisInteger < 90 && qtdTirosDisponiveisInteger < 180) {
    segundoModal.innerHTML = `Faltam apenas ${qtdTirosNecessarios} tiros para garantir o teu 5⭐`;
  }

  if (qtdTirosNecessarios === 0) {
    segundoModal.innerHTML = `Parabéns, o teu 5⭐ está garantindo!`;
  }
}

function calculaQuantidadeTiros() {
  if (radioValue) {
    qtdTirosNecessarios = 90 - qtdTirosDisponiveisInteger;
  } else {
    qtdTirosNecessarios = 180 - qtdTirosDisponiveisInteger;
  }
}