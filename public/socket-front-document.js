import { atualizaTextoEditor } from "./document.js";

const socket = io();

function selecionarDocumento(nome) {
  socket.emit("selecionar_documento", nome, (texto) => {
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(dados, nomeDocumento) {
  socket.emit("texto_editor", dados, nomeDocumento);
}

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

export { emitirTextoEditor, selecionarDocumento };