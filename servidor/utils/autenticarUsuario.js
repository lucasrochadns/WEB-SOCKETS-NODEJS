import { scryptSync, timingSafeEqual } from 'crypto';

function autenticarUsuario(senha, usuario){
   const hashTest = scryptSync(senha, usuario.salSenha, 64);
   const hashReal = Buffer.from(usuario.hashSenha, "hex");

   const autenticado = timingSafeEqual(hashTest, hashReal);

   return autenticado;
}

export default autenticarUsuario;