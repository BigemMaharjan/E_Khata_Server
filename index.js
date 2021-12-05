const express = require("express");
const app = express();

//Middlewares
app.use(express.json());

/* ROUTE */
app.get("/", (req, res) => {
  res.status(200).json(`Server on port ${port} and database is connected`);
});

app.use(require("./src/routes/user"));

/* PORT Settings */
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`e_khata_server is running on port number ${port}`);
});
