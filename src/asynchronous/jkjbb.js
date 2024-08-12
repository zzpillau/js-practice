import fs from 'fs';

const compare = (data1, data2) => {

  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  // console.log(lines1.length, 'length1');
  // console.log(lines2.length, 'length2');

  const lengthDiff = lines1.length - lines2.length;
  const count = Math.abs(lengthDiff);

  const addNull = (data, nullCount) => {
    for (let i = 0; i < nullCount; i++) {
      data.push(null);
    }
    return data;
  }

  const normLines1 = lines1;
  const normLines2 = lines2;

  if (lengthDiff < 0) {
    addNull(normLines1, count);
  } else if (lengthDiff > 0) {
    addNull(normLines2, count);
  }

  // console.log(normLines1, normLines2);

  return normLines1
  .map((line, i) => {
    if (line === normLines2[i]) {
      return;
    }
    return [line, normLines2[i]];
  })
  .filter((el) => el);

};


  // BEGIN (write your solution here)
  // const normalizedEmptyStr = (str) => (!str && str !== '' ? null : str);

  

  // return lines1
  //   .map((line, i) => {
  //     const normLine1 = normalizedEmptyStr(line);
  //     const normLine2 = normalizedEmptyStr(lines2[i]);

  //       if (normLine1 === normLine2) {
  //         return;
  //       }
  //       return [normLine1, normLine2];
  //     })
  //   .filter((el) => el);
  // END



// BEGIN (write your solution here)
const diff = (path1, path2, cb) => {
  fs.readFile(path1, 'utf-8', (err1, content1) => {
    if (err1) {
      console.log(err1)
      cb(err1);
      return;
    }
    // console.log(content1, 'content1')
    fs.readFile(path2, 'utf-8', (err2, content2) => {
      if (err2) {
        console.log(err2)
        cb(err2);
        return;
      }
      console.log(content1);
      console.log(content2);
      cb(null, compare(content1, content2));
      return;
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


const read1 = fs.readFileSync(file1, 'utf-8');
const read2 = fs.readFileSync(file2, 'utf-8');
const read3 = fs.readFileSync(file3, 'utf-8');
const read4 = fs.readFileSync(file4, 'utf-8');
const read5 = fs.readFileSync(file5, 'utf-8');


// diff(file1, file3, (err, data) => console.log(data));


// const result = [
//   ['ext', 'text'],
//   ['haha', ''],
//   ['', 'ehu'],
//   ['text', ''],
//   [null, 'aha'],
// ];


console.log(compare(read4, read5))