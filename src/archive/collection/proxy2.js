import _ from 'lodash';

const createObj = (obj = {}) => {
  const handlers = {
    get: (target, prop) => {
  
      const value = target[prop];

      if (_.isObject(value)) {
        return createObj(value)
      }

      if (value) {
        return value;
      }

      return createObj()


      }
    
  }

  return new Proxy(obj, handlers)

};

const obj = createObj({
  key: {
    key1: 'new',      
  }, 
  
  key2: {
    key3: {
      key4: 'value3',
    },
  },
});


// console.log(obj.key2);

// код корректно продолжает работу:

// console.log(obj.key.key1);

// console.log(obj.key0);

console.log(obj.key2.key3.key4);
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
console.log(obj.key2.key3.key8);
console.log('**********************************************');
console.log(obj.obj.obj);

// obj.key2.key1.key0



// obj.obj.obj