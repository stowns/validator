import _ from 'lodash';
import Validations from './validations';

class Validator {

  constructor() {
  }

  test(value, validations) {
    let failures = [];

    _.forEach(validations, (targetValue, validationMethod) => {
      let result = Validations[validationMethod](value, targetValue);
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

  testBatch(payload, schema) {
    let failures = {};
    _.forEach(schema, function (validations, key) {
      let result = Validator.test(payload[key], validations);
      if (result !== true) {
        failures[key] = result;
      }
    });

    return _.isEmpty(failures) ? true : failures
  }

  static test(value, validations) {
    let failures = [];

    _.forEach(validations, (targetValue, validationMethod) => {
      let result = Validations[validationMethod](value, targetValue);
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

  static testBatch(payload, schema) {
    let failures = {};
    _.forEach(schema, function (validations, key) {
      let result = Validator.test(payload[key], validations);
      if (result !== true) {
        failures[key] = result;
      }
    });

    return _.isEmpty(failures) ? true : failures
  }
}

export default Validator;
