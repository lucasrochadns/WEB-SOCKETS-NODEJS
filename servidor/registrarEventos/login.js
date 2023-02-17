import { encontrarUsuario } from "../db/usuariosDB.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarJWT from "../utils/gerarJWT.js";

function registrarEventoLogin(socket, io){
    socket.on("login_usuario", async ({ usuario, senha }) => 
    {
       const dadosUsuario = await encontrarUsuario(usuario);

       if(dadosUsuario){
           const autenticado = autenticarUsuario(senha, dadosUsuario);
           if(autenticado){
                 const tokenJWT = gerarJWT({ dadosUsuario });
                 socket.emit("autenticacao_sucesso", tokenJWT);
            }else{
                socket.emit("autenticacao_error");
            }
        } else {
            socket.emit("autenticacao_notExist");
        }
    });
}

export default registrarEventoLogin;