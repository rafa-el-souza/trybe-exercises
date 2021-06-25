import { Component } from 'react';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends Component {
  render() {
    return (
      <main className="pokedex-container">
        <h1 className="pokedex-title">Pokedex</h1>
        {pokemons.map((pokemon) => (
          <Pokemon pokemon={pokemon} />
        ))}
      </main>
    );
  }
}
export default Pokedex;
