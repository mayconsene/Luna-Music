module.exports = function() {

   let controller = {}; // Objeto vazio

   controller.teste = function(req, res) {

      let json = {
         nome: 'Fulano de Tal',
         idade: 42,
         sexo: 'M'
      };

      // Enviando resposta para o navegador
      res.send(json);

   }

   return controller;

}