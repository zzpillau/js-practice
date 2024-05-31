const hasNumber = (string) => (string.search(/\d/) !== -1);


class PasswordValidator {

  constructor(options) {
    this.containNumbers = true;
    this.minLength = 8;
  }

  this.options = {...defaultOptions, ...options}
    
}

error = {
  minLength: 'too small',
  containNumbers: 'should contain at least one number',
}

validate(password) {
  const result = {};
  return result;
}


}

const validator = new PasswordValidator({ containNumbers: false });
validator.validate('qwertyui'); // {}
validator.validate('qwerty'); // { minLength: 'too small' }



// minLength: 'too small',
// containNumbers: 'should contain at least one number',

// containNumbers: false
// containNumbers: true

// minLength: false
// minLength: true


