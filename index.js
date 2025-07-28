const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("✅ Bot Messenger opérationnel.");
});

app.post("/webhook", (req, res) => {
  console.log("📩 Requête reçue :", req.body);
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur en ligne sur le port ${PORT}`);
});
