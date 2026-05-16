var quizModel = require("../models/quizModel");


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    console.log(req.body);
    var pontuacao = req.body.pontuacao;
    var fkUsuario = req.body.fkUsuario;
    var acertos = req.body.acertos;
    var erros = req.body.erros;
   
    console.log(pontuacao);
    console.log(fkUsuario); 
    console.log(acertos);
    console.log(erros);

    // Faça as validações dos valores
    if (pontuacao == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else if(acertos == undefined){
        res.status(400).send("Acertos está undefined")
    } else if(erros ==  undefined){
        res.status(400).send("Erros está undefined")
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(pontuacao, fkUsuario, acertos, erros)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
 function obterDados(req, res){

    var fkUsuario = req.params.idUsuario;

    quizModel.obterDados(fkUsuario).then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);

        }else{
            res.status(204).send("Nenhum resultado encontado")
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("House um erro ao buscar as ultimas pontuações", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    
    });
  }
  function loadingKpis(req,res){
    var fkUsuario = req.params.idUsuario;

    quizModel.mediaUsuario(fkUsuario)
    .then(function(resultadoUsuario){
  

    quizModel.mediaTotal(fkUsuario)
    .then(function(resultadoTotal){

    quizModel.maiorPontuacao(fkUsuario)
    .then(function(auge){

        res.status(200).json({
          mediaUsuario: resultadoUsuario[0].mediaUsuario,
          timeReal: resultadoUsuario[0].timeReal,
          mediaTotal: resultadoTotal[0].mediaTotal,
          auge: auge[0].maximo
        });
    });
    });
     })

    .catch(function(erro){
        console.log(erro);
        console.log("House um erro ao buscar a media total", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);

    });
}
function leaderboard(req, res){
    var fkUsuario = req.params.idUsuario;

    quizModel.leaderboard()
     .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nErro ao buscar leaderboard ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    cadastrar,
    obterDados,
    loadingKpis,
    leaderboard
}