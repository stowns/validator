import _ from 'lodash';
import Validations from './validations';

class Validator {

  constructor() {
    this.validations = new Validations();
  }

  test(value, props) {
    let failures = [];

    _.forEach(props, (targetValue, validationMethod) => {
      let result = this.validations[validationMethod](value, targetValue);
      if (result !== true) {
        failures.push(result);
      }
    });

    if (_.isEmpty(failures)) {
      return true;
    }
    else {
      return failures;
    }
  }

  static test(value, props) {
    let failures = [];

    _.forEach(props, (targetValue, validationMethod) => {
      let result = this.validations[validationMethod](value, targetValue);
      if (result !== true) {
        failures.push(result);
      }
    });

    if (_.isEmpty(failures)) {
      return true;
    }
    else {
      return failures;
    }
  }
}

export default Validator;
