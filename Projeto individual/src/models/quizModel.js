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
   
    var instrucaoSql = ` SELECT pontuacao,acertos,erros
    FROM usuario
    JOIN pontuacao
    ON fkUsuario = idUsuario
    WHERE fkUsuario = ${fkUsuario}
    ORDER BY id DESC;;` // utilizando view para chamar comandos SQL
    
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
function mediaUsuario(fkUsuario){
        
    var instrucaoSql = `

       SELECT TRUNCATE(AVG(pontuacao),1) AS mediaUsuario,
   CASE 
WHEN AVG(pontuacao) <= 5 THEN 'Você é varmeirense'
WHEN AVG(pontuacao) >=6 AND AVG(pontuacao) <=8 THEN 'Você é CORINTHIANO de Verdade'
WHEN AVG(pontuacao) IS NULL THEN 'SEM REGISTRO'
ELSE 'VOCÊ VIVE DE CORINTHAINS!'
END AS timeReal
FROM pontuacao
WHERE fkUsuario = ${fkUsuario};`
        ;
    console.log("Executando a instrucaoSql: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function maiorPontuacao(fkUsuario){
    var instrucaoSql = `

        SELECT MAX(pontuacao) AS maximo,
        CASE
        WHEN AVG(pontuacao) IS NULL THEN 'SEM REGISTRO'
        END AS mensagem
         FROM pontuacao
WHERE fkUsuario = ${fkUsuario};`
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