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
            imageUrl: '' ,
            checkedF: false,
            checkedM: false,
            womenCount: 3,
            menCount: 2
        }
    }

createFemale = woman => {
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
    axios.put(`/api/athletes/women/${woman.id}`, woman).then(res => {
        this.setState({
            womens: res.data
        })
    }).catch(err => console.log(err))
}

updateMale = man => {
    axios.put(`/api/athletes/men/${man.id}`, man).then(res => {
        this.setState({
            mens: res.data
        })
    }).catch(err => console.log(err))
}

deleteFemale = id => {
    let {womenCount} = this.state
    axios.delete(`/api/athletes/women/${id}`).then(res => {
        this.setState({
            womens: res.data,
            womenCount: womenCount - 1
        })
    }).catch(err => console.log(err))
}

deleteMale = id => {
    let {menCount} = this.state
    axios.delete(`/api/athletes/men/${id}`).then(res => {
        this.setState({
            mens: res.data,
            menCount: menCount - 1
        })
    }).catch(err => console.log(err))
}

// HANDLE METHODS FOR ADD ATHLETE
handleChange = e => {
    let { name, value } = e.target
    this.setState({
        [name]: value
    })
}

handleCheckBoxF = (e) => {
    this.setState({
        checkedF: e.target.checked,
        gender: "female"
    })
}
handleCheckBoxM = (e) => {
    this.setState({
        checkedM: e.target.checked,
        gender: "male"
    })
}

handleClick = () => {
    let { name, gender, event, bestMark, imageUrl, checkedF, checkedM, womenCount, menCount } = this.state
    let athlete = { name, gender, event, bestMark, imageUrl }
    if(checkedF === true) {
        this.createFemale(athlete)
        this.setState({
            name: '',
            gender: 'female', 
            event: '',
            bestMark: '',
            imageUrl: '',
            checkedF: true,
            womenCount: womenCount + 1
        })
    } else if(checkedM === true) {
        this.createMale(athlete)
        this.setState({
            name: '',
            gender: 'male', 
            event: '',
            bestMark: '',
            imageUrl: '',
            checkedM: true,
            menCount: menCount + 1
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
                 
                <label className="check-container">Female
                    <input type="radio" name="gender" onClick={this.handleCheckBoxF} value={this.state.gender}/>
                </label>
                <label className="check-container">Male
                <input type="radio" name="gender" onClick={this.handleCheckBoxM} value={this.state.gender}/>
                </label>
  
            </div>

            <div className="right-inputs">
                <input type="text" name="event" value={this.state.event} placeholder="Track Event" onChange={this.handleChange}/>
                <input type="text" name="bestMark" value={this.state.bestMark}  placeholder="Best Mark" onChange={this.handleChange}/>
            </div>

            <div className="bottom-inputs">
                <input type="text" name="imageUrl" value={this.state.imageUrl}  placeholder="Image URL" onChange={this.handleChange}/>
                <button className="myButton" onClick={this.handleClick}>Add Athlete</button>
                <img src="http://recreation.ucsd.edu/wp-content/uploads/2015/09/Athletics-Yellow-Trident-300x297.png" className="trident-logo" alt=""/>
            </div>
          </div>

          <div className="add-meet">
            <AddMeet womenCount={this.state.womenCount} menCount={this.state.menCount}/>
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
