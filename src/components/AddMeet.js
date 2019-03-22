import React, { Component } from 'react'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            meets: [],
            title: '',
            date: '',
            location: ''
            // meets: [],
            // dates: [],
            // locations: []
            
        }

    }
    
    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
       let {title, date, location} = this.state
        this.setState({
            meets: [...this.state.meets, [title, date, location]],
            title: '',
            date: '',
            location: ''
        })
    }

    render() {
        let meetList = this.state.meets.map((item, index) => {
            return <h2 className="added-meet" key={index}>Meet: {item[0]} on {item[1]} at {item[2]}</h2>
        })

    return (
    <div>
           <h2>Add Meet</h2> 
        <div>
            <input value={this.state.title} name="title" type="text" placeholder="Meet Name" onChange={this.handleChange}/>
            <input value={this.state.date} name="date" type="text" placeholder="Date" onChange={this.handleChange}/>
            <input value={this.state.location} name="location" type="text" placeholder="Location" onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Add</button>  
        </div>
            {meetList}
    </div>
    )
  }
}

export default Results
