const wrap = async (previousActions, instance, method, ...args) => {
  await previousActions;
  await instance[method](...args);
}

const getObjectMethods = (instance) => {
  const prototype = Object.getPrototypeOf(instance);
  const methods = Object.getOwnPropertyNames(prototype)
    .filter(property => typeof prototype[property] === 'function')
    .filter(property => property !== 'constructor');
    return methods;
}

const API = (previousActions = Promise.resolve(), instance) => {
  const methods = getObjectMethods(instance);
  const result = {};
  methods.forEach(method => {
    result[method] = (...args) => API(wrap(previousActions, instance, method, ...args), instance)
  });
  return result;
}

const fluentify = (instance) => API(undefined, instance);

module.exports = fluentify;