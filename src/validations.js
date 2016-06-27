import _ from 'lodash';

class Validations {

  constructor() {
  }

  static email(value) {
    let errMessage = "Not a valid email address";

    let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!re.test(value)) { return errMessage; }

    return true;
  }

  static notEmail(value) {
    let errMessage = "Should not be an email address";

    let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (re.test(value)) { return errMessage; }

    return true;
  }

  static minLength(value, targetValue) {
    let val = value;
    if (_.isNumber(val)) { val = value.toString(); }

    if (!_.isString(val)) {
      return "Invalid value for minLength";
    }

    if (val.length < targetValue) {
      return "Value must be at least " + targetValue + " character(s) long";
    }

    return true;
  }

  static exactLength(value, targetValue) {
    let val = value;
    if (_.isNumber(val)) { val = value.toString(); }

    if (!_.isString(val)) {
      return "Invalid value for length";
    }

    if (val.length != targetValue) {
      return "Value must be exactly " + targetValue + " character(s) long";
    }

    return true;
  }

  static maxLength(value, targetValue) {
    let val = value;
    if (_.isNumber(val)) { val = value.toString(); }

    if (!_.isString(val)) {
      return "Invalid value for maxLength";
    }

    if (val.length > targetValue) {
      return "Value must be less than or equal to " + targetValue + " character(s) long";
    }

    return true;
  }

  static lengthRange(value, targetValue) {

  }

  static required(value) {
    let errMessage = "This is required";

    if (_.isNumber(value)) { return true; }
    if (_.isBoolean(value)) { return true; }
    if (_.isEmpty(value)) { return errMessage; }

    return true;
  }
}

export default Validations;
