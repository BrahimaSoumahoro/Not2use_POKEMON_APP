const React = require('react');

const Show = ({ pokemon }) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.img} alt={pokemon.name} />

//* Form to update the pokemon info 
      <form action={`/pokemon/${pokemon.name}?_method=PUT`} method="POST">

//* It is here that that the Pokemon picture shows

        <label htmlFor="img">Image URL</label>
        
//* Data entering for updating the pokemon info as necessary here with an action
        <input type="text" name="img" defaultValue={pokemon.img} />
        <button type="submit">Update Pokemon</button>
      </form>

//* I am deleting at this level with an action button too.
      <form action={`/pokemon/${pokemon.name}?_method=DELETE`} method="POST">
        <button type="submit">DELETE</button>
        </form>
        
    </div>
  )
}

module.exports = Show; 
