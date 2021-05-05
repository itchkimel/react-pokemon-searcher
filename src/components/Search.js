import React from 'react'

const Search = (props) => {
  return (
    <div onChange={(e)=> props.searchPokes(e.target.value)} className="ui search">
      <div className="ui icon input">
        <input className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
