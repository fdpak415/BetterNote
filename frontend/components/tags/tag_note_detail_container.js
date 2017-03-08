import {connect} from 'react-redux';
import TagNoteDetail from './tag_note_detail';
import {fetchTag} from '../../actions/tag_actions';


const mapStateToProps = ({tags}) => ({
  tagDetail: tags,
})

const mapDispatchToProps = dispatch => ({
  fetchTag: (id) => dispatch(fetchTag(id)),

})

export default connect(mapStateToProps, mapDispatchToProps)(TagNoteDetail);
