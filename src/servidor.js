import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();
const porta = 3000;

const caminhoAltual = url.fileURLToPath(import.meta.url); // retorna o caminho atual
const diretorioPublic = path.join(caminhoAltual, "../../", "public"); // acessa o caminho public

app.use(express.static(diretorioPublic));
const servidorHttp = http.createServer(app);



servidorHttp.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`));
const io = new Server(servidorHttp);

io.on("connection", () => {
     console.log("Cliente se connectou");
});


// acessar pagina biblioteca socket.io 