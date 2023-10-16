// Mais de um valor
const x = 10;
const y = "Alguma coisa";
const z = [1, 2];

console.log(x, y, z);

// Contagem de impressões
console.count(`O valor de x é ${x}, contagem `);

// variavel entre string
console.log("o nome dele é %s e ele é programador", y);

// Limpar console
setTimeout(() => {
    console.clear();
}, 2000)