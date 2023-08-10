# Method ALL


## index.js
```javascript
    const express = require("express");

    const app = express();

    app.all('/info', (req, res) => {
        res.send('server info');
    });

    app.listen(3000);
    console.log("Server on Port 3000");
```