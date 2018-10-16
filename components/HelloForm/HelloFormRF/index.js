import { reduxForm } from 'redux-form';
import HelloFormView from './HelloFormView';

const FORM = 'hello';

const HelloFormRF = reduxForm({
  form: FORM,
})(HelloFormView);

export default HelloFormRF;
