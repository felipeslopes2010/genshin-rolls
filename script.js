const botao = document.querySelector("#botao-calculo");
const qtdGemasInputField = document.querySelector("#quantidade-tiros");
const modal = document.querySelector("#modal");
const segundoModal = document.querySelector("#segundoModal");
const radioSim = document.querySelector("#radioSim");
const radioNao = document.querySelector("#radioNao");
let qtdTirosDisponiveis;
let qtdTirosDisponiveisInteger;
let qtdTirosNecessarios;

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

  if (qtdGemasInputField.value) {
    limpaPagina(modal);

    let paragrafo = document.createElement("p");
    paragrafo.setAttribute("class", "paragrafo");
    paragrafo.innerHTML = `Você possuí <p>&nbsp${qtdTirosDisponiveisInteger} tiros disponíveis</p>`;
    modal.appendChild(paragrafo);
    segundoModal.classList.remove("hiden");
  }
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
}

radioSim.addEventListener("change", (e) => {
  if (!e.target.checked) return;

  radioNao.checked = false;
  limpaSegundoParagrafo(modal);
  limpaSegundoParagrafo(segundoModal);

  if (qtdTirosDisponiveisInteger < 90) {
    qtdTirosNecessarios = 90 - qtdTirosDisponiveisInteger;
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

});

radioNao.addEventListener("change", (e) => {
  if (!e.target.checked) return;

  radioSim.checked = false;
  limpaSegundoParagrafo(modal);
  limpaSegundoParagrafo(segundoModal);

  if (qtdTirosDisponiveisInteger < 180) {
    qtdTirosNecessarios = 180 - qtdTirosDisponiveisInteger;
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
});
