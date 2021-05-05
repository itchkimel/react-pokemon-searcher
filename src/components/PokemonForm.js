import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: '',
    hp: 0,
    frontUrl: '',
    backUrl: ''
  }
  
  submitHandler= (e)=>{
    e.preventDefault()

    const newPokemon = {
      name: this.state.name,
      hp: parseInt(this.state.hp, 10),
      sprites:{
        front: this.state.frontUrl,
        back: this.state.backUrl
      }      
    }

    fetch("http://localhost:3000/pokemon",{
      method: "POST",
      headers: {"Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon
      //   {
      //   name: newPokemon.name,
      //   hp: newPokemon.hp,
      //   sprites: {
      //     front: newPokemon.frontUrl,
      //     back: newPokemon.backUrl
      //   }
      // }
      )
    })
    .then(res => res.json())
    .then(pokeObj => this.props.submitNewPoke(pokeObj),
      this.setState({
        name: '',
        hp: 0,
        frontUrl: '',
        backUrl: ''
      })
    )
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input value={this.state.name} onChange={(e)=> this.setState({name: e.target.value})} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input value={this.state.hp} onChange={(e)=> this.setState({hp: e.target.value})} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input value={this.state.frontUrl} onChange={(e)=> this.setState({frontUrl: e.target.value})} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input value={this.state.backUrl} onChange={(e)=> this.setState({backUrl: e.target.value})} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
