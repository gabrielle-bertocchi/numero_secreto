const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100)
    
}
const elementoMenorValor = document.getElementById ('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById ('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

console.log(elementoMenorValor);
console.log(numeroSecreto);

