const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ error: 'no token provide'});
    }

    const parts = authHeader.split(' ');
    if(!parts.lenght === 2){
        return res.status(401).send({ error: 'token error'});
    }

    const [scheme, token] = parts;

    if(!/^Bearer$^/i.test(scheme))
        return res.status(401).send({ error: 'token malformatted'});
    
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'token invalido'});

        req.userId = decoded.id;
        return next();
    });
};