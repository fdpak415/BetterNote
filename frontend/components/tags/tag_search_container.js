import {connect} from 'react-redux';
import TagSearch from './tag_search';
import {fetchTags} from '../../actions/tag_actions';

const mapStateToProps = ({tags}) => ({
  tags: tags
})

const mapDispatchToProps = dispatch => ({
  fetchTags: () => dispatch(fetchTags())
})

export default connect(mapStateToProps, mapDispatchToProps)(TagSearch);
