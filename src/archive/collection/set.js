const protect = (obj) => {

  const isPrivat = (prop) => prop.startsWith('_');

  const handler = {
    set: (target, prop, value) => {
      if (typeof prop === 'function' && !isPrivat(prop)) {
        target[prop].bind(target);
        return true;
      }
      if (!isPrivat(prop)) {
        target[prop] = value;
        return true;
      }
      throw new Error('Set Error');
    },
    get: (target, prop) => {
      if (typeof prop === 'function' && !isPrivat(prop)) {
        return target[prop].bind(target);
      }
      if (!isPrivat(prop)) {
        return target[prop];
      }
      throw new Error('Set Error');
    },
  }
  return new Proxy(obj, handler);
}

export default protect;
