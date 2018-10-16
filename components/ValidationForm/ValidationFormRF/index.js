import { reduxForm } from 'redux-form';
import ValidationFormView from './ValidationFormView';

const FORM = 'validation';

const ValidationFormRF = reduxForm({
  form: FORM,
})(ValidationFormView);

export default ValidationFormRF;
