import React, { Component } from 'react'

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            meets: [],
            title: '',
            date: '',
            location: '',
            womenCount: this.props.womenCount,
            menCount: this.props.menCount
        }

    }
    
    handleChange = e => {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        let {title, date, location, womenCount, menCount} = this.state
        console.log(menCount)
        this.setState({
            meets: [...this.state.meets, [title, date, location]],
            title: '',
            date: '',
            location: '',
            womenCount: womenCount,
            menCount: menCount
        })
    }

    render() {
        let meetList = this.state.meets.map((item, index) => {
            return <h2 className="added-meet" key={index}> 
                     {item[0]} <span style={{color: '#FDBC44'}}>on  </span>
                     {item[1]} <span style={{color: '#FDBC44'}}>in  </span>
                     {item[2]}
                     <span style={{color: '#FDBC44', float: 'right', marginRight:"0.6rem", display:"inline-block"}}> Men: {this.props.menCount}</span>
                     <span style={{color: '#FDBC44', float: 'right', marginRight:"0.6rem"}}> Women: {this.props.womenCount} </span>
                     </h2>
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
