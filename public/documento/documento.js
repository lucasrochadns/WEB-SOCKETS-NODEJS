import {
    emitirExcluirDocumento,
    emitirTextoEditor,
    selecionarDocumento,
  } from "./socket-front-documento.js";
  
  const parametros = new URLSearchParams(window.location.search);
  const nomeDocumento = parametros.get("nome");
  
  const textoEditor = document.getElementById("editor-texto");
  const tituloDocumento = document.getElementById("titulo-documento");
  const botaoExcluir = document.getElementById("excluir-documento");
  const listaUsuario = document.getElementById("usuarios-conectados");
  tituloDocumento.textContent = nomeDocumento || "Documento sem título";
  
  
  function tratarAutorizacaoSucesso (payload){
    selecionarDocumento({ nomeDocumento, nomeUsuario: payload.dadosUsuario.usuario});
    console.log(payload.usuario);
  }
  
  function atualizarInterfaceUsuarios(usuariosDocumentos){
      listaUsuario.innerHTML = "";

      usuariosDocumentos.forEach((usuarios) => {
         listaUsuario.innerHTML += `
         <li class="list-group-item">${usuarios}</li>
         `;
      });
  }

  textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
      texto: textoEditor.value,
      nomeDocumento,
    });
  });
  
  function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
  }
  
  botaoExcluir.addEventListener("click", () => {
    emitirExcluirDocumento(nomeDocumento);
  });
  
  function alertarERedirecionar(nome) {
    if (nome === nomeDocumento) {
      alert(`Documento ${nome} excluído!`);
      window.location.href = "/";
    }
  }
  
  export { atualizaTextoEditor, alertarERedirecionar, tratarAutorizacaoSucesso, atualizarInterfaceUsuarios};