import React from 'react';
import {withRouter} from 'react-router';

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
      <div>
        <ul>
          <li>
            <button onClick={e => this.handleClick(e, '/note/new')}>New Note</button>
          </li>

          <li>
            <button onClick={e => this.handleClick(e, '/notebook/new')}>New Notebook</button>
          </li>

          <li>
            <button onClick={e => this.handleClick(e, '/search/notes')}>Search Notes</button>
          </li>

          <li>
            <button onClick={e => this.handleClick(e, '/search/tags')}>Search Tags</button>
          </li>
        </ul>
      </div>

    )
  }
}

export default withRouter(Sidebar);
