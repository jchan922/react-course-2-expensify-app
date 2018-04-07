const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname, '../', 'public');
const port = process.env.PORT || 3000;      // either Heroku port or localhost

const app = express();

app.use(express.static(publicPath));        // serve up all assets from this directory

app.get('*', (req, res) => {                // serve up index.html on all 404s to allow for client side routing
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {                    // listen on this port
   console.log('Server is up!') 
})

// node server/server.js