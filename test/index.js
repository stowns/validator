var expect = require('chai').expect,
    Validator = require('../dist/index');

var validator = new Validator();
describe('Validator Unit Tests', function () {
  
  describe('required()', function () {
    var props = {required: true};

    it('should fail', function () {
      var emptyTest = validator.test('', props);
      var nullTest = validator.test(null, props);
      var objectTest = validator.test({}, props);

      expect(emptyTest.length).to.equal(1);
      expect(emptyTest[0]).to.equal("This is required");
      expect(nullTest.length).to.equal(1);
      expect(nullTest[0]).to.equal("This is required");
      expect(objectTest.length).to.equal(1);
      expect(objectTest[0]).to.equal("This is required");
    });

    it('should pass', function () {
      var stringTest = validator.test('hello', props);
      var numberTest = validator.test(1, props);
      var objectTest = validator.test({hello: 'world'});
      var booleanTest = validator.test(true, props);

      expect(stringTest).to.equal(true);
      expect(numberTest).to.equal(true);
      expect(objectTest).to.equal(true);
      expect(booleanTest).to.equal(true);
    });

  });

  describe('minLength()', function () {
      var props = {minLength: 6};

      it('should fail', function () {
        var stringTest = validator.test("hello", props);
        var numberTest = validator.test(12345, props);
        var invalidTest = validator.test({}, props);
        var invalidTest2 = validator.test(true, props);

        expect(invalidTest.length).to.equal(1);
        expect(invalidTest2.length).to.equal(1);
        expect(stringTest.length).to.equal(1);
        expect(numberTest.length).to.equal(1);
        expect(invalidTest[0]).to.equal("Invalid value for minLength");
        expect(invalidTest2[0]).to.equal("Invalid value for minLength");
        expect(stringTest[0]).to.equal("Value must be at least 6 character(s) long");
        expect(numberTest[0]).to.equal("Value must be at least 6 character(s) long");
      });

      it('should pass', function () {
        var stringTest = validator.test("helloworld", props);
        var numberTest = validator.test(123456, props);

        expect(stringTest).to.equal(true);
        expect(numberTest).to.equal(true);
      });

    });

    describe('maxLength()', function () {
      var props = {maxLength: 3};

      it('should fail', function () {
        var stringTest = validator.test("hello", props);
        var numberTest = validator.test(12345, props);
        var invalidTest = validator.test({}, props);
        var invalidTest2 = validator.test(true, props);

        expect(invalidTest.length).to.equal(1);
        expect(invalidTest2.length).to.equal(1);
        expect(stringTest.length).to.equal(1);
        expect(numberTest.length).to.equal(1);
        expect(invalidTest[0]).to.equal("Invalid value for maxLength");
        expect(invalidTest2[0]).to.equal("Invalid value for maxLength");
        expect(stringTest[0]).to.equal("Value must be less than or equal to 3 character(s) long");
        expect(numberTest[0]).to.equal("Value must be less than or equal to 3 character(s) long");
      });

      it('should pass', function () {
        var stringTest = validator.test("hey", props);
        var numberTest = validator.test(123, props);

        expect(stringTest).to.equal(true);
        expect(numberTest).to.equal(true);
      });

    });

    describe('email()', function () {
      var props = {email: true};

      it('should fail', function () {
        var stringTest = validator.test("hello", props);
        var numberTest = validator.test(12345, props);
        var objectTest = validator.test({}, props);
        var boolTest = validator.test(true, props);

        expect(stringTest.length).to.equal(1);
        expect(numberTest.length).to.equal(1);
        expect(stringTest.length).to.equal(1);
        expect(objectTest.length).to.equal(1);
        expect(boolTest.length).to.equal(1);
        expect(stringTest[0]).to.equal("Not a valid email address");
        expect(numberTest[0]).to.equal("Not a valid email address");
        expect(objectTest[0]).to.equal("Not a valid email address");
        expect(boolTest[0]).to.equal("Not a valid email address");
      });

      it('should pass', function () {
        var stringTest = validator.test("hey@gmail.com", props);

        expect(stringTest).to.equal(true);
      });

    });


}); // end describe Train api