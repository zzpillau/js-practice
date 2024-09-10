const hasNumber = (string) => (string.search(/\d/) !== -1);

class PasswordValidator {
  constructor(options = {}) {
    this.options = options;
  }

  static defaultOptions = {
    minLength: 8,
    containNumbers: true,
  }

  validate(value) {
    const actualOpt = { ...PasswordValidator.defaultOptions, ...this.options }
    console.log(actualOpt);

    const errorLog = {};

    if (value.length < actualOpt.minLength) {
      errorLog.minLength = 'too small';
    }

    if (actualOpt.containNumbers === true && (!hasNumber(value))) {
      errorLog.containNumbers = 'should contain at least one number';
    }

    return errorLog;

  }



}



const validator = new PasswordValidator({ containNumbers: false });

console.log(validator.validate());