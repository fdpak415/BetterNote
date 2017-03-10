import React from 'react';
import {Link, withRouter} from 'react-router';

class Notebooks extends React.Component {
  constructor(props){
    super(props);

    this.componentWillMount = this.componentWillMount.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
    this.renderNotebooks = this.renderNotebooks.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillMount() {
    this.props.fetchNotebooks()

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notebooks !== this.props.notebooks) {
      this.forceUpdate();
    }
  }

  handleClick(e, book) {
    e.preventDefault();
    this.props.destroyNotebook(book.id);
  }

  handleButton(e, path) {
    e.preventDefault();
    this.props.router.push(path);
  }

  cancelButton(e) {
    e.preventDefault();
    this.props.router.push('/');
  }

  renderNotebooks(notebooks) {
    return (
      <ul>
        {notebooks.map((book, i) =>
        <li key={i}>
          <Link to={`/notes/${book.id}`}>
            <span>{book.title}</span>
          </Link>
          <button
          onClick={e => this.props.handleClick(e, book)}>Delete Notebook</button>
        </li>)}
      </ul>
    )
  }

  render() {
    const notebooks = Object.values(this.props.notebooks)

    return(
      <div>
        <h2>Notebooks</h2>
        <br></br>

        <button onClick={e => this.handleButton(e, '/notebook/new')}>New Notebook</button>

        <br></br>
        {this.renderNotebooks(notebooks)}

        <br></br>

          <input
            type="button"
            value="Cancel"
            onClick={this.cancelButton}></input>
      </div>
    )
  }
}

  export default withRouter(Notebooks);
