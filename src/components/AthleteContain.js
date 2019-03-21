import React, { Component } from 'react'
import Axios from 'axios'

import Womens from './Womens'
import Mens from './Mens'

class AthleteContain extends Component {
    constructor() {
        super();

        this.state = {
            womens: [],
            mens: []
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

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default AthleteContain
