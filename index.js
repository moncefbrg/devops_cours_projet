const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  let data = JSON.parse(fs.readFileSync("visits.json"));
  data.count += 1;
  fs.writeFileSync("visits.json", JSON.stringify(data));

  res.send(`Nombre de visites : ${data.count}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});