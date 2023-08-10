// Method Express

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/image", (req, res) => {
  res.sendFile("./HTTP_Methods.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  });
});

app.get("/isAlive", (req, res) => {
    res.sendStatus(204)
})

app.listen(3000);
console.log("Server on Port 3000");
