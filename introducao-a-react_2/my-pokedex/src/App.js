import Pokemon from './Pokemon';
import pokemons from './data'
import './App.css';

function App() {
  return (
    <div className="App">
      {pokemons.map((pokemon) => <Pokemon pokemon={ pokemon }/>)}
    </div>
  );
}

export default App;
