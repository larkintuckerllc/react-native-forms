import { reduxForm } from 'redux-form';
import SimpleFormView from './SimpleFormView';

const FORM = 'simple';

const SimpleFormRF = reduxForm({
  form: FORM,
})(SimpleFormView);

export default SimpleFormRF;
