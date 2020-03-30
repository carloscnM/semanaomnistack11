const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');


module.exports = (request, response, next) => {
    const authHeader = request.headers.token_authorization;

    console.log(authHeader);

    if(!authHeader){
        return response.status(401).json({error: 'No token provided'});
    }

    // formato do token esperado
    //Bearer dasdadasdka213231jkl31j23kl12jkljkl3123j1lkj

    const parts = authHeader.split(' ');

    if(!parts.length === 2){
        return response.status(401).json({error: 'Token Error'});
    }

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return response.status(401).json({error: 'Token malformatted'});
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err){
            return response.status(401).json({error: 'Token invalid'});
        }

        request.ong_Id = decoded.id;

        console.log('Middle  de autentificação');
        console.log(request.ong_Id );
        return next();
    });

};