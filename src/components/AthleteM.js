import React, { Component } from 'react'
import Results from './Results'


class AthleteM extends Component {
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
        <img src={this.props.mImageUrl} alt="" width="100" />
          <h6>Name: {this.props.mName}</h6>
          <h6>Event: {this.props.mEvent}</h6>
          <h6>Best Performance: {this.props.mBestMark}</h6>  
          <Results />  
      </div>
    )
  }
}

export default AthleteM
