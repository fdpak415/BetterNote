import React from 'react';
import values from 'lodash/values';
import {Link, withRouter} from 'react-router';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: Object.values(this.props.notes)
    }

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchNotes();
  }

  onChange(e) {
    this.setState({
      value: e.currentTarget.value
    });
    this.onSuggestionsFetchRequested(e.currentTarget.value);
  };

  getSuggestions(value) {
    const noteList = Object.values(this.props.notes) || [];
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
            </li>)}
          </ul>
    )
  };


  render() {
    const {value, suggestions } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Search Notes..."
          value={value}
          onChange={this.onChange}></input>

        {this.renderSuggestions(suggestions)}

      </div>
    );
  }
}

export default withRouter(SearchForm);
