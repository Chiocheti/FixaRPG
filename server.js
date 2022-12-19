const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Rpg is going on!!!" });
});

require("./app/routes/jogador.routes.js")(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`RpgS is running on port: ${PORT}.`);
});