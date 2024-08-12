const asyncFilter = (coll, fn, cb) => {
  if (coll.length === 0) {
    cb(coll);
    return;
  }
  const iter = (([head, ...rest], acc) => {
    if (fn(head) == true) {
    const newAcc = [...acc, fn(head)];
    if (rest.length === 0) {
      cb(newAcc);
      return
    }
    setTimeout(fn, 0, rest, newAcc);
  }
  cb(acc);
  return
  })
  iter(coll, []);
}