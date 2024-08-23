import _ from 'lodash';

const getFunction = (obj, key, defaultValue) => {
  return _.get(obj, key, defaultValue);
};

export default getFunction;
