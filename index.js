const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

const users = ["Ashik", "Moin", "Jabed", "Shadhin", "Israfil"];

app.get("/", (req, res) => {
  const fruit = {
    product: "alu",
    price: 200,
  };
  res.send(fruit);
});

app.get("/fruits/banana", (req, res) => {
  res.send({ fruit: "banana", quantity: 500, price: 200 });
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

// Post
app.post("/addUser", (req, res) => {
  console.log(req.body);
});

app.use(bodyParser.json());

app.listen(3000, () => console.log("Listening to Port 3000"));
