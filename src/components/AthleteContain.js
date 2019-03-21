import React, { Component } from 'react'
import axios from 'axios'

import AthleteW from './AthleteW'
import AthleteM from './AthleteM'

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
    axios.post(`/api/athletes/women`, woman).then(res => {
        this.setState({
            womens: res.data
        })
    })
}    
createMale = man => {
    axios.post(`/api/athletes/men`, man).then(res => {
        this.setState({
            mens: res.data
        })
    })
}

updateFemale = athlete => {
    axios.put(`/api/athletes/women/${athlete.id}`).then(res => {
        this.setState({
            womens: res.data
        })
    })
}
updateMale = athlete => {
    axios.put(`/api/athletes/men/${athlete.id}`).then(res => {
        this.setState({
            mens: res.data
        })
    })
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
    } else if(gender === "male") {
        this.createMale(athlete)
    }

}

  render() {
    return (
      <div>
          <div>
            <input type="text" name="name" placeholder="Full Name" onChange={this.handleChange}/>
            <input type="text" name="gender" placeholder="female or male" onChange={this.handleChange}/>
            <input type="text" name="event" placeholder="Track Event" onChange={this.handleChange}/>
            <input type="text" name="bestMark" placeholder="Best Mark" onChange={this.handleChange}/>
            <input type="text" name="imageUrl" placeholder="Image URL" onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Add Athlete</button>
          </div>
        
          <div className="womens-list" style={{float: "left"}}>
            {this.state.womens.map(woman => {
                return <AthleteW 
                            key={woman.id}
                            wName={woman.name}
                            wGender={woman.gender}
                            wEvent={woman.event}
                            wBestMark={woman.bestMark}
                            wImageUrl={woman.imageUrl}/>

            })}
          </div>

          <div className="mens-list" style={{float: "right"}}>
            {this.state.mens.map(man => {
                return <AthleteM 
                            key={man.id}
                            mName={man.name}
                            mGender={man.gender}
                            mEvent={man.event}
                            mBestMark={man.bestMark}
                            mImageUrl={man.imageUrl}/>

            })}
          </div>      
      </div>
    )
  }
}

export default AthleteContain
