# Request Body


![Example](https://github.com/jesusgarcia149/express_tutorial/blob/10.-Request_Body/Request_Body.png)

## index.js
```javascript
   // Method Express

    const express = require("express");

    const app = express();

    app.use(express.text());
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));

    app.post('/user', (req, res)=> {
    console.log(req.body);
    res.send('new user created')
    })

    app.listen(3000);
    console.log("Server on Port 3000");
```
