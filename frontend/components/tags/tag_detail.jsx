import React from 'react';
import {withRouter} from 'react-router';
import {Glyphicon} from 'react-bootstrap';

class TagDetail extends React.Component {
  constructor(props){
    super(props);


  }

  render() {
    const tags = Object.values(this.props.note.tags)

      return(
        <div><Glyphicon glyph="tags" />&nbsp;
          {tags.map((tag, i) => <span key={i}>{tag.name}  </span>)}
        </div>
      )
    }
}

export default withRouter(TagDetail);
