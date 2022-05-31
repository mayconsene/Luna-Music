var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database');
db('mongodb://127.0.0.1:27017/luna');

var app = express()
let cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const teste = require('./routes/teste');
app.use('/teste', teste);

const veiculo = require('./routes/veiculo');
app.use('/veiculo', veiculo);

const marca = require('./routes/marca');
app.use('/marca', marca);

const modelo = require('./routes/modelo');
app.use('/modelo', modelo);

const cor = require('./routes/cor');
app.use('/cor', cor);

const combustivel = require('./routes/combustivel');
app.use('/combustivel', combustivel);

const tipo = require('./routes/tipo');
app.use('/tipo', tipo);

const musico = require('./routes/musico');
app.use('/musico', musico);

const categoria = require('./routes/categoria');
app.use('/categoria', categoria);

const instrumento = require('./routes/instrumento');
app.use('/instrumento', instrumento);

const estilo = require('./routes/estilo');
app.use('/estilo', estilo);



module.exports = app;
