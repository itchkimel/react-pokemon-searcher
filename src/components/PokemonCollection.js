import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    // console.log(this.props.pokemons)
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map(pokeObj => <PokemonCard key={pokeObj.id} pokeObj={pokeObj} deletePoke={this.props.deletePoke}/>)}
      </Card.Group>
      
    )
  }
}

export default PokemonCollection
