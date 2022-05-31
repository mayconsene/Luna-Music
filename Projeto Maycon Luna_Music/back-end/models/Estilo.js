const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      descricao: {
         type: String,
         required: false
      }
   });

   
   return mongoose.model('Estilo', schema, 'estilos');

}