import React from 'react';
import {withRouter} from 'react-router';

class Greeting extends React.Component {
  constructor(props){
    super(props);

  this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate() {
    this._ensureLoggedIn();
  }

  _ensureLoggedIn() {
    if (!this.props.currentUser) {
      this.props.router.replace('/login');
    }
  }

  handleClick() {
    this.props.logout();
    this.props.userLogout();
  }

  render() {

    if (this.props.currentUser) {
      return (
        <div className="greeting-container">
          <h3>Welcome, {this.props.currentUser.email}</h3>
          <button
            onClick={this.handleClick}>Logout</button>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
}


export default withRouter(Greeting);
