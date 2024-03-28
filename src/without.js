import _ from 'lodash';

const without = (array, ...values) => {
  return _.without(array, ...values);
};

export default without;
