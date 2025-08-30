const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 10000;

// Permet de parser le JSON
app.use(express.json());

// Sert tous les fichiers statiques depuis le dossier public
app.use(express.static(path.join(__dirname, "public")));

// Endpoint POST pour démarrer Aternos
app.post("/start", (req, res) => {
  console.log("Requête pour démarrer le serveur reçue !");
  // Ici, plus tard, tu pourras ajouter le code réel pour démarrer Aternos
  res.json({ message: "Serveur Aternos déclenché (simulation) !" });
});

// Lancer le serveur
app.listen(port, () => console.log(`Server running on port ${port}`));
