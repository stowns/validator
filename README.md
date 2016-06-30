# Validator  
A simple validation lib

```
import Validator from 'validator';

let validations = {
  minLength: 6,
  maxLength: 12,
  required: true
};

let result = Validator.test("hello", validations); // true

let validationsBatch = {
  key1: { email: true },
  key2: { required: true }
};

let resultBatch = Validator.test({key1: "hello@world.com", key2: "I'm here"}, validationsBatch); // true
```
