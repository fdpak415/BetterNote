import React from 'react';
import {withRouter} from 'react-router';
import {Image, Glyphicon, Modal, Button} from 'react-bootstrap';
import UserModal from './user_modal';

class Greeting extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showModal: false
    }

  this.handleClick = this.handleClick.bind(this);
  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
  }

  componentDidUpdate() {
    this._ensureLoggedIn();
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
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
    const user = this.props.currentUser
    if (user) {
      return (
        <div onClick={this.open} className="greeting-container">
          <Glyphicon glyph="user"></Glyphicon>

          <Modal bsSize={"sm"} show={this.state.showModal} onHide={this.close}>
            <Modal.Header>
              <Glyphicon glyph="user"></Glyphicon>
              <Modal.Title>{user.email}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Button bsStyle="danger" onClick={this.props.userLogout}>
                Logout
              </Button>
            </Modal.Body>
          </Modal>
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
