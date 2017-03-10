import React from 'react';
import values from 'lodash/values';

class SearchFormList extends React.Component {
  constructor(props) {
    super(props);
  }
debugger;
  render() {
      return (
          <div>
            <input
              type="text"
              placeholder="Search Notes..."
              value={this.props.value}
              onChange={this.onChange}></input>
            {this.props.renderSuggestions(this.props.suggestions)}
          </div>
      )
  }
}

export default SearchFormList;
