const magic = (...nums) => {

  
  console.log(nums);
  

  const sum = (coll) => coll
    .reduce((acc, el) => acc = acc + el, 0);

    let summm = sum(nums)


  const inner = (...args) => { 
console.log(inner.valueOf(), 'prevInner');



  return magic(...args.concat(inner.valueOf()))
  }

  inner.valueOf = () => summm;

 
console.log('iter>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><');

  return inner;

} 

// magic() == 0; // true
// magic(5, 2, -8) == -1; // true
// magic(1, 2)(3, 4, 5)(6)(7, 10) == 38; // true
// magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13; // true

console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) == 38);

console.log((magic(1, 2)(3, 4, 5)(6)(7, 10) - 8) == 30);

console.log(magic(1, 2)(3, 4, 5)(6)(7, 10) + 1);


