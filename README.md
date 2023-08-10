# Middlewares


![Example](https://github.com/jesusgarcia149/express_tutorial/blob/14.-middlewares/Middlewares.png)

## index.js
```javascript
    const express = require("express");

    const app = express();

    app.use((req, res, next) => {
    console.log(`Route ${req,url} Method: ${req.method}`);
    next();
    });

    app.get('/profile', (req, res) => {
    res.send('profile page');
    });

    app.all('/about', (req, res) => {
    res.send('about page');
    });

    app.listen(3000);
    console.log("Server on Port 3000");
```
