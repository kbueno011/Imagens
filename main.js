"use strict";

const botaoTrocarImagem = document.getElementById("trocar-imagem");
const inputPlaneta = document.getElementById("planeta");

const planetas = {
    "terra": "./img/planeta-terra.webp",
    "marte": "./img/planeta-marte.jpg",
    "jupiter": "./img/planeta-jupiter.jpg",
    "saturno": "./img/planeta-saturno.webp",
    "venus": "./img/planeta-venus.webp",
    "mercurio": "./img/mercurio-planeta.png",
    "urano": "/img/planeta-urano.webp",
    "netuno": "./img/aneis-netuno.webp"
};

// Função para trocar a imagem pelo nome do planeta digitado
function trocarImagemPorNome() {
    const planetaDigitado = inputPlaneta.value.toLowerCase().trim(); // Remover espaços extras
    if (planetas[planetaDigitado]) {
        document.documentElement.style.setProperty("--imagem-fundo", `url('${planetas[planetaDigitado]}')`);
    } else {
        alert("Planeta não encontrado!");
    }
}

// Função para trocar a imagem aleatoriamente ao clicar no botão
function trocarImagemAleatoria() {
    const nomesPlanetas = Object.keys(planetas);
    const planetaAleatorio = nomesPlanetas[Math.floor(Math.random() * nomesPlanetas.length)];
    document.documentElement.style.setProperty("--imagem-fundo", `url('${planetas[planetaAleatorio]}')`);
}

// Eventos
inputPlaneta.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        trocarImagemPorNome();
    }
});
botaoTrocarImagem.addEventListener("click", trocarImagemAleatoria);
