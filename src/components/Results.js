import React, { Component } from 'react'

class Results extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            results: []
        }

    }
    
    handleChange = (e) => {
        this.setState = {
            input: e.target.value
        }
    }

    handleClick = () => {
        this.setState({
            results: [...this.state.results, this.state.input],
            input: ''
        })
    }

    render() {
        let resultsList = this.state.results.map((item) => {
            return <p>{item}</p>
        })

    return (
      <div>
          <input type="text" placeholder="Enter Results" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Add</button>  
          {resultsList}
      </div>
    )
  }
}

export default Results
