import React from 'react';
import values from 'lodash/values';
import {Link, withRouter} from 'react-router';
import SearchFormList from './search_form_list';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: Object.values(this.props.notes)
    }
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.renderSuggestions = this.renderSuggestions.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
  }

  componentWillMount() {
    this.props.fetchNotes()

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes !== this.props.notes) {
      this.forceUpdate();
    }

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
  }

  getSuggestions(value) {
    const noteList =  Object.values(this.props.notes)
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : noteList.filter(note =>
      (note.title.toLowerCase().slice(0, inputLength) === inputValue) ||
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
          <ul>
            {suggestions.map((suggestion, i) =>
            <li key={i}>
              <Link to={`/notes/${suggestion.id}`}>
                <span>{suggestion.title}</span>
              </Link>
              <button
              onClick={e => this.handleClick(e, suggestion)}>Delete Note</button>
            </li>)}
          </ul>
    )
  };

  cancelButton(e) {
    e.preventDefault();
    this.props.router.push({
      pathname: '/',
      query: 123});
  }


  render() {
    const {isFetching} = this.props;
    const {suggestions, value} = this.state;
    if (this.props.routes.path === "/search/notes") {
    return(
      <div>
        <input
          type="text"
          placeholder="Search Notes..."
          value={this.props.value}
          onChange={this.onChange}></input>

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
          <input
            type="text"
            placeholder="Search Notes..."
            value={this.props.value}
            onChange={this.onChange}></input>

          {this.renderSuggestions(suggestions)}
        </div>
      )
    }

  }
}

export default withRouter(SearchForm);
