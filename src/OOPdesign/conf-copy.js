export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: 200,
  };

  // BEGIN (write your solution here)
  constructor(options = {}) {
    this.options = options;
  }

  truncate(text, methodOptions) {
    const actualOpt = { ...Truncater.defaultOptions, ...this.options, ...methodOptions };
    const substr = text.substr(0, actualOpt.length);
    return text.length > actualOpt.length ? `${substr}${actualOpt.separator}` : substr;
  }


  // END
}


const text = 'one two';

const truncater = new Truncater();

console.log(truncater.truncate(text, {}));

// // class Truncater {
// //   constructor(options = {}) {
// //     this.options = options;
// //   }

// //   static defaultOptions = {
// //     separator: '',
// //     length: 0,
// //   }

// //   truncate(text, methodOptions) {
// //     const actualOpt = { ...Truncater.defaultOptions, ...this.options, ...methodOptions };
// //     const substr = text.length < actualOpt.length ? text.substr(0, actualOpt.length - 1) : text;
// //     return `${substr}${actualOpt.separator}`
// //   }
// // }






// class PasswordValidator {
//   constructor(options = {}) {
//     this.options = options;
//   }

//   static defaultOptions = {
//     minLength: 8,
//     containNumbers: true,
//   }

//   validate(value) {
//     const actualOpt = { ...PasswordValidator.defaultOptions, ...this.options }
//     console.log(actualOpt);

//     const errorLog = {};

//     if (value.length < actualOpt.minLength) {
//       errorLog.minLength = 'too small';
//     }

//     if (actualOpt.containNumbers === true && (!hasNumber(value))) {
//       errorLog.containNumbers = 'should contain at least one number';
//     }

//     return errorLog;

//   }



// }



// const validator = new PasswordValidator({ containNumbers: false });

// console.log(validator.validate());