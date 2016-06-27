"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var Validations = (function () {
  function Validations() {
    _classCallCheck(this, Validations);
  }

  _createClass(Validations, null, [{
    key: "email",
    value: function email(value) {
      var errMessage = "Not a valid email address";

      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      if (!re.test(value)) {
        return errMessage;
      }

      return true;
    }
  }, {
    key: "notEmail",
    value: function notEmail(value) {
      var errMessage = "Should not be an email address";

      var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      if (re.test(value)) {
        return errMessage;
      }

      return true;
    }
  }, {
    key: "minLength",
    value: function minLength(value, targetValue) {
      var val = value;
      if (_lodash2["default"].isNumber(val)) {
        val = value.toString();
      }

      if (!_lodash2["default"].isString(val)) {
        return "Invalid value for minLength";
      }

      if (val.length < targetValue) {
        return "Value must be at least " + targetValue + " character(s) long";
      }

      return true;
    }
  }, {
    key: "exactLength",
    value: function exactLength(value, targetValue) {
      var val = value;
      if (_lodash2["default"].isNumber(val)) {
        val = value.toString();
      }

      if (!_lodash2["default"].isString(val)) {
        return "Invalid value for length";
      }

      if (val.length != targetValue) {
        return "Value must be exactly " + targetValue + " character(s) long";
      }

      return true;
    }
  }, {
    key: "maxLength",
    value: function maxLength(value, targetValue) {
      var val = value;
      if (_lodash2["default"].isNumber(val)) {
        val = value.toString();
      }

      if (!_lodash2["default"].isString(val)) {
        return "Invalid value for maxLength";
      }

      if (val.length > targetValue) {
        return "Value must be less than or equal to " + targetValue + " character(s) long";
      }

      return true;
    }
  }, {
    key: "lengthRange",
    value: function lengthRange(value, targetValue) {}
  }, {
    key: "required",
    value: function required(value) {
      var errMessage = "This is required";

      if (_lodash2["default"].isNumber(value)) {
        return true;
      }
      if (_lodash2["default"].isBoolean(value)) {
        return true;
      }
      if (_lodash2["default"].isEmpty(value)) {
        return errMessage;
      }

      return true;
    }
  }]);

  return Validations;
})();

exports["default"] = Validations;
module.exports = exports["default"];