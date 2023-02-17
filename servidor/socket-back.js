import "dotenv/config"; 

import registarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventoCadastro from "./registrarEventos/cadastro.js";
import registrarEventoLogin from "./registrarEventos/login.js";
import io from "./servidor.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);
nspUsuarios.on("connection", (socket) =>{
  registrarEventosInicio(socket, nspUsuarios);
  registarEventosDocumento(socket, nspUsuarios);
});

io.of("/").on('connection', (socket) => {
  registrarEventosInicio(socket, io);
  registarEventosDocumento(socket, io);
  registrarEventoCadastro(socket, io);
  registrarEventoLogin(socket, io);
});


