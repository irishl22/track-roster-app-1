import React, { Component } from 'react'
import axios from 'axios'

// import Womens from './Womens'
// import Mens from './Mens'
import Athlete from './Athlete'

class AthleteContain extends Component {
    constructor() {
        super();

        this.state = {
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
    
getSorted = gender => {
    axios.get(`/api/athletes/${gender}`).then(res => {
        this.setState({
            womens: res.data,
            mens: res.data
        })
    }).catch(err => console.log('there was an error', err))
}

componentDidMount() {
    axios.get('/api/athletes').then(res => {
        this.setState({
            athletes: res.data
        })
    }).catch(err => console.log('there was an error', err))
}

handleChange = e => {
    let { name, value} = e.target
    this.setState({
        [name]: value
    })
}

handleClick = () => {
    let { name, gender, event, bestMark, imageUrl } = this.state
    let athlete = { name, gender, event, bestMark, imageUrl }
    
    if(gender === "Female") {
        this.createFemale(athlete)
    } else if(gender === "Male") {
        this.createMale(athlete)
    }

}

  render() {
    return (
      <div>
          <div>
            <input type="text" name="name" placeholder="Full Name" onChange={this.handleChange}/>
            <input type="text" name="gender" placeholder="Female or Male" onChange={this.handleChange}/>
            <input type="text" name="event" placeholder="Track Event" onChange={this.handleChange}/>
            <input type="text" name="bestMark" placeholder="Best Mark" onChange={this.handleChange}/>
            <input type="text" name="imageUrl" placeholder="Image URL" onChange={this.handleChange}/>
            <button onClick={this.handleClick}>Add Athlete</button>
          </div>
          <div className="womens-list" >
            {this.state.womens.map(woman => {
                return <Athlete 
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
                return <Athlete 
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
