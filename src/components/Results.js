import React, { Component } from 'react'

class Results extends Component {
    constructor(props) {
        super();
        this.state = {
            results = []
        }

    }
    
    handleChange = (e) => {
        this.setState = {
            results: e.target.value
        }
    }

    handleClick = () => {
        
    }

    render() {
    return (
      <div>
          <input onClick="" value="text" placeholder="Enter Results"/>
          <button onClick={this.handleClick}>Add</button>
        
      </div>
    )
  }
}

export default Results
