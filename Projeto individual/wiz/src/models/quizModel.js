var database = require("../database/config")

function cadastrar(pontuacao, fkUsuario) {

console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao,fkUsuario);

    var instrucaoSql = 
        
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    `
        INSERT INTO pontuacao (pontuacao, fkUsuario)
        VALUES ('${pontuacao}', '${fkUsuario}');
    `;

    console.log("Executando SQL:");
    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};