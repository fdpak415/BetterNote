import React from 'react';
import values from 'lodash/values';

class SearchFormList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger;
      return (
          <div>
            <input
              type="text"
              placeholder="Search Notes..."
              value={value}
              onChange={this.onChange}></input>
            {this.props.renderSuggestions(this.props.suggestions)}
          </div>
      )
  }
}

export default SearchFormList;
