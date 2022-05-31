const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      descricao: {
         type: String,
         required: true
      },
      
   });

   /*
      PARÂMETROS DE mongoose.model()
      1º -> nome do modelo (inicial maiúscula)
      2º -> constante que descreve o modelo (schema)
      3º -> nome da coleção (collection) no MongoDB
            que armazenará os objetos derivados do modelo
            (inicial minúscula, no plural)
   */
   return mongoose.model('Categorias', schema, 'categorias');

}