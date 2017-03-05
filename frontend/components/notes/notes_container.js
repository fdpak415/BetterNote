import {connect} from 'react-redux';
import Notes from './notes';
import {fetchTag} from '../../actions/tag_actions';

const mapStateToProps = (state) => {

  return {
  notes: state.tagDetail.notes
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTag: (id) => dispatch(fetchTag(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
