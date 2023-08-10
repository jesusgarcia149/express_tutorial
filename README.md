# Middleware Interceptor


## console
```console
    npm install morgan
```

## index.js
```javascript
   const express = require("express");

    const app = express();

    app.use((req, res, next) => {
    console.log(`Route: ${req.url} Method: ${req.method}`);
    next();
    });

    app.get('/', (req, res) => {
    res.send('Init page');
    });

    app.all('/about', (req, res) => {
    res.send('about page');
    });

    app.get('/profile', (req, res) => {
    res.send('profile page');
    });

    app.use((req, res, next) => {
    if (req.query.login === 'jesus') {
        next()
    } else {
        res.send('No Autorized');
    }
    });

    app.get('/dashboard', (req, res) => {
    res.send('dashboard page');
    });

    app.listen(3000);
    console.log("Server on Port 3000");
```