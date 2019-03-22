import React, { Component } from 'react'
import Results from './Results'

class AthleteW extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.athlete.id,
            name: this.props.athlete.name,
            gender: this.props.athlete.gender, 
            event: this.props.athlete.event,
            bestMark: this.props.athlete.bestMark,
            imageUrl: this.props.athlete.imageUrl,
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
      this.props.updateFemale(this.state)
      this.setState({
        editing: false
      })
    }

    handleDeleteClick = () => {
      this.props.deleteFemale(this.state.id)
      this.setState({
        editing: false
      })
    }

  render() {
    return this.state.editing ? (
      <div className="athlete-edit">
           <img className="profile-img" src={this.props.athlete.imageUrl} alt="" width="100" />
           <h6 className="edit-headers">Name:</h6> <input type="text" name="name" placeholder="Change Name" onChange={this.handleChange}/><br/>
           <h6 className="edit-headers">Event:</h6><input type="text" name="event" placeholder="Change Event" onChange={this.handleChange}/><br/>
           <h6 className="edit-headers">Best Performance:</h6><input type="text" name="bestMark" placeholder="Change Best Mark" onChange={this.handleChange}/><br/>


            <button className="edit-delete-buttons" onClick={this.handleUpdateClick}>Update Athlete</button>
            <button className="edit-delete-buttons" onClick={this.handleDeleteClick}>Delete Athlete</button>
      </div>
        ) : (
      <div className="athlete-info">
          <div className="info-block">
            <img className="profile-img" src={this.props.athlete.imageUrl} alt="" width="100" />
            <h6>Name: {this.props.athlete.name}</h6>
            <h6>Event: {this.props.athlete.event}</h6>
            <h6>Best Performance: {this.props.athlete.bestMark}</h6>
            <button onClick={this.handleEditClick}>Edit Athlete</button>    
          </div>
          <Results className="results"/>  
      </div>
    )
  }
}

export default AthleteW
