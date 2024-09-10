import fs from 'fs';

const write = (path, data, cb) => {
  fs.writeFile(path, data, (err) => {
    cb(err);
  })
}

const file = '/home/zzpillau/js-practice/src/drafts/writeHere.txt';
const data = 'abyrvalg';

write(file, data, (err) => {
    console.log('succ');
    console.log(err);
  });



const read = (path, cb) => {
    fs.readFile(path, 'utf-8', (err, content) => {
      cb(err, content);
    })
  }
    
  read(file, (err, content) => {
      console.log(content);
      console.log(err);
    });
  
// ________________________________________________________________________________________________________


const compareFileSizes = (path1, path2, cb) => {
    fs.stat(path1, (err, stats1) => {
        fs.stat(path2, (err, stats2) => {
            cb(err, Math.sign(stats1.size - stats2.size))
        })
    })

}

const file1 = '/home/zzpillau/js-practice/src/drafts/closure.js';
const file2 = '/home/zzpillau/js-practice/src/drafts/index.js';


    compareFileSizes(file1, file2, (err, result) => console.log(result));

// ____________________________________________

const move = (output, input, cb) => {
  fs.readFile(output, 'utf-8', (err, content) => {
    if (err) {
        cb(err);
        return;
    }
      fs.writeFile(input, content, (err) => {
          cb(err);
          return;
      })
      fs.unlink(output, (err) => {
              cb(err)
      })
  })
}


// move(file1, file2, (error) => {
//     if (error) {
//       console.log('oops');
//       return;
//     }
//     console.log('yes!');
//   });