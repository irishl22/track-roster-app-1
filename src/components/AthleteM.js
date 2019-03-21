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
            editing: false
        }
    }

    handleChange = e => {
      let { name, value } = e.target
      this.setState({
          [name]: value
      })
  }

    handleEditClick = () => {
      this.setState({
        editing: true
      })
    }

    handleUpdateClick = () => {
      this.props.updateMale(this.state)
      this.setState({
        editing: false
      })
    }

    handleDeleteClick = () => {
      this.props.deleteMale(this.state.id)
      this.setState({
        editing: false
      })
    }


  render() {
    return this.state.editing ? (
      <div>
            <img src={this.props.mImageUrl} alt="" width="100" />
            <h6>Name: {this.props.mName}</h6>
            <h6>Event: {this.props.mEvent}</h6>
            <h6>Best Performance: {this.props.mBestMark}</h6>
           <input type="text" name="name" placeholder="Change Name" onChange={this.handleChange}/>
            <input type="text" name="gender" placeholder="Change Gender" onChange={this.handleChange}/>
            <input type="text" name="event" placeholder="Change Event" onChange={this.handleChange}/>
            <input type="text" name="bestMark" placeholder="Change Best Mark" onChange={this.handleChange}/>
            <input type="text" name="imageUrl" placeholder="Change Image" onChange={this.handleChange}/>
            <button onClick={this.handleUpdateClick}>Update Athlete</button>
            <button onClick={this.handleDeleteClick}>Delete Athlete</button>
      </div>
        ) : (
      <div>
          <img src={this.props.mImageUrl} alt="" width="100" />
          <h6>Name: {this.props.mName}</h6>
          <h6>Event: {this.props.mEvent}</h6>
          <h6>Best Performance: {this.props.mBestMark}</h6>
          <button onClick={this.handleEditClick}>Edit Athlete</button>    
          <Results/>  
      </div>
    )
  }
}

export default AthleteM
