import { cadastrarUsuario, encontrarUsuario } from "../db/usuariosDB.js";

function registrarEventoCadastro(socket, io){
    socket.on("cadastrar_usuario", async (dados) =>{
    const usuario = await encontrarUsuario(dados.usuario);
    
    if(usuario === null){
       const resultado = await cadastrarUsuario(dados);
    
      if(resultado.acknowledged){
        socket.emit("cadastro_sucesso");
      } else{
        socket.emit("cadastro_error");
      }
   }else{
      socket.emit("usuario_existe");
   }
    });
}

export default registrarEventoCadastro;