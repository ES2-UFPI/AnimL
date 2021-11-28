const express = require('express');
const Favorito = require('./controllers/favoritos.controller')
const Usuario = require('./controllers/usuarios.controller')

const routes = express.Router();

//routes.get('/', Favorito.index);

routes.get('/api/favoritos', Favorito.index);

routes.post('/api/favoritos', Favorito.create);

routes.delete('/api/favoritos/delete/:_id', Favorito.delete);

routes.get('/api/usuarios', Usuario.index);
routes.post('/api/usuarios', Usuario.create);
routes.get('/api/usuarios.details/:_id', Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.put('/api/usuarios', Usuario.update);

routes.post('/api/usuarios/login', Usuario.Authenticate);

module.exports = routes;