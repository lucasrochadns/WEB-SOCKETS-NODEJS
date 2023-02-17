import { usuariosColecao } from "./dbConnect.js";
import criaHashSalSenha  from "../utils/criaHashSalSenha.js";
function cadastrarUsuario({ usuario, senha}){
    
    const { salSenha, hashSenha } = criaHashSalSenha(senha);
    
    return usuariosColecao.insertOne({usuario, hashSenha, salSenha});
}

function encontrarUsuario(usuario){
    return usuariosColecao.findOne({usuario});
}

export {cadastrarUsuario, encontrarUsuario};