import chalk from 'chalk';

const nota = 6;

if (nota >= 7) {
    console.log(chalk.green("Parabéns, você está aprovado!"));
} else {
    console.log(chalk.red("Infelizmente você foi reprovado!"));
}