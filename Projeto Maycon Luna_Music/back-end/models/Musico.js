const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      nome: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true,
         index: {
            unique: true
         }
         // Não é possível cadastrar mais de um email
      },
      usuario: {
         type: String,
         required: true,
         index: {
            unique: true
         }
         // Não é possível cadastrar mais de um usuario

      },
      senha: {
         type: String,
         required: true
      },
      data_nascimento: {
         type: Date,
         required: true
      },
      categoria: {
         type: mongoose.ObjectId,
         ref: 'Categorias',
         required: true
      },
      instrumento: {
         type: mongoose.ObjectId,
         ref: 'Instrumento',
         required: true
      },

      estilo: {
         type:mongoose.ObjectId,
         ref: 'Estilo',
         require: true
      },

      outras_habilidades: {
         type: String,
         required: false
             
      },
      telefone: {
         type: String,
         required: true
      },
      celular: {
         type: String,
         required: true
      },
      outros_contatos: {
         type: String,
         required: false
      },
      foto_perfil: {
         type: String,
         required: false
      },
      observacoes: {
         type: String,
         required: false
      }
   });

   /*
      PARÂMETROS DE mongoose.model()
      1º -> nome do modelo (inicial maiúscula)
      2º -> constante que descreve o modelo (schema)
      3º -> nome da coleção (collection) no MongoDB
            que armazenará os objetos derivados do modelo
            (inicial minúscula, no plural)
   */
   return mongoose.model('Musicos', schema, 'musicos');

}