const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // sert ton index.html

// Endpoint POST pour démarrer Aternos
app.post("/start", (req, res) => {
  console.log("Requête pour démarrer le serveur reçue !");
  res.json({ message: "Serveur Aternos déclenché (simulation) !" });
});

// Serveur HTTP
app.listen(port, () => console.log(`Server running on port ${port}`));
