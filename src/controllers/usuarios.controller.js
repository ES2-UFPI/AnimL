const Usuarios = require('../models/usuario.model');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

function generateToken( params = {}){
    return jwt.sign( params, authConfig.secret, {
        expiresIn: 86400
    });
}
module.exports = {
    async index(req, res) {
        const lista_usuarios = await Usuarios.find();
        return res.status(200).json(lista_usuarios);
    },
    async create(req, res) {
        const {nome_usuario, email_usuario, senha_usuario} = req.body;
        
        let data = {};
        let user = await Usuarios.findOne({email_usuario});
        if(!user){
            data = {nome_usuario, email_usuario, senha_usuario};
            user = await Usuarios.create(data);
            return res.send({user, token: generateToken({ id: user._id })});
        }else{
            return res.status(500).json(user);
        }
    },
    async details(req, res){
        const {_id} =  req.params;
        const user = await Usuarios.findOne({_id});
        res.json(user);
    },
    async delete(req, res){
        const { _id } = req.params;

        const user = await Usuarios.findByIdAndDelete({ _id });

        return res.json(user);
    },
    async update(req, res){
        const {_id, nome_usuario, email_usuario, senha_usuario} = req.body;

        const data = {nome_usuario, email_usuario, senha_usuario};
        
        const user = await Usuarios.findByIdAndUpdate({_id}, data, {new:true});

        return res.json(user);
    },
    async Authenticate(req, res){
        const { email_usuario, senha_usuario} = req.body;
        const user = await Usuarios.findOne({ email_usuario });

        if(!user){
            return res.status(400).send({ error: 'User not found' });
        }
        if( senha_usuario === user.senha_usuario){
            
            return res.send({user, token: generateToken({ id: user._id })});
        } else {
            return res.status(400).send({ error: 'Senha incorreta' });
        }
        
    }
  
}

