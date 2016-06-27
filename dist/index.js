'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _validations = require('./validations');

var _validations2 = _interopRequireDefault(_validations);

var Validator = (function () {
  function Validator() {
    _classCallCheck(this, Validator);

    this.validations = new _validations2['default']();
  }

  _createClass(Validator, [{
    key: 'test',
    value: function test(value, props) {
      var _this = this;

      var failures = [];

      _lodash2['default'].forEach(props, function (targetValue, validationMethod) {
        var result = _this.validations[validationMethod](value, targetValue);
        if (result !== true) {
          failures.push(result);
        }
      });

      if (_lodash2['default'].isEmpty(failures)) {
        return true;
      } else {
        return failures;
      }
    }
  }], [{
    key: 'test',
    value: function test(value, props) {
      var _this2 = this;

      var failures = [];

      _lodash2['default'].forEach(props, function (targetValue, validationMethod) {
        var result = _this2.validations[validationMethod](value, targetValue);
        if (result !== true) {
          failures.push(result);
        }
      });

      if (_lodash2['default'].isEmpty(failures)) {
        return true;
      } else {
        return failures;
      }
    }
  }]);

  return Validator;
})();

exports['default'] = Validator;
module.exports = exports['default'];