import { connect } from 'react-redux';
import { reset } from 'redux-form';
import ResetFormSubmit from './ResetFormSubmit';

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  reset: () => reset('reset'),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetFormSubmit);
