const fs = require('fs');

const arqAntigo = 'arquivo.txt';
const novoArquivo = 'novo.txt'

fs.rename(arqAntigo, novoArquivo, function(err){
    if(err) {
        console.log(err)
        return
    }

    console.log(`O arquivo ${arqAntigo} foi renomeado para ${novoArquivo}`);
})