# HTTP Response

## index.html
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>
```

## index.js
```javascript
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

```