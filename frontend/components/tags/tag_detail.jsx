import React from 'react';
import {withRouter} from 'react-router';

class TagDetail extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const tags = Object.values(this.props.note.tags)
    if (this.props.isFetched === true) {
      return(
        <div>
          {tags.map((tag, i) => <span key={i}>{tag.name}  </span>)}
        </div>
      )
    } else {
      return(
        <div>Loading...</div>
      )
    }

    }
}

export default withRouter(TagDetail);
