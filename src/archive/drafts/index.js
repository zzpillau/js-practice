import _ from 'lodash';

const getFunction = (obj, key, defaultValue) => _.get(obj, key, defaultValue);

export default getFunction;
