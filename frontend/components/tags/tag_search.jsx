import React from 'react';
import values from 'lodash/values';
import {Link, withRouter} from 'react-router';

class TagSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: Object.values(this.props.tags)
    }

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchTags();
  }

  onChange(e) {
    this.setState({
      value: e.currentTarget.value
    });
    this.onSuggestionsFetchRequested(e.currentTarget.value);
  };

  getSuggestions(value) {
    const tagList = Object.values(this.props.tags) || [];
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : tagList.filter(tag =>
      tag.name.toLowerCase().slice(0, inputLength) === inputValue
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
      suggestions = Object.values(this.props.tags)
    }
    return (
          <ul>
            {suggestions.map((suggestion, i) =>
            <li key={i}>
              <Link to={`/notes/${suggestion.id}`}>
                <span>{suggestion.name}</span>
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
          placeholder="Search Tags..."
          value={value}
          onChange={this.onChange}></input>

        {this.renderSuggestions(suggestions)}

      </div>
    );
  }
}

export default withRouter(TagSearch);
