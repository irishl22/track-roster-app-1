import React, { Component } from 'react'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            results: [],
            id: this.props.id,
            name: this.props.name,
            gender: this.props.gender,
            event: this.props.event,
            bestMark: this.props.bestMark,
            imageUrl: this.props.imageUrl
        }

    }
    
    handleChange = (e) => {
        this.setState ({
            input: e.target.value,
            bestMark: e.target.value
        })
    }

    handleClick = () => {
        let {input, name, gender} = this.state
        console.log(this.state.id)

        if(Number(input) < Number(this.props.bestMark) && Number(input) && gender === "female") {
            this.props.updateFemale(this.state)
            alert(`${name} has a new best performance mark!`)
        } else if(Number(input) < Number(this.props.bestMark) && Number(input) && gender === "male") {
            this.props.updateMale(this.state)
            alert(`${name} has a new best performance mark!`)
        }
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
