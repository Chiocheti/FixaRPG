const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "RpgS is going on!!!" });
});

require("./app/routes/jogador.routes.js")(app);
require("./app/routes/pj.routes.js")(app);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`RpgS is running on port: ${PORT}.`);
});