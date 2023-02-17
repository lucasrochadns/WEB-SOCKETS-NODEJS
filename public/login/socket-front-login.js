import { definirCookie } from "../utils/cokies.js";
const socket = io();

function emitirAutenticarUsuario(dados){
   socket.emit("login_usuario", dados);
}

socket.on("autenticacao_notExist", () => alert("Usuário não existe !"));
socket.on("autenticacao_sucesso", (tokenJWT) => {
   definirCookie("tokenJWT", tokenJWT);
   alert("Usuário autenticado com sucesso! ");
   window.location.href = "/";
});
socket.on("autenticacao_error", () => alert("Usuário ou senha Invalido"));

export {emitirAutenticarUsuario};