var expect = require('chai').expect,
    Validator = require('../dist/index');

describe('Validator Unit Tests', function () {

  describe('required()', function () {
    var props = {required: true};

    it('should fail', function () {
      var emptyTest = Validator.test('', props);
      var nullTest = Validator.test(null, props);
      var objectTest = Validator.test({}, props);

      expect(emptyTest.length).to.equal(1);
      expect(emptyTest[0]).to.equal("This is required");
      expect(nullTest.length).to.equal(1);
      expect(nullTest[0]).to.equal("This is required");
      expect(objectTest.length).to.equal(1);
      expect(objectTest[0]).to.equal("This is required");
    });

    it('should pass', function () {
      var stringTest = Validator.test('hello', props);
      var numberTest = Validator.test(1, props);
      var objectTest = Validator.test({hello: 'world'});
      var booleanTest = Validator.test(true, props);

      expect(stringTest).to.equal(true);
      expect(numberTest).to.equal(true);
      expect(objectTest).to.equal(true);
      expect(booleanTest).to.equal(true);
    });

  });

  describe('minLength()', function () {
      var props = {minLength: 6};

      it('should fail', function () {
        var stringTest = Validator.test("hello", props);
        var numberTest = Validator.test(12345, props);
        var invalidTest = Validator.test({}, props);
        var invalidTest2 = Validator.test(true, props);

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
        var stringTest = Validator.test("helloworld", props);
        var numberTest = Validator.test(123456, props);

        expect(stringTest).to.equal(true);
        expect(numberTest).to.equal(true);
      });

    });

    describe('exactLength()', function () {
      var props = {exactLength: 5};

      it('should fail', function () {
        var stringTest = Validator.test("hellothere", props);
        var numberTest = Validator.test(123, props);
        var invalidTest = Validator.test({}, props);
        var invalidTest2 = Validator.test(true, props);

        expect(invalidTest.length).to.equal(1);
        expect(invalidTest2.length).to.equal(1);
        expect(stringTest.length).to.equal(1);
        expect(numberTest.length).to.equal(1);
        expect(invalidTest[0]).to.equal("Invalid value for length");
        expect(invalidTest2[0]).to.equal("Invalid value for length");
        expect(stringTest[0]).to.equal("Value must be exactly 5 character(s) long");
        expect(numberTest[0]).to.equal("Value must be exactly 5 character(s) long");
      });

      it('should pass', function () {
        var stringTest = Validator.test("hello", props);
        var numberTest = Validator.test(12345, props);

        expect(stringTest).to.equal(true);
        expect(numberTest).to.equal(true);
      });

    });

    describe('maxLength()', function () {
      var props = {maxLength: 3};

      it('should fail', function () {
        var stringTest = Validator.test("hello", props);
        var numberTest = Validator.test(12345, props);
        var invalidTest = Validator.test({}, props);
        var invalidTest2 = Validator.test(true, props);

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
        var stringTest = Validator.test("hey", props);
        var numberTest = Validator.test(123, props);

        expect(stringTest).to.equal(true);
        expect(numberTest).to.equal(true);
      });

    });

    describe('email()', function () {
      var props = {email: true};

      it('should fail', function () {
        var stringTest = Validator.test("hello", props);
        var numberTest = Validator.test(12345, props);
        var objectTest = Validator.test({}, props);
        var boolTest = Validator.test(true, props);

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
        var stringTest = Validator.test("hey@gmail.com", props);

        expect(stringTest).to.equal(true);
      });

    });

    describe('notEmail()', function () {
      var props = {notEmail: true};

      it('should fail', function () {
        var stringTest = Validator.test("hey@gmail.com", props);

        expect(stringTest.length).to.equal(1);
        expect(stringTest[0]).to.equal("Should not be an email address");
      });

      it('should pass', function () {
        var stringTest = Validator.test("hello", props);
        var numberTest = Validator.test(12345, props);
        var objectTest = Validator.test({}, props);
        var boolTest = Validator.test(true, props);

        expect(stringTest).to.equal(true);
        expect(numberTest).to.equal(true);
        expect(stringTest).to.equal(true);
        expect(objectTest).to.equal(true);
        expect(boolTest).to.equal(true);
      });
    });

    describe('testBatch()', function () {
      var props = {
        key1: {notEmail: true},
        key2: {email: true, required: true}
      };

      it('should fail', function () {
        var failures = Validator.testBatch({key1: "not an email"}, props);

        expect(failures).to.be.instanceof(Object);
        expect(failures.key2.length).to.equal(2);
        expect(failures.key2[0]).to.equal("Not a valid email address");
        expect(failures.key2[1]).to.equal("This is required");
      });

      it('should pass', function () {
        var failures = Validator.testBatch({key1: "not an email", key2: "hey@hey.com"}, props);

        expect(failures).to.equal(true);
      });
    });


}); // end describe Train api
