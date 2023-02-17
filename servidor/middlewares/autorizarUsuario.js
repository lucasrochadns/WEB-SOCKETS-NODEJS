import jwt from 'jsonwebtoken';

function autorizarUsuario(socket, next){
    const tokenJWT = socket.handshake.auth.token;
    try {
        const payloadtoken = jwt.verify(tokenJWT, process.env.SEGREDO_JWT);
        socket.emit("autorizacao_sucesso", payloadtoken);
        next();
    } catch (error) {
        next(error);
    }
}

export default autorizarUsuario;