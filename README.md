# HTTP Methods in Express

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
    // Method NodeJS
    // const http = require('http');
    // const fs = require('fs')

    // const server = http.createServer((req,res) => {
    //    const read = fs.createReadStream('./index.html')
    //    read.pipe(res);
    // });

    // server.listen(3000);
    // console.log('Server on Port 3000');




    // Method Express
    const express = require('express');

    const app = express();

    app.get('/', (req, res) => {
        res.sendFile('./index.html', {
            root: __dirname
        })
    })

    app.get('/about', (req, res) => {
        res.send('About');
    })

    app.get('/Weather', (req, res) => {
        res.send('Weather');
    })

    app.use((req, res) => {
        res.status(404).send('page not found');
    })

    app.listen(3000);
    console.log('Server on Port 3000');
```
