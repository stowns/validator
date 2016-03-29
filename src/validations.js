import _ from 'lodash';

class Validations {

  constructor() {
  }

  email(value) {
    let errMessage = "Not a valid email address";

    let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!re.test(value)) { return errMessage; }
    
    return true;
  }

  notEmail(value) {
    let errMessage = "String is an email address";

    let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (re.test(value)) { return errMessage; }
    
    return true;
  }

  minLength(value, targetValue) {
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

  exactLength(value, targetValue) {
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

  maxLength(value, targetValue) {
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

  lengthRange(value, targetValue) {

  }

  required(value) {
    let errMessage = "This is required";

    if (_.isNumber(value)) { return true; }
    if (_.isBoolean(value)) { return true; }
    if (_.isEmpty(value)) { return errMessage; }

    return true;
  }
}

export default Validations;