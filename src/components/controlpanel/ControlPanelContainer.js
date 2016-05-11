import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import ControlPanelComponent from 'components/controlpanel/ControlPanelComponent';


function mapStateToProps(state) {
  const { properties } = state;

  return { properties };
}

function mapDispatchToProps(dispatch) {
  return {
	actions: bindActionCreators(actions, dispatch)
  };
}

const ControlPanelContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ControlPanelComponent);

export default ControlPanelContainer;
