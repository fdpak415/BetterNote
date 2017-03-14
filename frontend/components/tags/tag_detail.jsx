import React from 'react';

class TagDetail extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    const tags = Object.values(this.props.note.tags)

    return(
      <div>
        {tags.map((tag, i) => <span key={i}>{tag.name}  </span>)}
      </div>
    )
  }
}

export default TagDetail;
