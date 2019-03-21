import React, { Component } from 'react'

class Athlete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            gender: this.props.gender,
            event: this.props.event,
            bestMark: this.props.bestMark,
            imageUrl: this.props.imageUrl 
        }
    }
  render() {
    return (
      <div>
          <img src={this.props.wImageUrl} alt="" width="100" />
          <h6>{this.props.wName}</h6>
          <h6>{this.props.wEvent}</h6>
          <h6>{this.props.wBestMark}</h6>    

          <img src={this.props.mImageUrl} alt="" width="100" />
          <h6>{this.props.mName}</h6>
          <h6>{this.props.mEvent}</h6>
          <h6>{this.props.mBestMark}</h6>     
      </div>
    )
  }
}

export default Athlete
