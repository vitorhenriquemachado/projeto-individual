var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
});
router.get("/obterDados/:idUsuario", function(req, res){
    quizController.obterDados(req, res);

});
router.get("/loadingKpis/:idUsuario", function(req, res){
    quizController.loadingKpis(req,res);
});
router.get("/leaderboard", function(req, res){
    quizController.leaderboard(req, res);
});

module.exports = router;