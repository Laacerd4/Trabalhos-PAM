function mostrarAlerta() {
    alert("Mensagem qualquer após o clique!");
}
 

//Trabalhando com o DOM
//document.getElementById(): Permite selecionar um elemento pelo seu ID
var elemento = document.getElementById('meuId');
//document.getElementsByTagName(): Seleciona elementos pelo nome da tag, retornando uma coleção de elementos
var elementos = document.getElementsByTagName('div');
//document.getElementsByClassName(): Seleciona elementos pelo nome da classe, também retornando uma coleção de elementos.
var elementos = document.getElementsByClassName('minhaClasse');
//document.querySelector(): Seleciona o primeiro elemento que corresponde a um seletor CSS específico.
var elemento = document.querySelector('.minhaClasse');
//document.querySelectorAll(): Seleciona todos os elementos que correspondem a um seletor CSS, retornando uma NodeList.
var elementos = document.querySelectorAll('div.minhaClasse');

let contador = 0;
document.getElementById('botao').onclick = function() {
    contador++;
    alert("Número de vezes clicado: " + contador);
};

//função para converter strings para caixa alta
function converterParaMaiuscula(str) {
    return str.toUpperCase();
  }
console.log(converterParaMaiuscula("minha string"));
  
//função para somar números
function somar(a, b) {
    return a + b;
  }
console.log(somar(5, 7)); // Exemplo de uso
  
