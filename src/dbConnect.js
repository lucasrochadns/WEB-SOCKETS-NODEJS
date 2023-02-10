import { MongoClient } from 'mongodb';

const cliente = new MongoClient("mongodb+srv://AluraChat:ASdf98644844@cluster0.zrtlixr.mongodb.net/?retryWrites=true&w=majority");

let documentosColecao;

try {
    await cliente.connect();
    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");
    console.log("Connection Sucess Full");
} catch (error) {
    console.log(error);
}

export { documentosColecao };

