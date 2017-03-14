import React from 'react';
import {withRouter} from 'react-router';
import NotesIndex from './notes_index';
import {fetchTag} from '../../util/tag_api_util';

class Notes extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      notes: ''
    }

    this.componentWillMount = this.componentWillMount.bind(this);
  }

    componentWillMount(){
      fetchTag(parseInt(this.props.params.tagId)).done(data => {
        this.setState({notes: data})
      })
      }

  render() {
    const notes = this.state.notes.notes

    return(
      <div>
        {this.state.notes ?
          <div><NotesIndex notes={notes} tagDetail={this.state.notes} /></div>
        :
          <div>Loading...</div>}
      </div>
    )
  }
}

export default withRouter(Notes);
