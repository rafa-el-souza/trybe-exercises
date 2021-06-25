import { Component } from 'react';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="pokemon-container">
        <div className="pokemon-text">
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>
            Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}
          </p>
        </div>
        <img src={ pokemon.image } alt={ pokemon.name }></img>
      </div>
    );
  }
}

export default Pokemon;