import React from 'react';
import {withRouter} from 'react-router';
import {Image, Button} from 'react-bootstrap';
import GreetingContainer from '../greeting/greeting_container';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e, path) {
    e.preventDefault();
    this.props.router.push(path);
  }

  render() {
    return(
      <div className="sidebar-div">
        <Image src="https://cdn2.iconfinder.com/data/icons/bitsies/128/Pen-128.png" rounded className="logo"/>

        <ul className="sidebar-button-container">
          <li>
            <Button bsStyle="success" onClick={e => this.handleClick(e, '/note/new')}>New Note</Button>
          </li>

          <li>
            <Button bsStyle="success" onClick={e => this.handleClick(e, '/notebooks')}>Notebooks</Button>
          </li>

          <li>
            <Button bsStyle="success" onClick={e => this.handleClick(e, '/search/tags')}>Search Tags</Button>
          </li>
        </ul>

        <GreetingContainer className="greeting-container"/>
      </div>

    )
  }
}

export default withRouter(Sidebar);
