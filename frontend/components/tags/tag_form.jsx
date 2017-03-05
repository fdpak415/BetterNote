import React from 'react';

class TagInput extends React.Component {
  render() {
    return <input
      type="text"
      placeholder="New Tag..."
      onBlur={e => this.props.saveTag(e)}></input>

  }
}

class TagForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      canInput: false,
      documents: []
    }

    this.add = this.add.bind(this);
    this.saveTag = this.saveTag.bind(this);

  }

  saveTag(e) {
    const tag = {name: e.currentTarget.value}
    this.props.addTag(tag);
    this.setState({['canInput']: true});
  }

  add() {
    const documents = this.state.documents.concat(TagInput);
    this.setState({ documents });
  }


  render() {
    const documents = this.state.documents.map((Element, index) => {
      return <Element key={ index } index={ index } saveTag={this.saveTag} />
    });

    return(
      <div>
        <button type="button" onClick={ this.add }>+</button>
        {documents}
      </div>
    )
  }
}

export default TagForm;
