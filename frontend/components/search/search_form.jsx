import React from 'react';
import values from 'lodash/values';
import {Link, withRouter} from 'react-router';
import {FormControl, Glyphicon} from 'react-bootstrap';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: Object.values(this.props.notes),
      hover: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
    this.renderNotes = this.renderNotes.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  componentWillMount() {
    this.props.fetchNotes()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes !== this.props.notes) {
      this.forceUpdate();
    }
  }

  onMouseEnterHandler() {
    this.setState({hover: true});
  }

  onMouseLeaveHandler() {
    this.setState({hover: false});
  }

  onChange(e) {
    this.setState({
      value: e.currentTarget.value
    });
    this.onSuggestionsFetchRequested(e.currentTarget.value);
  };

  handleClick(e, suggestion) {
    e.preventDefault();
    this.props.destroyNote(suggestion.id);
    window.location.reload();
  }

  getSuggestions(value) {
    const noteList =  Object.values(this.props.notes)
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : noteList.filter(note =>
      (note.title.toLowerCase().includes(inputValue)) ||
      (note.body.toLowerCase().includes(inputValue))
  )};

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested( value ) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested()  {
    this.setState({
      suggestions: []
    });

  };

  renderSuggestions(suggestions) {
    if (this.state.value === '') {
      suggestions = Object.values(this.props.notes)
    }

    return (
          <ul className="notes-suggestions">
            {suggestions.map((suggestion, i) =>
            <Link to={`/notes/${suggestion.id}`} style={{ textDecoration: 'none' }} key={i}>
            <li onMouseOver={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} key={i}>

                <span className="span1">{suggestion.title}</span>

                <span className="span2">{suggestion.date}</span>

                <br></br> <span className="span3">{suggestion.body}</span>

              <button className="trashcan" onClick={e => this.handleClick(e, suggestion)}><Glyphicon glyph="trash"></Glyphicon></button>
            </li>
            </Link>)}
          </ul>
    )
  };

  cancelButton(e) {
    e.preventDefault();
    this.props.router.push({
      pathname: '/',
      query: 123});
  }

  renderNotes() {
    return(
      <h2>Notes</h2>
    )
  }


  render() {
    const {isFetching} = this.props;
    const {suggestions, value} = this.state;
    if (this.props.routes.path === "/search/notes") {
    return(
      <div>
        <FormControl
          className="search-bar"
          bsSize="large"
          type="text"
          placeholder="Search Notes..."
          value={this.props.value}
          onChange={this.onChange}/>

        {this.renderSuggestions(suggestions)}

        <br></br>

          <input
            type="button"
            value="Cancel"
            onClick={this.cancelButton}></input>

      </div>
    )} else {
      return(
        <div>
          <h1 className="notes-header">Notes</h1>
          <FormControl
            className="search-bar"
            bsSize="large"
            type="text"
            placeholder="Search Notes..."
            value={this.props.value}
            onChange={this.onChange}/>

          <br></br>
          {this.renderSuggestions(suggestions)}
        </div>
      )
    }

  }
}

export default withRouter(SearchForm);
