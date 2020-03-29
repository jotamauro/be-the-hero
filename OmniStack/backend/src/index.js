const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", (request, response) => {
  return response.json({ evento: "Semana", aluno: "José Mauro Dourado Lopes" });
});
app.listen(3333);
