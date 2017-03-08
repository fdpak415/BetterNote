import React from 'react';

class TagInput2 extends React.Component {
  render() {
    return <input
      type="text"
      placeholder="New Tag..."
      onBlur={e => this.props.createTag(this.props.tag)}
      onChange={this.props.update('tag')}></input>
  }
}

class TagForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      canInput: false,
      documents: [],
      tag: {name: ''}

    }

    this.add = this.add.bind(this);
    this.saveTag = this.saveTag.bind(this);
    this.update = this.update.bind(this);
  }

  update(property) {

    return e => {
      this.setState({[property]: {name: e.currentTarget.value,
                    note_id: parseInt(this.props.noteDetail.id)}})
    }
  }

  saveTag(e) {
    const tag = {name: e.currentTarget.value}
    this.props.addTag(tag);
    this.setState({['canInput']: true});
  }

  add() {
    const documents = this.state.documents.concat(TagInput2);
    this.setState({ documents });
  }


  render() {
    const documents = this.state.documents.map((Element, index) => {
      return <Element key={ index } index={ index } createTag={this.props.createTag} update={this.update} tag={this.state.tag}/>
    });

    return(
      <div>
        <button type="button" onClick={ this.add }>+</button>
        {documents}
      </div>
    )
  }
}

export default TagForm2;
