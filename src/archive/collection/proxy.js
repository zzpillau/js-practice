import _ from 'lodash';

const createObj = (obj = {}) => {
  const handlers = {
    get: (target, prop) => {
      console.log(target);

 
      const iter = (target, depth) => {

        console.log('going to get', prop);


        console.log('iter start', prop);

          const cb = (obj) => {

          console.log('cb start', prop);

          if (!(prop in obj)) {

            console.log('NO PROP', prop);

            return createObj();

          }
          console.log(prop in obj, prop);

          console.log(obj, 'obj');

          return obj[prop];

        }
   
        if(!_.isObject(prop)) {
          return cb(target);
        } 

        console.log('depth!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', depth);


        return iter(prop, depth += 1)
        

      }

      return iter(target, 0)

    }
  };
  
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

console.log(obj.key2.key3);

// obj.key2.key1.key0



// obj.obj.obj