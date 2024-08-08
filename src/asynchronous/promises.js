import fsp from 'fs/promises';

const path = (name) => `src/asynchronous/__fixtures__/arrays/${name}`;
const filePaths = [path('dir'), path('dir2'), path('first.txt'), path('second.txt'), path('undefinied')];

// const getTypes = (filePaths) => {

// const filePaths = /* список путей до файлов */;

// Эта функция принимает на вход необязательное значение,
// которое появится в promise.then((<тут>) => ...)
// Начальное значение в данном случае – массив,
// в котором накапливаются данные из файлов
const initPromise = Promise.resolve([]);

// В then отдается функция, а не ее вызов!
const promise = filePaths.reduce((acc, path) => {
  // Аккумулятор – всегда промис, внутри которого массив с содержимым файлов
  const newAcc = acc.then((contents) => {
    // Читаем файл и добавляем его данные в аккумулятор
  
    return fsp.stat(path, 'utf-8')
      .then((stats) => stats.isDirectory() ? contents.concat('directory') : contents.concat('file'))
      .catch(() => contents.concat('null'));
    })
  return newAcc;
}, initPromise);

// return promise;
// }

// Если надо, продолжаем обработку
promise.then((contents) => console.log(contents));


// const getTypes = (pathes) => {
//   const initPromise = Promise.resolve([]);
//   const result = pathes.reduce((acc, pathy) => {

//     const newAcc = acc.then((contents) => {
//       console.log(contents);
//       fsp.stat(pathy)
//         .then((stats) => {
//           if (!!stats.isDirectory())
//             {contents.concat('directory')}
//           else {contents.concat('file')}})
//     });
//     return newAcc;
//   }, initPromise);
//   return result;
// }


// // fsp.stat(path('first.txt')).then((stats) => stats.isDirectory() ? console.log('directory') : console.log('file'));

// getTypes(pathes).then(console.log);



