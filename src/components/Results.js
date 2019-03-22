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
        this.setState ({
            input: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            results: [...this.state.results, this.state.input],
            input: ''
        })
    }

    render() {
        let resultsList = this.state.results.map((item, index) => {
            return <p className="results-text" key={index}>Result: {item}</p>
        })

    return (
    <div>
        <div className="results">
            <input value={this.state.input} type="text" placeholder="Enter Results" onChange={this.handleChange}/>
            <button className="results-button" onClick={this.handleClick}>Add</button>  
        </div>
            {resultsList}
    </div>
    )
  }
}

export default Results
