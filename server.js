const express = require('express');
const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
});







// * Server running verification listening on port 3000
app.listen(port, () => {
    // * console logging to see when the server is running.
    console.log(`POKEMON_APP are listening on port ${port}!`)
});