# Queries


## index.js
```javascript
    const express = require("express");

    const app = express();

    app.get('/hello/:username', (req, res) => {
    console.log(typeof req.params.username)
    res.send(`Hello ${req.params.username.toUpperCase}`)
    });

    app.get('/search', (req, res) => {
    console.log(req.query);
    if (req.query.q === 'javascript books'){
        res.send('list of books javasciprt');
    } else {
        res.send('normal page');
    }
    }); 


    app.get('/add/:x/:y', (req, res) => {
    console.log(req.params.x);
    console.log(req.params.y);

    const result = parseInt(req.params.x) + parseInt(req.params.y);
    console.log(result);
    res.send(`Result: ${result}`);
    })

    app.get('/users/:username/photo', (req, res) => {
    console.log(req,params);
    if (req.params.username === "jesus"){
        res.sendFile('./Request_Body.png', {
        root: __dirname
        })
    }
    res.send('user not access')
    });

    app.get('/name/:name/age/:age', (req, res) => {
    res.send(`the user ${req.params.name} have ${req.params.age} years old`);
    })

    app.listen(3000);
    console.log("Server on Port 3000");
```