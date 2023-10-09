function calcularIdade() {
    const nomeCachorro = document.getElementById("nomeCachorro").value;
    const idadeCachorro = parseFloat(document.getElementById("idadeCachorro").value);
    
    if (!isNaN(idadeCachorro)) {
        // Calcula a idade do cachorro em anos humanos
        const idadeEmAnosHumanos = Math.log(idadeCachorro) * 16 + 31;
        
        // Exibe o resultado
        document.getElementById("resultado").innerText = `${nomeCachorro} tem aproximadamente ${idadeEmAnosHumanos.toFixed(2)} anos em anos humanos.`;

        // Tabela de comparação de idade
        gerarTabelaIdade(idadeCachorro);
    }
}

function gerarTabelaIdade(idadeCachorro) {
    const tabelaIdade = document.getElementById("tabelaIdade").getElementsByTagName('tbody')[0];
    tabelaIdade.innerHTML = ""; // Limpa a tabela

    for (let i = 1; i <= idadeCachorro; i++) {
        const idadeEmAnosHumanos = Math.log(i) * 16 + 31;
        tabelaIdade.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${idadeEmAnosHumanos.toFixed(2)}</td>
            </tr>
        `;
    }
}
