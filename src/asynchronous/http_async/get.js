import http from 'http';

// console.log(http);


const url = 'http://ru.hexlet.io/my';
const url1 = 'http://c99925gp.beget.tech/pages/final/index.html/'

// // http.get(url1, res => {
// //   console.log(res.headers);
// // })

// const options = {
//   protocol: 'http:',
//   hostname: 'ru.hexlet.io',
// };

// http.get(options, res => {
//   console.log(res.statusCode);
// })

const req = http.get(url1, res => {
  const body = [];
  res.on('data', chunk => {
    body.push(chunk.toString())
  })
  res.on('end', () => {
    const html = body.join();
    console.log(html);    
  })
  
  console.log(res.statusCode);

  res.on('error', e => {
    console.log(`Got error: ${e.message}`);
  })
  
 
}) 


req.on('error', e => {
  console.log(`Got error: ${e.message}`);
})

req.end()

