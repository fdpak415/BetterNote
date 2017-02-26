import React from 'react';
import {withRouter} from 'react-router';


class NotebookForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      author_id: this.props.userId
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const notebook = this.state
    this.props.createNotebook({notebook})
    this.props.router.push("/")
  }

  update(property) {
    return e => {
      this.setState({[property]: e.currentTarget.value});
    }
  }

  cancelButton(e) {
    e.preventDefault();
    this.props.router.push('/');
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="New Notebook..."
            value={this.state.title}
            onChange={this.update('title')}></input>

          <br></br>

          <input
            type="submit"
            value="Create Notebook"></input>

          <input
            type="button"
            value="Cancel"
            onClick={this.cancelButton}></input>

        </form>
      </div>
    )
  }
}

export default withRouter(NotebookForm);
