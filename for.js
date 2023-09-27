const numero = [100, 200, 300, 400, 500, 600];

// Primeira expressão: é executada apenas uma única vez
// Segunda expressão: condição de execução
// Terceira expressão: é executada sempre ao final do bloco

// 1              //4              //3
for (let indice = 0; indice < numero.length; indice++) {
  // 2
  console.log(numero[indice]);
}
