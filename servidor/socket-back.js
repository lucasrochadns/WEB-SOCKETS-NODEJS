import "dotenv/config"; 

import registarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventoCadastro from "./registrarEventos/cadastro.js";
import registrarEventoLogin from "./registrarEventos/login.js";
import io from "./servidor.js";

io.on('connection', (socket) => {
  registrarEventosInicio(socket, io);
  registarEventosDocumento(socket, io);
  registrarEventoCadastro(socket, io);
  registrarEventoLogin(socket, io);
});


