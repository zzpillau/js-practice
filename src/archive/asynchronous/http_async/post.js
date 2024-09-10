import https from 'https';
import { hostname } from 'os';
import querystring from 'querystring';

const options = {
  hostname: 'ru.hexlet.io',
  // path: 'my',
  method: 'GET',
}

const req = https.request(options, res => {
  console.log(res.statusCode);
});

req.end();

const postData = querystring.stringify({
  'msg': 'Hello World!',
  'key': 'value',
});

console.log(Buffer.byteLength(postData));

const options1 = {
  hostname: 'www.google.com',
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData),
  }
};

const req2 = https.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
})

req2.write(postData)
req2.end()

