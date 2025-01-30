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
function trocarImagemPorNome(event) {
    if (event.key === "Enter") {
        const planetaDigitado = inputPlaneta.value();
        if (planetas[planetaDigitado]) {
            document.documentElement.style.setProperty("--imagem-fundo", `url('${planetas[planetaDigitado]}')`);
        } else {
            alert("Planeta não encontrado! Tente novamente.");
        }
    }
}





inputPlaneta.addEventListener("keypress", trocarImagemPorNome);
