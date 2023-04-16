const React = require('react');



const myStyle = { 
    color: '#ffffff',
    backgroundColor: '#0000000',
};

// * for inline CSS
// class MyFirstComponent extends React.Component() {
//     return(
//         <div style={myStyle}>My First React Component!</div>
//     )
// }


const Index = ({ pokemon }) => {
  return (
    <div>
      <h1>The Pokemon's World by Brahima</h1>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>
            <a href={`/pokemon/${p.name}`}>{p.name}</a>
          </li>
        ))}
      </ul>
      <form action="/pokemon" method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="img">Image URL</label>
        <input type="text" name="img" />
        <button type="submit">Add Pokemon</button>
      </form>
    </div>
  );
};

module.exports = Index;
