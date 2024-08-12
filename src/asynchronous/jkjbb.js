import fs from 'fs';

const compare = (data1, data2) => {
  console.log(data1, 'data1')
  console.log(data2, 'data2')
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  // BEGIN (write your solution here)

  

  // END
};


// BEGIN (write your solution here)
const diff = (path1, path2, cb) => {
  fs.readFile(path1, 'utf-8', (err1, content1) => {
    if (err1) {
      console.log(err1)
      cb(err1);
      return;
    }
    console.log(content1, 'content1')
    fs.readFile(path2, 'utf-8', (err2, content2) => {
      if (err2) {
        console.log(err2)
        cb(err2);
        return;
      }
      console.log(content2, 'content2')
      cb(null, compare(content1, content2));
    })
  })
}
export default diff;
// END


const file1 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file1'
const file2 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file2'
const file3 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file3'
const file4 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file4'
const file5 = '/home/zzpillau/js-practice/src/asynchronous/fixtures/file5'


// diff(file4, file5, (err, data) => console.log(data));
// diff(file1, file3, (err, data) => console.log(data));


const read1 = fs.readFileSync(file1, 'utf-8');
const read2 = fs.readFileSync(file3, 'utf-8');


console.log([read1, read2])

// console.log(compare(read1, read2))
