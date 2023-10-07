const botao = document.querySelector('#botao-calculo');
const qtdGemasInputField = document.querySelector('#quantidade-tiros');
const modal = document.querySelector('#modal');

document.addEventListener("keydown", e => {
    if(e.key === 'Enter') {
        botao.click();
        calculaTiros();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault();
    }
});

function calculaTiros() {
    const qtdTirosDisponiveis = qtdGemasInputField.value / 160;
    const qtdTirosDisponiveisInteger = parseInt(qtdTirosDisponiveis);

    if(qtdGemasInputField.value < 0) {
        alert('Digite um valor positivo!');
        qtdGemasInputField.value = '';
        return;
    }

    if (qtdGemasInputField.value) {
        limpaPagina(modal);

        let paragrafo = document.createElement('p');
        paragrafo.setAttribute('class', 'paragrafo');
        paragrafo.innerHTML = `Você possuí <p>&nbsp${qtdTirosDisponiveisInteger} tiros disponíveis</p>`;
        modal.appendChild(paragrafo);
    }
}

function limpaPagina(modal) {
    for (let element of modal.children) {
        if (element.classList.contains('paragrafo')) {
            modal.removeChild(element);
        };
    }
}


