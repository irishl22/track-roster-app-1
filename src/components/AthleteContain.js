import React, { Component } from 'react'
import axios from 'axios'
import '../App.css'

import AthleteW from './AthleteW'
import AthleteM from './AthleteM'
import AddMeet from './AddMeet'



class AthleteContain extends Component {
    constructor() {
        super();

        this.state = {
            athletes: [],
            womens: [],
            mens: [],
            name: '', 
            gender: '', 
            event: '',
            bestMark: '',
            imageUrl: '' 
        }
    }

createFemale = woman => {
    console.log(woman)
    axios.post(`/api/athletes/women`, woman).then(res => {
        this.setState({
            womens: res.data
        })
    }).catch(err => console.log(err))
}    
createMale = man => {
    axios.post(`/api/athletes/men`, man).then(res => {
        this.setState({
            mens: res.data
        })
    }).catch(err => console.log(err))
}

updateFemale = woman => {
    console.log("update", woman)
    axios.put(`/api/athletes/women/${woman.id}`, woman).then(res => {
        this.setState({
            womens: res.data
        })
    }).catch(err => console.log(err))
    console.log("womens", this.state.womens)


}

updateMale = man => {
    axios.put(`/api/athletes/men/${man.id}`, man).then(res => {
        this.setState({
            mens: res.data
        })
    }).catch(err => console.log(err))
}

deleteFemale = id => {
    axios.delete(`/api/athletes/women/${id}`).then(res => {
        this.setState({
            womens: res.data
        })
    }).catch(err => console.log(err))
}

deleteMale = id => {
    axios.delete(`/api/athletes/men/${id}`).then(res => {
        this.setState({
            mens: res.data
        })
    }).catch(err => console.log(err))
}


handleChange = e => {
    let { name, value } = e.target
    this.setState({
        [name]: value
    })
}

handleClick = () => {
    let { name, gender, event, bestMark, imageUrl } = this.state
    let athlete = { name, gender, event, bestMark, imageUrl }
    
    if(gender === "female") {
        this.createFemale(athlete)
        this.setState({
            name: '',
            gender: '', 
            event: '',
            bestMark: '',
            imageUrl: ''
        })
    } else if(gender === "male") {
        this.createMale(athlete)
        this.setState({
            name: '',
            gender: '', 
            event: '',
            bestMark: '',
            imageUrl: ''
        })
    }

    
}

componentDidMount() {
    axios.get('/api/athletes/female').then(res => {
        this.setState({
            womens: res.data
        })
    }).catch(err => console.log('there was an error', err))
    
    axios.get('/api/athletes/male').then(res => {
        this.setState({
            mens: res.data
        })
    }).catch(err => console.log('there was an error', err))
}

  render() {
    return (
      <div>
          <div className="add-athlete">
          <h1>Add your athlete:</h1>
            <div className="left-inputs">
                <input type="text" name="name" value={this.state.name} placeholder="Full Name" onChange={this.handleChange}/>
                <input type="text" name="gender" value={this.state.gender}  placeholder="female or male" onChange={this.handleChange}/>
            </div>

            <div className="right-inputs">
                <input type="text" name="event" value={this.state.event} placeholder="Track Event" onChange={this.handleChange}/>
                <input type="text" name="bestMark" value={this.state.bestMark}  placeholder="Best Mark" onChange={this.handleChange}/>
            </div>

            <div className="bottom-inputs">
                <input type="text" name="imageUrl" value={this.state.imageUrl}  placeholder="Image URL" onChange={this.handleChange}/>
                <button className="myButton" onClick={this.handleClick}>Add Athlete</button>
            </div>
          </div>
          <div className="add-meet">
            <AddMeet/>
          </div>
          <div className="roster-names">
            <h2>Women's Roster</h2>
            <h2>Men's Roster</h2>
          </div>
          <div className="lists">
            <div className="womens-list">
                
                {this.state.womens.map(athlete => {
                    return <AthleteW 
                                key={athlete.id} athlete={athlete}
                                updateFemale={this.updateFemale}
                                deleteFemale={this.deleteFemale}/>

                })}
            </div>

            <div className="mens-list">
                {this.state.mens.map(athlete => {
                    return <AthleteM 
                                key={athlete.id} athlete={athlete}
                                updateMale={this.updateMale}
                                deleteMale={this.deleteMale}/>

                })}
            </div>      
          </div>
      </div>
    )
  }
}

export default AthleteContain
