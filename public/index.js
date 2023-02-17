
import { emitirAdicionarDocumento } from "./socket-front-index.js";
import { obterCookie, removerCookie } from "./utils/cokies.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumento = document.getElementById("input-documento");
const botaoLogout = document.getElementById("botao-logout");

botaoLogout.addEventListener("click", () =>{
   removerCookie("tokenJWT");
   alert("Usuario Deslogado Com sucesso");
   window.location.href = "/login/index.html";
});

const tokenJWT = obterCookie("tokenJWT");


form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = "";
});



function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a
      href="/documento/index.html?nome=${nomeDocumento}"
      class="list-group-item list-group-item-action"
      id="documento-${nomeDocumento}"
    >
      ${nomeDocumento}
    </a>
  `;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`);

  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };