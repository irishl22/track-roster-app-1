import React, { Component } from 'react'
import Results from './Results'

class AthleteW extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            gender: this.props.gender,
            event: this.props.event,
            bestMark: this.props.bestMark,
            imageUrl: this.props.imageUrl,
        }
    }

  render() {
    return (
      <div>
          <img src={this.props.wImageUrl} alt="" width="100" />
          <h6>Name: {this.props.wName}</h6>
          <h6>Event: {this.props.wEvent}</h6>
          <h6>Best Performance: {this.props.wBestMark}</h6>    
          <Results />  
      
           
           
        </div>
    )
  }
}

export default AthleteW
