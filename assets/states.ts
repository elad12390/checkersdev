export const keysToLowerCase = (obj) => {
  if (!obj) { return obj; }
  if (obj instanceof Array) {
    // tslint:disable-next-line:forin
    for (let i in obj) {
      obj[i] = keysToLowerCase(obj[i]);
    }
  }
  if ((typeof(obj) === 'string' || typeof(obj) === 'number' || typeof(obj) === 'boolean')) {
    return obj;
  }
  let keys = Object.keys(obj);
  let n = keys.length;
  let lowKey;
  while (n--) {
    let key = keys[n];
    if (key === (lowKey = key.toLowerCase())) {
      continue;
    }
    obj[lowKey] = keysToLowerCase(obj[key]);
    delete obj[key];
  }
  return (obj);
};


