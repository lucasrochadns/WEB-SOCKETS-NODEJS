const socket = io();

function emitirCadastrarUsuario(dados){
    socket.emit("cadastrar_usuario", dados);
}
socket.on("usuario_existe", () => alert("usuario existe !"));
socket.on("cadastro_sucesso", () => alert("Cadastro realizado com sucesso! "));
socket.on("cadastro_error", () => alert("Cadastro Error! "));
export {emitirCadastrarUsuario};