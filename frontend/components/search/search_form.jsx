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
  }

  componentWillMount() {
    this.props.fetchNotes()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.key !== this.props.location.key) {
      this.props.fetchNotes();
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
    const noteList = Object.values(this.props.notes)
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
      suggestions.splice(-1);
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


  render() {
    const {isFetching} = this.props;
    debugger;
    return(
      <div>
        {isFetching &&
          <div>Loading...</div>
        }
        {!isFetching &&
        <SearchFormList suggestions={this.state.suggestions} renderSuggestions={this.renderSuggestions}/>}
      </div>
    )

  }
}

export default withRouter(SearchForm);
