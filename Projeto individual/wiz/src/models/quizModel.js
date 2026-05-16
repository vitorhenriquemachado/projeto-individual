var database = require("../database/config")

function cadastrar(pontuacao, fkUsuario, acertos, erros) {

console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao,fkUsuario);

    var instrucaoSql = 
        
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    `
        INSERT INTO pontuacao (pontuacao, fkUsuario, acertos, erros)
        VALUES ('${pontuacao}', '${fkUsuario}',${acertos},${erros});
    `;

    console.log("Executando SQL:");
    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}
function obterDados(fkUsuario){
   
    var instrucaoSql = `SELECT * FROM graficos;` // utilizando view para chamar comandos SQL
    
    console.log("Executando a instrucaoSql: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function mediaTotal(fkUsuario){
        
    var instrucaoSql = `

        SELECT * FROM kpi_2;`
        ;
    console.log("Executando a instrucaoSql: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function mediaUsuario(idUsuario){
        
    var instrucaoSql = `

        SELECT * FROM kpis_1;`
        ;
    console.log("Executando a instrucaoSql: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function maiorPontuacao(fkUsuario){
    var instrucaoSql = `

        SELECT * FROM auge;`
        ;
    console.log("Executando a instrucaoSql: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function leaderboard(){
 
    var instrucaoSql = `

        SELECT * FROM leaderboard;`
        ;
    console.log("Executando a instrucaoSql: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    obterDados,
    mediaTotal,
    mediaUsuario,
    maiorPontuacao,
    leaderboard
};