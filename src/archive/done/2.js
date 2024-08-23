import fs from 'fs';

const compareFileSizes = (filepath1, filepath2, cb) => {


  fs.stat(filepath1, (_err, stats1) => {
    fs.stat(filepath2, (_err, stats2) => {
      cb(null, Math.sign(stats1.size - stats2.size))
    })
  })

}

compareFileSizes('src/asynchronous/index.txt', 'src/asynchronous/index-copy.txt', ()=>{console.log(result);});