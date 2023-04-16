const express = require('express');
const app = express();
const pokemon = require('./models/pokemon')
const port = 3000;


app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine());


// Setting up the middleware to run in our app
app.use((req, res, next) => {
    // console.log('I run for all routes');
    /**
     * To see where the request is coming from
     */
    console.log(req.url);
    next();
});

app.use(express.urlencoded({extended: false}))



app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
});

// *route to get the pokemon list from pokemon.js
app.get('/pokemon', (req, res) => {
    res.send(pokemon)
});







// * Server running verification listening on port 3000
app.listen(port, () => {
    // * console logging to see when the server is running.
    console.log(`POKEMON_APP are listening on port ${port}!`)
});