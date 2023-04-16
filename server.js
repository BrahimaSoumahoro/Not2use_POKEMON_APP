const express = require('express');
const app = express();
const React = require('react')
const path = require('path');
const pokemon = require('./models/pokemon');
const bodyParser = require('body-parser');

const port = 3000

//* setting my view-engine for JSX 
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

// * Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// * My established routes

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my Pokemon App BigB Jules.</h1>!')
})

//* GET all pokemon
app.get('/pokemon', (req, res) => {
  res.render('Index', { pokemon });
});

//* GET a specific pokemon
app.get('/pokemon/:name', (req, res) => {
  const { name } = req.params;
  const foundPokemon = pokemon.find((p) => p.name === name);
  res.render('Show', { pokemon: foundPokemon });
});

//* POST a new pokemon
app.post('/pokemon', (req, res) => {
  const { name, img } = req.body;
  pokemon.push({ name, img });
  res.redirect('/pokemon');
});

//* PUT an updated pokemon
app.put('/pokemon/:name', (req, res) => {
  const { name } = req.params;
  const { img } = req.body;
  const foundPokemon = pokemon.find((p) => p.name === name);
  foundPokemon.img = img;
  res.redirect(`/pokemon/${name}`);
});

//* DELETE a pokemon
app.delete('/pokemon/:name', (req, res) => {
  const { name } = req.params;
  const index = pokemon.findIndex((p) => p.name === name);
  pokemon.splice(index, 1);
  res.redirect('/pokemon');
});



app.listen(port, () => {
    console.log(`POKEMON are listening on port ${port}! for Brahima's actions`)
})