import React from 'react';
import data from './user.js';

class Appuser extends React.Component {
    
    constructor (props) {
        super (props)
        this.user = props.userData
    }
    
  render() {
    return (
      <div className="App">
        <div className="card m-5">
          <img className="card-img-top" src={this.user.picture.large} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{`${this.user.name.first} ${this.user.name.last}`}</h5>
            <p className="card-text">
              Age : {this.user.dob.age} years old<br/>
              Email : {this.user.email} <br/> 
              Location : {`${this.user.location.street.number} ${this.user.location.street.name}, ${this.user.location.city}, ${this.user.location.country}`} <br/> 
              Phone : {this.user.phone}
            </p>
            <a href="https://randomuser.me/" className="btn btn-primary">Another Random Person</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Appuser;