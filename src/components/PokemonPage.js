import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const BASE_URL = `http://localhost:3000/pokemon`


class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    // Spare copy in case I need it :-)
    searchedPokes: [],
    search: ''
  }

  componentDidMount(){
    fetch(BASE_URL)
    .then(res => res.json())
    .then(pokemons => this.setState({pokemons, searchedPokes: pokemons}))
  }

  submitNewPoke = (pokeObj)=>{
    this.setState({
      searchedPokes: [pokeObj, ...this.state.searchedPokes]
    })
  }

  searchPokes = (userInput)=>{
    // console.log(e)
    this.setState({search: userInput})    
  }

  deletePoke = (pokeToDelete)=>{
    console.log(pokeToDelete)
  }

  render() {
    let filteredPoke = this.state.searchedPokes.filter(pokemons => pokemons.name.includes(this.state.search.toLowerCase()))
    // console.log(this.state.pokemons);
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitNewPoke={this.submitNewPoke}/>
        <br />
        <Search searchPokes={this.searchPokes}/>
        <br />
        <PokemonCollection pokemons={filteredPoke} deletePoke={this.deletePoke}/>
      </Container>
    )
  }
}

export default PokemonPage
