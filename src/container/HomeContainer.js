import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import Home from '../component/Home';
import { fetch_list_data } from '../action/index';
import { selectors_home } from '../selector/index';

const mapStateToProps = (state) => {
  const { list } = selectors_home(state);
  return { list };
};
const actions = {
  fetch_list_data,
};

// Get actions and pass them as props
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
