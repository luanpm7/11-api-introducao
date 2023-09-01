import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "./routes/usuario.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Rota / solicitada");
  res.json({
    message: "API para CRUD usuario: https://github.com/luanpm7/11-api-introducao",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});

app.use(roteadorUsuario);