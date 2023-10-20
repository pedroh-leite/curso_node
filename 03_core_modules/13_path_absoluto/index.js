const path = require('path');

// path absoluto
console.log(path.resolve("index.txt"));

// formar um path
const midFolder = 'relatorios'
const fileName = 'pedro.txt'

const finalPath = path.join("/", "arquivos", midFolder, fileName);

console.log(finalPath);