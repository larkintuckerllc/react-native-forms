import { reduxForm } from 'redux-form';
import HelloFormView from './HelloFormView';

const FORM = 'todo';

const HelloFormRF = reduxForm({
  form: FORM,
})(HelloFormView);

export default HelloFormRF;
