import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    imageDisplay: 'front',
    // pokeObj: this.props.pokeObj
  }



  toggleImg = () => {
    // debugger
    if (this.state.imageDisplay === 'front'){
      this.setState({imageDisplay: 'back'})
    } else {
      this.setState({imageDisplay: 'front'})
    }
  }

  render() {
     
    return (
      <Card>
        <div >
          <div onClick={()=> this.toggleImg()} className="image">
            {this.state.imageDisplay === 'front' ? <img src={this.props.pokeObj.sprites.front} alt='oh no!'/> : <img src={this.props.pokeObj.sprites.back} alt='oh no!'/> }
          </div>
          <div className="content">
            <div className="header">{this.props.pokeObj.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeObj.hp}
            </span>
          </div>
          <button onClick={()=> this.props.deletePoke(this.props.pokeObj)}>Delete Poke</button>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
